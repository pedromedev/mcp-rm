import {
  DisciplinaGetInput,
  DisciplinaPostInput,
} from "../models/disciplina.js";
import { callTotvsEndpoint } from "../services/httpService.js";

const RESOURCE_PATH = "/RMSRestDataServer/rest/EduDisciplinaData";

export const buscarDisciplinas = async ({
  urlRm,
  basicAuth,
}: DisciplinaGetInput): Promise<string> =>
  callTotvsEndpoint({
    baseUrl: urlRm,
    resource: RESOURCE_PATH,
    basicAuth,
    method: "GET",
  });

export const criarDisciplina = async ({
  urlRm,
  basicAuth,
  payload,
}: DisciplinaPostInput): Promise<string> =>
  callTotvsEndpoint({
    baseUrl: urlRm,
    resource: RESOURCE_PATH,
    basicAuth,
    method: "POST",
    body: payload,
  });

