import { Request, Response } from 'express';
import {ResponseFromStore, Store, UserCheckIn} from "../store/InMemoryStore";

interface CrudController {
    store: Store;
    create(req: Request, res: Response): ResponseFromStore;
    read(req: Request, res: Response): ResponseFromStore;
}

export class UserCheckInController implements CrudController{
    store: Store;

    constructor(store: Store) {
        this.store = store
    }

    public create(req: Partial<Request>): ResponseFromStore {
        const userCheckIn: UserCheckIn = {
            ...req.body
        };
        this.store.create(userCheckIn);
        return {
            responseText: "Successfully stored check in."
        }
    }

    public read(req: Request): ResponseFromStore {
        throw new Error("Method not implemented.");
    }
}