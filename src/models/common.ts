import { z } from "zod";

export const baseRequestSchema = z.object({});

export type BaseRequest = z.infer<typeof baseRequestSchema>;

export const nullableString = z.union([z.string(), z.null()]);
export const nullableNumber = z.union([z.number(), z.null()]);

