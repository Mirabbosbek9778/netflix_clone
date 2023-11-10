import * as z from "zod";

export const createAccountSchema = z.object({
  name: z.string().min(2).max(15),
  pin: z.string().min(4).max(4),
});

export const loginSchema = z.object({
  pin: z.string().min(4).max(4),
});
