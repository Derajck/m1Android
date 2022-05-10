import { app } from "./app/app";
import { config } from "./app/app.config";
import { database } from "./app/app.database";

console.log("Starting application ...");

database.connect(async () => {
  const srv = app.init(config.server.port);
});
