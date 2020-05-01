import React, {useState} from 'react'
import Mood from "./mood";
import Feeling from "./feeling";
import Comment from "./comment";
import Insights from "./insights";
import {retrieveCheckIns, save} from "../shared/apiRequests";
import {Card, Wrapper} from "../styles/styles";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./home";
import {UserCheckIn} from "../shared/types";



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
                            <button><Link to="/">Back to Home</Link></button>
                        </Card>
                    </Route>
                    <Route path="/">
                        <Card>
                            <Home/>
                            <button><Link to="/mood">Get started</Link></button>
                        </Card>
                    </Route>
                </Switch>
            </Wrapper>
        </Router>
    );
};

export default Main;