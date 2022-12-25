/**
 * utils/logger.ts
 *
 * License: MIT
 * Authors: zekefeu
 */

import * as keylog from "keylog";

export const logger = new keylog.Logger({
	name: "PROJECT_NAME",
	transports: [
		new keylog.transports.ConsoleTransport({ level: "info" }),
		new keylog.transports.FileTransport({ level: "info", path: "latest.log" }),
	],
});
