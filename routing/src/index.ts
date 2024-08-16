import dotenv from "dotenv";
dotenv.config();

import { app } from "./app";

const port = process.env.PORT || 5000;

async function bootstrap() {
  app
    .listen(+port, "0.0.0.0", () => {
      console.log(`Server is up at port ${port}.`);
    })
    .on("error", function (err) {
      console.error("Error occured on server start: ", err);
    });
}

bootstrap();
