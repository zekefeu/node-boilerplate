/**
 * main.ts
 *
 * License: MIT
 * Authors: zekefeu
 */

import dotenv from "dotenv";

import { logger } from "./utils/logger.js";

dotenv.config();

logger.info("Hello world");
