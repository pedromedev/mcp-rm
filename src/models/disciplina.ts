import { z } from "zod";
import {
  baseRequestSchema,
  nullableNumber,
  nullableString,
} from "./common.js";

export const disciplinaPostPayloadSchema = z
  .object({
    CODCOLIGADA: z.number(),
    CODDISC: z.string(),
    NOME: z.string(),
    NOMEREDUZIDO: nullableString.optional(),
    CH: z.number(),
    CODGRUPOCOMPLEMENTO: nullableString.optional(),
    ESTAGIO: z.string(),
    CODTIPOCURSO: z.number(),
    ITINERARIOFORMATIVO: z.string(),
    CODDISCCENSO: nullableString.optional(),
    CHEXTENSAO: nullableNumber.optional(),
    CODDISCHIST: nullableString.optional(),
    COMPLEMENTO: nullableString.optional(),
    NUMCREDITOS: nullableNumber.optional(),
    OBJETIVO: nullableString.optional(),
    DECIMAIS: nullableNumber.optional(),
    CHESTAGIO: nullableNumber.optional(),
    CURSOLIVRE: nullableString.optional(),
    TIPOAULA: nullableString.optional(),
    TIPODISCPROVAO: nullableString.optional(),
    TIPONOTA: nullableString.optional(),
    CHTEORICA: nullableNumber.optional(),
    CHPRATICA: nullableNumber.optional(),
    CHLABORATORIAL: nullableNumber.optional(),
    CODEVENTO: nullableString.optional(),
    RECCREATEDBY: nullableString.optional(),
    RECCREATEDON: nullableString.optional(),
    RECMODIFIEDBY: nullableString.optional(),
    RECMODIFIEDON: nullableString.optional(),
    IDGRUPOCOMPLEMENTO: nullableString.optional(),
    CHTRABALHOCAMPO: nullableNumber.optional(),
    CHSEMINARIO: nullableNumber.optional(),
    CHORIENTACAOTUTORIAL: nullableNumber.optional(),
    CHTEORICOPRATICA: nullableNumber.optional(),
  })
  .passthrough();

export const disciplinaGetSchema = baseRequestSchema;
export type DisciplinaGetInput = z.infer<typeof disciplinaGetSchema>;
export const disciplinaGetArgs = disciplinaGetSchema.shape;

export const disciplinaPostSchema = baseRequestSchema.extend({
  payload: disciplinaPostPayloadSchema,
});
export type DisciplinaPostInput = z.infer<typeof disciplinaPostSchema>;
export const disciplinaPostArgs = disciplinaPostSchema.shape;

