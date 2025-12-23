import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(3),
  category: z.string(),
  price: z.number().positive(),
  stock: z.number().min(0),
  description: z.string().optional(),
});

export type ProductFormValues = z.infer<typeof productSchema>;
