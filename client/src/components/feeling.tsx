import React, {useState} from 'react';
import {FeelingType} from "./main";


const Feeling = ({setFeeling}) => {

    const [selectedFeelings, setSelectedFeelings] = useState({});

    const handleCheckBoxChange = (e) => {
        const feeling = e.target.value;
        const checked = e.target.checked
        setSelectedFeelings({...selectedFeelings, [feeling] : checked });
        console.log(selectedFeelings)
    };

    const handleFeelingChange = (e) => {
        const checkedFeelings =
            Object.keys(selectedFeelings)
                .filter(val => selectedFeelings[val])
        console.log(checkedFeelings)
        setFeeling({feeling : checkedFeelings});
    };

    const feelings = [...Object.values(FeelingType)];

    const feelingInput = feelings.map((feeling, idx) => {
        return (
            <div key={`feelingInput-${idx}`}>
                <input
                    type="checkbox"
                    key={`feeling-checkbox-${idx}`}
                    value={feeling}
                    checked={selectedFeelings[feeling]}
                    onChange={handleCheckBoxChange}
                />
                <label>{feeling}</label>
            </div>
        )
    });

    return (
        <div key={'feelingsComponent'}>
            Feeling
            {feelingInput}
            <button onClick={handleFeelingChange}>next</button>
        </div>
    );
};

export default Feeling



