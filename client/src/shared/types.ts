type Mood = 1 | 2 | 3 | 4 | 5 | 6 | 7

export enum Feelings {
    Stressed = "STRESSED",
    Depressed = "DEPRESSED",
    Optimistic = "OPTIMISTIC",
    Bored = "BORED",
    Happy = "HAPPY",
    Content = "CONTENT"
}

export type UserCheckIn = {
    mood: Mood;
    feeling: string[];
    comment?: String;
}