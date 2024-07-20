// validationSchema.js
import { z } from "zod";

export const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  companyName: z.string().min(1, "Company name is required"),
  numberOfEmployees: z
    .string()
    .min(1, "Number of employees is required")
    .refine((val) => !isNaN(val), "Must be a number"),
  workEmail: z
    .string()
    .min("Work email is required")
    .email("Invalid email format"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\d{11}$/, "Invalid phone number format"),
  plan: z.string().min(1, "Plan is required"),
  message: z.string().optional(),
});
