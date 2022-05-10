import mongoose from "mongoose";
import { config } from "./app.config";
class Database {
  async connect(cb: () => void) {
    const connexionString = config.mongodb.dbURI;
    console.log("Trying to connect to database..");

    this.connectToDatabase(connexionString);

    mongoose.connection.once("open", () => {
      cb();
      console.log(`Database opened`);
    });

    mongoose.connection.on("error", () => {
      throw new Error(`unable to connect to database`);
    });

    mongoose.connection.on("disconnected", () => {
      console.log(`Disconnected to database`);
      this.connect((): void => {});
    });
  }

  connectToDatabase(path: string) {
    mongoose
      .connect(path)
      .then(() => {
        console.log("Successfully connected to database");
      })
      .catch((error) => {
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
      });
  }
}

export const database = new Database();
