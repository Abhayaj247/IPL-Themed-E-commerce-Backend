import { z } from 'zod';
import { IPL_TEAMS, PRODUCT_CATEGORIES } from './constants';
import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';


export const registerUserSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: "Name is required",
            invalid_type_error: "Name must be a string"
        })
        .min(2, "Name must be at least 2 characters long")
        .max(50, "Name cannot exceed 50 characters"),

        email: z.string({
            required_error: "Email is required",
            invalid_type_error: "Invalid email format"
        })
        .email("Invalid email format")
        .min(5, "Email must be at least 5 characters long")
        .max(100, "Email cannot exceed 100 characters"),

        password: z.string({
            required_error: "Password is required",
            invalid_type_error: "Password must be a string"
        })
        .min(6, "Password must be at least 6 characters long")
        .max(100, "Password cannot exceed 100 characters")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
            "Password must contain at least one uppercase letter, one lowercase letter, and one number"
        )
    })
});

export const loginUserSchema = z.object({
    body: z.object({
        email: z.string({
            required_error: "Email is required",
            invalid_type_error: "Invalid email format"
        })
        .email("Invalid email format"),

        password: z.string({
            required_error: "Password is required",
            invalid_type_error: "Password must be a string"
        })
        .min(6, "Password must be at least 6 characters long")
    })
});


export const createProductSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: "Product name is required",
            invalid_type_error: "Product name must be a string"
        })
        .min(3, "Product name must be at least 3 characters long")
        .max(100, "Product name cannot exceed 100 characters"),

        description: z.string({
            required_error: "Description is required",
            invalid_type_error: "Description must be a string"
        })
        .min(10, "Description must be at least 10 characters long")
        .max(1000, "Description cannot exceed 1000 characters"),

        price: z.number({
            required_error: "Price is required",
            invalid_type_error: "Price must be a number"
        })
        .min(0, "Price cannot be negative")
        .max(1000000, "Price cannot exceed 1,000,000"),

        imageUrl: z.string({
            required_error: "Image URL is required",
            invalid_type_error: "Image URL must be a string"
        })
        .url("Invalid image URL format"),

        category: z.enum([...PRODUCT_CATEGORIES], {
            required_error: "Category is required",
            invalid_type_error: "Invalid category selection"
        }),

        team: z.enum([...IPL_TEAMS], {
            required_error: "Team is required",
            invalid_type_error: "Invalid team selection"
        }), 
        
        sizes: z.array(z.string()).optional()
    })
});


export const teamProductsSchema = z.object({
    params: z.object({
        team: z.enum([...IPL_TEAMS], {
            required_error: "Team is required",
            invalid_type_error: "Invalid team selection"
        })
    })
});


export const validate = (schema: AnyZodObject) => 
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params
            });
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                res.status(400).json({
                    message: "Validation failed",
                    errors: error.errors.map(err => ({
                        field: err.path.join('.'),
                        message: err.message
                    }))
                });
                return;
            }
            res.status(500).json({
                message: "Internal server error during validation"
            });
            return;
        }
    };