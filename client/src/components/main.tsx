import React, { useState } from 'react'
import Mood from "./mood";

export type Checkin = {
    mood: number,
    feeling: string[],
    comment?: string
};

function Main() {

    const emptyCheckIn = { mood: 1, feeling: [''], comment: ''};

    const [checkIn, setCheckIn] = useState({ ...emptyCheckIn });

    const handleChange = (newState) => {
        setCheckIn({...checkIn, ...newState});
        console.log(checkIn)
    };

    return (
        <div>
            <Mood setMood={handleChange}/>
        </div>
    );
}

export default Main;