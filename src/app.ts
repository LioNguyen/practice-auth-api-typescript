require("dotenv").config();
import config from "config";
import express from "express";

import connectToDb from "@/utils/connectToDb";
import log from "@/utils/logger";
import router from "@/routes/index";

const app = express();

app.use(router);

const port = config.get("port");

app.listen(port, () => {
  log.info(`App started at http://localhost:${port}`);

  connectToDb();
});
