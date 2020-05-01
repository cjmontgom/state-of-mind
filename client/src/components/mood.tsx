import React from 'react';
import {Slider} from "@reach/slider";
import "@reach/slider/styles.css";
import {Section, SubHeader} from "../styles/styles";

// https://reacttraining.com/reach-ui/slider/

const Mood = ({setMood}) => {

    const handleMoodChange = (e) => {
        setMood({mood: e});
    };

    return (
        <Section>
            <SubHeader>Mood</SubHeader>
            <Slider min={1} max={7} step={1} onChange={handleMoodChange}/>
        </Section>
    );
};

export default Mood



