import { assertEquals } from "./deps.ts";

Deno.test("url.href", () => {
  const url = new URL("./foo.js", "https://deno.land/");
  assertEquals(url.href, "https://deno.land/foo.js");
});
