/**
 * main.ts
 * 
 * License: MIT
 * Authors: fuka-g
 */

import dotenv from "dotenv";

import { logger } from "./utils/logger.js";

dotenv.config();

logger.info("Hello world");
logger.fatal("error", { error: new Error("Oh noes!") });
