import {UserCheckIn} from "../shared/types";

export type ResponseFromStore = {
    responseText: string;
    allUserCheckIns?: UserCheckIn[];
    errorMessage?: string;
}

export interface Store {
    create(userCheckIn: UserCheckIn): Promise<ResponseFromStore>
    read(): Promise<ResponseFromStore>
    delete(): void
}

export class InMemoryStore implements Store {

    constructor(private userCheckIns: UserCheckIn[] = []) {
        this.userCheckIns = userCheckIns;
    }

    create = async (userCheckIn: UserCheckIn): Promise<ResponseFromStore> => {
        try {
            this.userCheckIns.push(userCheckIn);
            return {
                responseText: "Successfully stored check in."
            };
        } catch (e) {
            throw new Error(e)
        }
    };

    read = async (): Promise<ResponseFromStore> => {
        return {
            responseText: 'Successfully fetched check ins.',
            allUserCheckIns: this.userCheckIns
        };
    };

    delete = async () => {
        this.userCheckIns = []
    }
}