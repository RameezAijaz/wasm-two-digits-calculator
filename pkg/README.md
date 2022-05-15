# WASM-TWO-DIGITS-CALCULATOR
Simple Rust WebAssembly example.

![logo](https://cdn-images-1.medium.com/max/1600/1*BfUvDZ4-7Yo-YwMOTNEbMA.png "logo")

# Install Dependencies

1. Install Rust following [these instructions](https://www.rust-lang.org/tools/install).
2. Restart your terminal.
3. Install `wasm-pack` using `cargo install wasm-pack`.

# Building this Project

1. Run `wasm-pack build --target web` to build the application.
2. It will generate build inside `pkg` directory.

# Running this Project

1. Install `http-server` [npm](https://www.npmjs.com/package/http-server) by running `npm i -g http-server`
2. Start local server inside this directory by running this command `http-server -p 8080`
3. Open `http://127.0.0.1:8080/` in the browser.