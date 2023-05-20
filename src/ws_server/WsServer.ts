import { WebSocketServer, createWebSocketStream } from 'ws';
import 'dotenv/config';
import internal from 'stream';
import { httpServer } from '../http_server/index';
import { wsHandler } from '../controller/wsHandler';

const WS_PORT = Number(process.env.PORT || 8080);

export let duplex: internal.Duplex;

export const wss = new WebSocketServer({ port: WS_PORT });

wss.on('connection', (ws) => {
  console.log('New socket connected ...');
  ws.on('error', console.error);

  const duplex = createWebSocketStream(ws, {decodeStrings: false});

  duplex.on('data', async (data: Buffer) => {
    try {
      console.log('Command from client', data.toString());
      const command = data.toString();
      console.log(command);
      const msg = await wsHandler(command);
      if(msg)
      ws.send(msg)
    }
    catch (error) {
      console.log(error);
    }
  });

  duplex.on('end', () => {
    console.log('Socket is closed');
  });
});

process.on('SIGINT', () => {
  console.log('All connections closed');

  wss.clients.forEach((ws) => {
    ws.send('server is closed');
    ws.close();
    wss.close(() => {
      httpServer.close(() => process.exit(0));
    })
  })
})