//arranco el servidor
import dotenv from "dotenv";
import app from "./app";
//como no exporto nada no lo importo
require("./database");

/* dotenv.config(); */

async function main() {
    await app.listen(app.get("port"));
    console.log("Server on port", app.get("port"));
}
main();