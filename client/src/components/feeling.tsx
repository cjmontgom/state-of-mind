import React, {useState} from 'react';
import {FeelingType} from "./main";


const Feeling = ({setFeeling}) => {

    const [selectedFeelings, setSelectedFeelings] = useState({});

    const handleCheckBoxChange = (e) => {
        const feeling = e.target.value;
        const checked = e.target.checked;
        setSelectedFeelings({...selectedFeelings, [feeling] : checked });
    };

    const handleFeelingChange = (e) => {
        const checkedFeelings =
            Object.keys(selectedFeelings)
                .filter(val => selectedFeelings[val]);
        setFeeling({feeling : checkedFeelings});
    };

    const feelingsList = [...Object.values(FeelingType)];

    const feelingInput = feelingsList.map((feeling, idx) => {
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



