import { HabilitacaoPostInput } from "../models/habilitacao.js";
import { callTotvsEndpoint } from "../services/httpService.js";
import { getRmConfig } from "../utils/env.js";

const RESOURCE_PATH = "/RMSRestDataServer/rest/EduHabilitacaoData";

export const buscarHabilitacoes = async (): Promise<string> => {
  const { urlRm, basicAuth } = getRmConfig();
  return callTotvsEndpoint({
    baseUrl: urlRm,
    resource: RESOURCE_PATH,
    basicAuth,
    method: "GET",
  });
};

export const criarHabilitacao = async (
  payload: HabilitacaoPostInput["payload"]
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

