import {Server, IServer} from './server';
import {PORT} from './config/environment'

const server: IServer = new Server();

server.start(PORT);
