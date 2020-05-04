import {Mood, UserCheckIn} from "../shared/types";

export type ResponseFromStore = {
    responseText: string;
    allUserCheckIns?: UserCheckIn[];
    averageMood?: Mood;
    totalNumberOfCheckIns?: number;
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
        this.calculateAverageMood(this.userCheckIns)
        return {
            responseText: 'Successfully fetched check ins.',
            allUserCheckIns: this.userCheckIns,
            averageMood: this.calculateAverageMood(this.userCheckIns),
            totalNumberOfCheckIns: this.userCheckIns.length
        };
    };

    delete = async () => {
        this.userCheckIns = []
    };

    calculateAverageMood = (userCheckIns: UserCheckIn[]): Mood => {
        const reducer = (accumulator: number, currentCheckIn: UserCheckIn): number => accumulator + currentCheckIn.mood;
        return <Mood>(userCheckIns.reduce(reducer, 0) / userCheckIns.length);
    }
}