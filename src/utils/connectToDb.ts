import config from "config";
import mongoose from "mongoose";

import log from "@/utils/logger";

async function connectToDb() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    log.info("Connect to DB");
  } catch (e) {
    log.error(e, "Cannot connect to Db");

    process.exit(1);
  }
}

export default connectToDb;
