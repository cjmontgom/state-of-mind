import React, {useState} from 'react'
import Mood from "./mood";
import Feeling from "./feeling";
import Comment from "./comment";
import Results from "./results";
import {retrieveCheckIns, save} from "../apiRequests";
import {Card, Wrapper} from "./styles";

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

const Main = () => {

    const emptyCheckIn: UserCheckIn = { mood: 1, feeling: [], comment: ''};

    const [checkIn, setCheckIn] = useState({ ...emptyCheckIn });

    const [allCheckIns, setAllCheckIns] = useState([{mood: '', feeling: ''}]);

    const journey = 

    const saveCheckIn = async () => {
        await save(checkIn)
            .then(async () => {
                await retrieveCheckIns()
                    .then(res => {setAllCheckIns(res.json)})
            })
    };

    const handleCheckInChange = (newCheckInState) => {
        setCheckIn({...checkIn, ...newCheckInState});
    };

    return (
        <Wrapper>
            <h1>STATE OF MIND</h1>
            <Card>
                <Mood setMood={handleCheckInChange}/>
                <div>{checkIn.mood}</div>
                <button>next</button>
            </Card>
            <Card>
                <Feeling setFeeling={handleCheckInChange}/>
            </Card>
            <Card>
                <Comment setComment={handleCheckInChange}/>
                <button onClick={saveCheckIn}>Submit</button>
            </Card>
            <Card>
                <Results checkIns={allCheckIns}/>
            </Card>
        </Wrapper>
    );
};

export default Main;