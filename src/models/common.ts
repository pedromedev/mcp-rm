import { z } from "zod";

export const baseRequestSchema = z.object({
  urlRm: z.string().min(1, "Informe a URL do servidor RM."),
  basicAuth: z
    .string()
    .regex(
      /^[^:]+:.+$/,
      "Informe as credenciais no formato usuario:senha."
    ),
});

export type BaseRequest = z.infer<typeof baseRequestSchema>;

export const nullableString = z.union([z.string(), z.null()]);
export const nullableNumber = z.union([z.number(), z.null()]);

