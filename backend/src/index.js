//arranco el servidor
import { dotEnv } from "dotenv";
import { appe } from "./app";
import db from "./database";
const dotenv = dotEnv;
dotenv.config();
const app = appe;

async function main() {
    await app.listen(app.get("port"));
    console.log("Server on port ", app.get("port"));
}
main();