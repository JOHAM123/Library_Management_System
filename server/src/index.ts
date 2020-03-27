import { App } from "./app";

async function main() {

    const PORT = process.env.PORT || 9080;
    const app = new App(PORT);
    await app.listen();
}

main();
