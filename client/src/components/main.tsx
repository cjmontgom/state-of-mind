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

    const [result, setResult] = useState({
        response: 'Hello, not from the API',
    });


    const talkToApi = async() => {
        console.log(checkIn)
        try {
            const res = await fetch('/checkIn', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(checkIn)
            }).then(res => res.json());
            setResult({
                response: res.message
            })
        } catch (err) {
            alert(err);
        }
    };


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
            <button onClick={talkToApi}>Submit</button>
            <div>{result.response}</div>
            <Results/>
        </div>
    );
}

export default Main;