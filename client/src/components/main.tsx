import React, {useState} from 'react'
import Mood from "./mood";
import Feeling from "./feeling";
import Comment from "./comment";
import Insights from "./insights";
import {retrieveCheckIns, save} from "../apiRequests";
import {Card, Wrapper} from "./styles";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

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
        <Router>
            <Wrapper>
                <h1>STATE OF MIND</h1>
                <Switch>
                    <Route path="/mood">
                        <Card>
                            <Mood setMood={handleCheckInChange}/>
                            <div>{checkIn.mood}</div>
                            <button><Link to="/feeling">Next</Link></button>
                        </Card>
                    </Route>
                    <Route path="/feeling">
                        <Card>
                            <Feeling setFeeling={handleCheckInChange}/>
                        </Card>
                    </Route>
                    <Route path="/comment">
                        <Card>
                            <Comment setComment={handleCheckInChange}/>
                            <button onClick={saveCheckIn}>
                                <Link to="/insights">Submit</Link>
                            </button>
                        </Card>
                    </Route>
                    <Route path="/insights">
                        <Card>
                            <Insights checkIns={allCheckIns}/>
                        </Card>
                    </Route>
                </Switch>
            </Wrapper>
        </Router>
    );
};

export default Main;