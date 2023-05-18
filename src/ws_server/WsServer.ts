import { WebSocketServer } from 'ws';
import 'dotenv/config';

const WS_PORT = process.env.PORT || 8080;

const ws = new WebSocketServer({})