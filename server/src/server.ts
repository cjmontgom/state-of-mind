import express, {Express, Request, Response} from "express";
import * as bodyParser from 'body-parser';

export interface IServer {
  express: Express,
  start(port: string | number): void
}

export class Server implements IServer {
  public express: Express;

  constructor() {
    this.express = express();
    this.express.use(bodyParser.json());
    this.loadRoutes()
  }

  public start(port: string | number): void {
    this.express.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
   });
  }

  private loadRoutes(): void {
    this.express.use('/api', (req: Request, res: Response) => {
      res.json({message: 'Hello from the other siiiiide'});
    });
  }
}

