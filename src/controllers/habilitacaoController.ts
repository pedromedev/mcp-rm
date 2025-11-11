import {
  HabilitacaoGetInput,
  HabilitacaoPostInput,
} from "../models/habilitacao.js";
import { callTotvsEndpoint } from "../services/httpService.js";

const RESOURCE_PATH = "/RMSRestDataServer/rest/EduHabilitacaoData";

export const buscarHabilitacoes = async ({
  urlRm,
  basicAuth,
}: HabilitacaoGetInput): Promise<string> =>
  callTotvsEndpoint({
    baseUrl: urlRm,
    resource: RESOURCE_PATH,
    basicAuth,
    method: "GET",
  });

export const criarHabilitacao = async ({
  urlRm,
  basicAuth,
  payload,
}: HabilitacaoPostInput): Promise<string> =>
  callTotvsEndpoint({
    baseUrl: urlRm,
    resource: RESOURCE_PATH,
    basicAuth,
    method: "POST",
    body: payload,
  });

