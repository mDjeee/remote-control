import { httpServer } from "./src/http_server/index";
import { mouse } from "@nut-tree/nut-js";
import 'dotenv/config';

const HTTP_PORT = 8181;
const WS_PORT = process.env.PORT;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

console.log(WS_PORT);
