export interface BasicAuthCredentials {
  username: string;
  password: string;
}

export const parseBasicAuth = (value: string): BasicAuthCredentials => {
  const [username, ...passwordParts] = value.split(":");

  if (!username || passwordParts.length === 0) {
    throw new Error(
      "Credenciais de Basic Auth inválidas. Utilize o formato usuario:senha."
    );
  }

  return {
    username,
    password: passwordParts.join(":"),
  };
};

export const encodeBasicAuth = (credentials: BasicAuthCredentials): string =>
  Buffer.from(
    `${credentials.username}:${credentials.password}`,
    "utf-8"
  ).toString("base64");

