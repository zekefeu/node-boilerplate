import { test, expect } from "vitest";

test.skip("Default test", () => {
	expect("test").toEqual("test");
});
