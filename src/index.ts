import { httpServer } from "./http_server/index";
import { wss } from './ws_server/WsServer';
import 'dotenv/config';

const HTTP_PORT = 8181;
const WS_PORT = process.env.PORT || 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

wss.on('listening', () => {
  console.log(`WebSocket is running on server ${WS_PORT} pid: ${process.pid}`);
});