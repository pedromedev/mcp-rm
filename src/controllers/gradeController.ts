import { GradePostInput } from "../models/grade.js";
import { callTotvsEndpoint } from "../services/httpService.js";
import { getRmConfig } from "../utils/env.js";

const RESOURCE_PATH = "/RMSRestDataServer/rest/EduGradeData";

export const buscarGrades = async (): Promise<string> => {
  const { urlRm, basicAuth } = getRmConfig();
  return callTotvsEndpoint({
    baseUrl: urlRm,
    resource: RESOURCE_PATH,
    basicAuth,
    method: "GET",
  });
};

export const criarGrade = async (
  payload: GradePostInput["payload"]
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

