import { RequestHandler } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { assignTeam } from "../utils/teamAssigment";
import {
  AuthResponse,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
} from "../interfaces/auth.interfaces";
import { teamThemes } from "../config/themes";

export const register: RequestHandler<
  {},
  AuthResponse,
  RegisterRequest
> = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({
        message: "User already exists",
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const assignedTeam = assignTeam();

    const user = new User({
      name,
      email,
      password: hashedPassword,
      team: assignedTeam,
    });

    await user.save();
    res.status(201).json({
      message: "User registered successfully",
      team: assignedTeam,
      user: {
        name: user.name,
        email: user.email,
        team: user.team,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

export const login: RequestHandler<{}, LoginResponse, LoginRequest> = async (
  req,
  res
) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        res.status(400).json({ 
            message: "Invalid credentials" 
        });
        return
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        res.status(400).json({ 
            message: "Invalid credentials" 
        });
        return;
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "24h",
    });

    const theme = teamThemes[user.team];

    res.json({
      message: "Logged in successfully",
      token,
      theme: theme,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        team: user.team,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};
