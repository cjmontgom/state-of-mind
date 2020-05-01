import React from 'react';
import {Slider} from "@reach/slider";
import "@reach/slider/styles.css";

// https://reacttraining.com/reach-ui/slider/

const Mood = ({setMood}) => {

    const handleMoodChange = (e) => {
        setMood({mood: e});
    };

    return (
        <div>
            Mood
            <Slider min={1} max={7} step={1} onChange={handleMoodChange}/>
            <button>next</button>
        </div>
    );
};

export default Mood



