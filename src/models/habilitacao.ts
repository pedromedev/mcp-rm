import { z } from "zod";
import { baseRequestSchema } from "./common.js";

export const habilitacaoPostPayloadSchema = z
  .object({
    CODCOLIGADA: z.number(),
    CODHABILITACAO: z.string(),
    NOME: z.string(),
    CODCURSO: z.string(),
    NOMECURSO: z.string(),
    CURRICULODIGITAL: z.string(),
  })
  .passthrough();

export const habilitacaoGetSchema = baseRequestSchema;
export type HabilitacaoGetInput = z.infer<typeof habilitacaoGetSchema>;
export const habilitacaoGetArgs = habilitacaoGetSchema.shape;

export const habilitacaoPostSchema = baseRequestSchema.extend({
  payload: habilitacaoPostPayloadSchema,
});
export type HabilitacaoPostInput = z.infer<typeof habilitacaoPostSchema>;
export const habilitacaoPostArgs = habilitacaoPostSchema.shape;

