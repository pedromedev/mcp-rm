const getRequiredEnv = (key: string): string => {
  const value = process.env[key];
  if (!value || value.trim().length === 0) {
    throw new Error(
      `Variável de ambiente obrigatória ausente: ${key}. Configure-a antes de utilizar as ferramentas.`
    );
  }

  return value.trim();
};

const resolveEnv = (keys: string[]): string => {
  for (const key of keys) {
    const value = process.env[key];
    if (value && value.trim().length > 0) {
      return value.trim();
    }
  }
  return getRequiredEnv(keys[0]);
};

export const getRmConfig = () => ({
  urlRm: resolveEnv(["URL_RM", "RM_URL", "TOTVS_RM_URL"]),
  basicAuth: resolveEnv(["BASIC_AUTH", "RM_BASIC_AUTH", "TOTVS_BASIC_AUTH"]),
});

