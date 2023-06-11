import { Greeter } from "./app.ts";
import { assertEquals } from "./deps.ts";

Deno.test("url.href", () => {
  const url = new URL("./foo.js", "https://deno.land/");
  assertEquals(url.href, "https://deno.land/foo.js");
});

Deno.test("Greeter.sayHello", () => {
	assertEquals(new Greeter().sayHello("World"), "Hello World")
});
