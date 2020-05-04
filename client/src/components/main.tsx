import React, {useState} from 'react'
import Mood from "./mood";
import Feeling from "./feeling";
import Comment from "./comment";
import Insights from "./insights";
import {retrieveCheckIns, save} from "../shared/apiRequests";
import {Button, Card, Header, StyledLink, Wrapper} from "../styles/styles";
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
    const [allCheckIns, setAllCheckIns] = useState([{mood: '', feeling: []}]);
    const [totalNumberOfCheckIns, setTotalNumberOfCheckIns] = useState(0);
    const [averageMood, setAverageMood] = useState(1);

    const saveCheckIn = async () => {
        await save(checkIn)
            .then(async () => {
                await retrieveCheckIns()
                    .then(res => {
                        setAllCheckIns(res.json.allUserCheckIns);
                        setAverageMood(res.json.averageMood);
                        setTotalNumberOfCheckIns(res.json.totalNumberOfCheckIns)
                    })
            })
    };

    const handleCheckInChange = (newCheckInState) => {
        setCheckIn({...checkIn, ...newCheckInState});
    };

    return (
        <Wrapper>
            <Router>
                <Header>STATE OF MIND</Header>
                <Switch>
                    <Route path="/mood">
                        <Card>
                            <Mood setMood={handleCheckInChange}/>
                            <div>{checkIn.mood}</div>
                            <Button><StyledLink to="/feeling">Next</StyledLink></Button>
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
                            <Button onClick={saveCheckIn}>
                                <StyledLink to="/insights">Submit</StyledLink>
                            </Button>
                        </Card>
                    </Route>
                    <Route path="/insights">
                        <Card>
                            <Insights
                                checkIns={allCheckIns}
                                numberOfCheckIns={totalNumberOfCheckIns}
                                averageMood={averageMood}
                            />
                            <Button><StyledLink to="/">Back to Home</StyledLink></Button>
                        </Card>
                    </Route>
                    <Route path="/">
                        <Card>
                            <Home/>
                            <Button><StyledLink to="/mood">Get started</StyledLink></Button>
                        </Card>
                    </Route>
                </Switch>
            </Router>
        </Wrapper>
    );
};

export default Main;