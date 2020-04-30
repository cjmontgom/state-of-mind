import { Request, Response } from 'express';
import {ResponseFromStore, Store, UserCheckIn} from "../store/InMemoryStore";

interface CrudController {
    store: Store;
    create(req: Request): Promise<Partial<Response>>;
    read(req: Request): Promise<Partial<Response>>;
}

export class UserCheckInController implements CrudController{
    store: Store;

    constructor(store: Store) {
        this.store = store
    }

    public async create(req: Partial<Request>): Promise<Partial<Response>> {
        const userCheckIn: UserCheckIn = {
            ...req.body
        };
        return await this.store.create(userCheckIn)
        .then((res: ResponseFromStore) => {
            return {
                statusCode: 200,
                statusMessage: res.responseText
            };
        })
    }

    public read(req: Request): Promise<Partial<Response>> {
        throw new Error("Method not implemented.");
    }
}