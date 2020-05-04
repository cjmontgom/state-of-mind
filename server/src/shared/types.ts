export type Mood = 1 | 2 | 3 | 4 | 5 | 6 | 7

export enum Feelings {
    Stressed = "Stressed",
    Depressed = "Depressed",
    Optimistic = "Optimistic",
    Bored = "Bored",
    Happy = "Happy",
    Content = "Content"
}

export type UserCheckIn = {
    mood: Mood;
    feeling: string[];
    comment?: String;
}