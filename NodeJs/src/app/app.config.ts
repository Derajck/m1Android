import * as dotenv from "dotenv";
import * as env from "env-var";

dotenv.config({ path: ".env" });

export const config = {
  server: {
    port: env.get("NODE_PORT").required().asIntPositive(),
  },
  mongodb: {
    dbURI: env.get("DB_CONN_STRING").required().asString(),
  },
  jwt: {
    secretKey: env.get("JWT_SECRET").required().asString(),
    expiration: env.get("JWT_EXPIRATION").required().asIntPositive(),
  },
  cloudinary: {
    name: env.get("CLOUD_NAME").required().asString(),
    api_key: env.get("API_KEY").required().asString(),
    api_secret: env.get("API_SECRET").required().asString(),
  },
};
