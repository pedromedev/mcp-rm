import {
  GradeGetInput,
  GradePostInput,
} from "../models/grade.js";
import { callTotvsEndpoint } from "../services/httpService.js";

const RESOURCE_PATH = "/RMSRestDataServer/rest/EduGradeData";

export const buscarGrades = async ({
  urlRm,
  basicAuth,
}: GradeGetInput): Promise<string> =>
  callTotvsEndpoint({
    baseUrl: urlRm,
    resource: RESOURCE_PATH,
    basicAuth,
    method: "GET",
  });

export const criarGrade = async ({
  urlRm,
  basicAuth,
  payload,
}: GradePostInput): Promise<string> =>
  callTotvsEndpoint({
    baseUrl: urlRm,
    resource: RESOURCE_PATH,
    basicAuth,
    method: "POST",
    body: payload,
  });

