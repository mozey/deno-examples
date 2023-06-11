# mozey/deno-examples


## Modules

[Deno modules](https://deno.com/manual@v1.34.2/basics/modules#modules): *"allows you to include and use modules held elsewhere, on your local file system or remotely... using the ECMAScript 6 import/export standard"*

```bash
deno run --allow-net modules.ts
```


## Deps

Create a [deps.ts file](https://deno.com/manual@v1.34.2/basics/modules#it-seems-unwieldy-to-import-urls-everywhere): *"And throughout the same project, you can import from the deps.ts and avoid having many references to the same URL"*


## Testing

**TODO** Add some tests

[Testing basics](https://deno.com/manual@v1.34.2/basics/testing)

```bash
deno test --failfast
```


## Vendoring

**TODO**
[Deno vendoring](https://deno.com/manual@v1.34.2/basics/modules#but-what-if-the-host-of-the-url-goes-down-the-source-wont-be-available): *""Production software should always vendor its dependencies""*
```bash
deno vendor
```
