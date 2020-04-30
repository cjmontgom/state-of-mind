import { Request, Response } from 'express';
import {Feeling, ResponseFromStore, Store, UserCheckIn} from "../store/InMemoryStore";

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

    private static userCheckInTypeGuard(toBeDetermined: UserCheckIn): toBeDetermined is UserCheckIn {
        return Object.values(Feeling).includes(toBeDetermined.feeling)
        ? toBeDetermined.mood > 0 && toBeDetermined.mood < 8
        : false
    }

    public async create(req: Partial<Request>): Promise<Partial<Response>>  {
        const userCheckIn = req.query!.body;
        let response = {};

        try {
            if (userCheckIn && typeof userCheckIn === "string") {
                const parsedUserCheckIn: UserCheckIn = JSON.parse(userCheckIn);

                if (UserCheckInController.userCheckInTypeGuard(parsedUserCheckIn))
                await this.store.create(parsedUserCheckIn)
                .then((res: ResponseFromStore) => {
                    response = {
                        statusCode: 200,
                        statusMessage: res.responseText
                    }
                });
                else {
                    response = {
                        statusCode: 401,
                        statusMessage: "The data was unexpected. The check in was not stored."
                    }
                }
            }
        } catch (e) {
            response = {
                statusCode: 500,
                statusMessage: "Unexpected error occurred"
            }
        }
        return response
    }

    public read(req: Request): Promise<Partial<Response>> {
        throw new Error("Method not implemented.");
    }
}