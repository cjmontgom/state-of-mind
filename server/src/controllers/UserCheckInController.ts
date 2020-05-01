import {Response} from 'express';
import {Feeling, ResponseFromStore, Store, UserCheckIn} from "../store/InMemoryStore";

export interface CrudController {
    store: Store;
    create(req: any): Promise<Partial<Response>>;
    read(): Promise<Partial<Response>>;
}

export class UserCheckInController implements CrudController{
    store: Store;

    constructor(store: Store) {
        this.store = store
    }

    private static userCheckInTypeGuard(toBeDetermined: any): toBeDetermined is UserCheckIn {
        return Object.values(Feeling).includes(toBeDetermined.feeling[0])
            //   TODO check all the feelings
            //   something like ... return toBeDetermined.feeling.every( (val) => Object.values(Feeling).includes(val))
        ? toBeDetermined.mood > 0 && toBeDetermined.mood < 8
        : false
    }

    public async create(req: any): Promise<Partial<Response>>  {
        let response = {};
        try {
            const userCheckIn = req;
            if (!!userCheckIn) {
                if (UserCheckInController.userCheckInTypeGuard(userCheckIn))
                    await this.store.create(userCheckIn)
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
                statusMessage: "Unexpected error occurred",
            }
        }
        return response
    }

    public async read(): Promise<Partial<Response>> {
        let response = {};
        try {
            await this.store.read()
                .then((res: ResponseFromStore) => {
                    response = {
                        statusCode: 200,
                        statusMessage: res.responseText,
                        json: res.allUserCheckIns
                    }
                })
        } catch (e) {
            response = {
                statusCode: 500,
                statusMessage: "Unexpected error occurred",
            }
        }
        return response
    }
}