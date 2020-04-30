type Mood = 1 | 2 | 3 | 4 | 5 | 6 | 7

export enum Feeling {
    Stressed = "STRESSED",
    Depressed = "DEPRESSED",
    Optimistic = "OPTIMISTIC",
    Bored = "BORED",
    Happy = "HAPPY",
    Content = "CONTENT"
}

export type UserCheckIn = {
    mood: Mood;
    feeling: Feeling;
    comment?: String;
}

export type ResponseFromStore = {
    responseText: string;
    allUserCheckIns?: UserCheckIn[];
    errorMessage?: string;
}

export interface Store {
    create(userCheckIn: UserCheckIn): Promise<ResponseFromStore>
    read(): Promise<ResponseFromStore>
}

export class InMemoryStore implements Store {

    constructor(private userCheckIns: UserCheckIn[] = []) {
        this.userCheckIns = userCheckIns;
    }

    create = async (userCheckIn: UserCheckIn): Promise<ResponseFromStore> => {
        this.userCheckIns.push(userCheckIn) ;
        return {
            responseText: "Successfully stored check in."
        };
    };

    read = async (): Promise<ResponseFromStore> => {
        return {
            responseText: 'Successfully fetched check ins.',
            allUserCheckIns: this.userCheckIns
        };
    };
}