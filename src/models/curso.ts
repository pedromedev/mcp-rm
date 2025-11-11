import { z } from "zod";
import {
  baseRequestSchema,
  nullableNumber,
  nullableString,
} from "./common.js";

export const cursoPostPayloadSchema = z
  .object({
    CODCOLIGADA: z.number(),
    CODCURSO: z.string(),
    NOME: z.string(),
    CODTIPOCURSO: z.number(),
    ENVIARCENSO: z.number(),
    COMPLEMENTO: nullableString.optional(),
    CODCURINEP: nullableString.optional(),
    DECRETO: nullableString.optional(),
    REGCONTRATO: nullableString.optional(),
    DESCRICAO: nullableString.optional(),
    CFGMATRICULA: nullableString.optional(),
    HABILITACAO: nullableString.optional(),
    CAPES: nullableString.optional(),
    CURPRESDIST: nullableString.optional(),
    CODMODALIDADECURSO: nullableNumber.optional(),
    MASCARATURMA: nullableString.optional(),
    IDEIXOTECNOLOGICO: nullableString.optional(),
    TIPOOFERTA: nullableString.optional(),
    CODESCOLA: nullableString.optional(),
    CODAREA: nullableString.optional(),
  })
  .passthrough();

export const cursoGetSchema = baseRequestSchema;
export type CursoGetInput = z.infer<typeof cursoGetSchema>;
export const cursoGetArgs = cursoGetSchema.shape;

export const cursoPostSchema = baseRequestSchema.extend({
  payload: cursoPostPayloadSchema,
});
export type CursoPostInput = z.infer<typeof cursoPostSchema>;
export const cursoPostArgs = cursoPostSchema.shape;

