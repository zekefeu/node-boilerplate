/**
 * utils/logger.ts
 * 
 * License: MIT
 * Authors: fuka-g
 */

import * as keylog from "@fuka-g/keylog";

export const logger = new keylog.Logger({
	name: "app",
	transports: [
		new keylog.transports.ConsoleTransport({ level: "info" }),
		new keylog.transports.FileTransport({ level: "info", path: "latest.log" }),
	],
});
