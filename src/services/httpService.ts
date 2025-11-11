import { spawn } from "node:child_process";
import { encodeBasicAuth, parseBasicAuth } from "../utils/auth.js";
import { normalizeBaseUrl } from "../utils/url.js";

type HttpMethod = "GET" | "POST";

export interface TotvsRequestOptions {
  baseUrl: string;
  resource: string;
  basicAuth: string;
  method?: HttpMethod;
  body?: unknown;
  headers?: Record<string, string>;
}

const runCurl = (args: string[]) =>
  new Promise<string>((resolve, reject) => {
    const child = spawn("curl", args);
    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });

    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    child.on("error", (error) => reject(error));

    child.on("close", (code) => {
      if (code === 0) {
        resolve(stdout);
      } else {
        const message = stderr.trim() || stdout.trim() || "Erro desconhecido";
        reject(new Error(`curl finalizou com código ${code}: ${message}`));
      }
    });
  });

const buildHeaders = (
  authHeader: string,
  extraHeaders: Record<string, string>
): string[] => {
  const headersArgs: string[] = ["--header", authHeader];

  Object.entries(extraHeaders).forEach(([key, value]) => {
    headersArgs.push("--header", `${key}: ${value}`);
  });

  return headersArgs;
};

export const callTotvsEndpoint = async ({
  baseUrl,
  resource,
  basicAuth,
  method = "GET",
  body,
  headers = {},
}: TotvsRequestOptions): Promise<string> => {
  const normalizedBase = normalizeBaseUrl(baseUrl);
  const fullUrl = `${normalizedBase}${resource.startsWith("/") ? "" : "/"}${resource}`;
  const credentials = parseBasicAuth(basicAuth);
  const authHeader = `Authorization: Basic ${encodeBasicAuth(credentials)}`;

  const mergedHeaders =
    body !== undefined
      ? { "Content-Type": "application/json", ...headers }
      : headers;

  const args = [
    "--silent",
    "--show-error",
    "--location",
    "--request",
    method,
    fullUrl,
    ...buildHeaders(authHeader, mergedHeaders),
  ];

  if (body !== undefined) {
    const payload =
      typeof body === "string" ? body : JSON.stringify(body, null, 2);
    args.push("--data", payload);
  }

  const response = await runCurl(args);

  return response.trim() || "Resposta vazia do servidor.";
};

