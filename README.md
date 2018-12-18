# TypeScript Browserify Template
An example setup using [TypeScript](https://www.typescriptlang.org/) and [Watchify](https://github.com/browserify/browserify) for front-end web development.

## Getting started
1. Run `tsc --watch` to compile TypeScript to JavaScript and watch for changes, recompiling when they are detected.
2. Run `watchify out/main.js -o out/bundle.js -v` to bundle modules into a single file and watch for changes.
3. Load `index.html` in a browser served from a local web server.
    * The Visual Studio Code extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) is great for this.
