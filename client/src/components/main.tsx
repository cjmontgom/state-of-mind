import React, { useState } from 'react'
import Mood from "./mood";
import Feeling from "./feeling";
import Comment from "./comment";

type Mood = 1 | 2 | 3 | 4 | 5 | 6 | 7

export enum FeelingType {
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

function Main() {

    const emptyCheckIn: UserCheckIn = { mood: 1, feeling: [], comment: ''};

    const [checkIn, setCheckIn] = useState({ ...emptyCheckIn });

    const handleCheckInChange = (newCheckInState) => {
        setCheckIn({...checkIn, ...newCheckInState});
    };

    return (
        <div>
            Main
            <Mood setMood={handleCheckInChange}/>
            <div>{checkIn.mood}</div>
            <Feeling setFeeling={handleCheckInChange}/>
            <Comment setComment={handleCheckInChange}/>
            <button onClick={() => {console.log(checkIn)}}>Submit</button>
        </div>
    );
}

export default Main;