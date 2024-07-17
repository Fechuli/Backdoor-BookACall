import { z } from "zod";

export const ClientFormValidation = z.object({
  name: z
    .string()
    .min(2, "Username must be at least 2 characters.")
    .max(50, "Username must be at most 50 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .refine(
      (phone) => /^\+\d{10,15}$/.test(phone),
      "Please enter a valid phone number."
    ),
});

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  birthDate: z.coerce.date(),
  budget: z.enum(["<10000€", ">10000€"]),
  occupation: z
    .string()
    .min(2, "Occupation must be at least 2 characters")
    .max(500, "Occupation must be at most 500 characters"),
  organization: z
    .string()
    .min(2, "Organization must be at least 2 characters")
    .max(500, "Organization must be at most 500 characters"),
  details: z
    .string()
    .min(50, "Details must be at least 50 characters")
    .max(5000, "Details must be at most 5000 characters"),
  findUs: z.enum(["Awwwards", "Instagram", "LinkedIn", "Other"]),
  serviceAgreement: z.boolean().default(false).optional(),
  dataUsageConsent: z.boolean().default(false).optional(),
  privacyConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "You must consent to privacy in order to proceed",
    }),
});
