import { DisciplinaPostInput } from "../models/disciplina.js";
import { callTotvsEndpoint } from "../services/httpService.js";
import { getRmConfig } from "../utils/env.js";

const RESOURCE_PATH = "/RMSRestDataServer/rest/EduDisciplinaData";

export const buscarDisciplinas = async (): Promise<string> => {
  const { urlRm, basicAuth } = getRmConfig();
  return callTotvsEndpoint({
    baseUrl: urlRm,
    resource: RESOURCE_PATH,
    basicAuth,
    method: "GET",
  });
};

export const criarDisciplina = async (
  payload: DisciplinaPostInput["payload"]
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

