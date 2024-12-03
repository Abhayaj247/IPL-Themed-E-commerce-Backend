import { Types } from "mongoose";
import { IProduct } from "./IProduct";

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  message: string;
  team?: string;
  user?: {
    name: string;
    email: string;
    team: string;
  };
}

export interface LoginResponse {
  message: string;
  token?: string;
  theme?: {
    primaryColor: string;
    secondaryColor: string;
    logoUrl: string;
    welcomeMessage: string;
  };
  user?: {
    id: Types.ObjectId;
    name: string;
    email: string;
    team: string;
  };
}

export interface ProductResponse {
  message: string;
  data?: IProduct | IProduct[] | null;
}
