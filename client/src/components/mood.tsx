import React, { useState } from 'react';
import { Slider } from "@reach/slider";
import "@reach/slider/styles.css";

const Mood = ({setMood}) => {

    const handleMoodChange = (e) => {
        setMood({mood: e});
    };

    return (
        <div>
            <Slider min={1} max={7} step={1} onChange={handleMoodChange}/>
        </div>
    );
};

export default Mood



