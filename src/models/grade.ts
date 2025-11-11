import { z } from "zod";
import {
  baseRequestSchema,
  nullableNumber,
  nullableString,
} from "./common.js";

export const gradePostPayloadSchema = z
  .object({
    CODGRADE: z.string(),
    DESCRICAO: z.string(),
    CODCOLIGADA: z.number(),
    CODCURSO: z.string(),
    CURSO: z.string(),
    CODHABILITACAO: z.string(),
    HABILITACAO: z.string(),
    DTINICIO: z.string(),
    DTFIM: z.string(),
    CARGAHORARIA: z.number(),
    CONTROLEVAGAS: z.string(),
    STATUS: z.string(),
    TIPOATIVIDADECURRICULAR: z.string(),
    TIPOELETIVA: z.string(),
    TIPOOPTATIVA: z.string(),
    REGIME: z.string(),
    MAXCREDPERIODO: z.number(),
    OBSERVACOES: nullableString.optional(),
    TOTALPERIODOS: nullableNumber.optional(),
  })
  .passthrough();

export const gradeGetSchema = baseRequestSchema;
export type GradeGetInput = z.infer<typeof gradeGetSchema>;
export const gradeGetArgs = gradeGetSchema.shape;

export const gradePostSchema = baseRequestSchema.extend({
  payload: gradePostPayloadSchema,
});
export type GradePostInput = z.infer<typeof gradePostSchema>;
export const gradePostArgs = gradePostSchema.shape;

