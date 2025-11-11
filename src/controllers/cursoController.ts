import {
  CursoGetInput,
  CursoPostInput,
} from "../models/curso.js";
import { callTotvsEndpoint } from "../services/httpService.js";

const RESOURCE_PATH = "/RMSRestDataServer/rest/EduCursoData";

export const buscarCursos = async ({
  urlRm,
  basicAuth,
}: CursoGetInput): Promise<string> =>
  callTotvsEndpoint({
    baseUrl: urlRm,
    resource: RESOURCE_PATH,
    basicAuth,
    method: "GET",
  });

export const criarCurso = async ({
  urlRm,
  basicAuth,
  payload,
}: CursoPostInput): Promise<string> =>
  callTotvsEndpoint({
    baseUrl: urlRm,
    resource: RESOURCE_PATH,
    basicAuth,
    method: "POST",
    body: payload,
  });

