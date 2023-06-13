# mozey/deno-examples

[Install deno](https://formulae.brew.sh/formula/deno)
```bash
brew install deno
```

Clone this repo
```bash
export PRO_PATH="/path/to/your/projects/dir"
cd $PRO_PATH
git clone https://github.com/mozey/deno-examples.git
cd deno-examples
```

Then try the commands below...


## Modules

[Deno modules](https://deno.com/manual@v1.34.2/basics/modules#modules): *"allows you to include and use modules held elsewhere, on your local file system or remotely... using the ECMAScript 6 import/export standard"*

```bash
deno run --allow-net modules.ts
```


## Deps

Create a [deps.ts file](https://deno.com/manual@v1.34.2/basics/modules#it-seems-unwieldy-to-import-urls-everywhere): *"And throughout the same project, you can import from the deps.ts and avoid having many references to the same URL"*

[Reload all deps](https://deno.com/manual@v1.34.2/basics/modules/reloading_modules#to-reload-everything)
```bash
deno cache --reload deps.ts
```

[Reload a specific module](https://deno.com/manual@v1.34.2/basics/modules/reloading_modules#to-reload-specific-modules)
```bash
deno cache --reload=https://deno.land/std@0.191.0/testing/asserts.ts app_test.ts
```


## Testing

[Testing basics](https://deno.com/manual@v1.34.2/basics/testing): *"Deno has a built-in test runner that you can use for testing JavaScript or TypeScript code"*
```bash
deno test --failfast
```


## Debugging 

**TODO**
[Debugging Your Code](https://deno.com/manual@v1.34.2/basics/debugging_your_code#debugging-your-code): *"Deno supports the V8 Inspector Protocol used by Chrome, Edge and Node.js. This makes it possible to debug Deno programs using Chrome DevTools or other clients that support the protocol (for example VSCode)"*


## Vendoring

**TODO**
[Deno vendoring](https://deno.com/manual@v1.34.2/basics/modules#but-what-if-the-host-of-the-url-goes-down-the-source-wont-be-available): *""Production software should always vendor its dependencies""*
```bash
deno vendor
```


## Importing npm packages

[npm: specifiers](https://deno.com/manual@v1.34.2/node/npm_specifiers): *"Since version 1.28, Deno has native support for importing npm packages"*
```bash
deno --version
deno run npm.ts
```

