import { CursoPostInput } from "../models/curso.js";
import { callTotvsEndpoint } from "../services/httpService.js";
import { getRmConfig } from "../utils/env.js";

const RESOURCE_PATH = "/RMSRestDataServer/rest/EduCursoData";

export const buscarCursos = async (): Promise<string> => {
  const { urlRm, basicAuth } = getRmConfig();
  return callTotvsEndpoint({
    baseUrl: urlRm,
    resource: RESOURCE_PATH,
    basicAuth,
    method: "GET",
  });
};

export const criarCurso = async (
  payload: CursoPostInput["payload"]
): Promise<string> => {
  const { urlRm, basicAuth } = getRmConfig();
  return callTotvsEndpoint({
    baseUrl: urlRm,
    resource: RESOURCE_PATH,
    basicAuth,
    method: "POST",
    body: payload,
  });
};

