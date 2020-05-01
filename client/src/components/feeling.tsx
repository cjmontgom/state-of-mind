import React, {useState} from 'react';
import {Feelings} from "../shared/types";
import {Button, Section, StyledLink, SubHeader} from "../styles/styles";


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

    const feelingsList = [...Object.values(Feelings)];

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
        <Section>
            <SubHeader>Feeling</SubHeader>
            {feelingInput}
            <Button onClick={handleFeelingChange}>
                <StyledLink to="/comment">Next</StyledLink>
            </Button>
        </Section>
    );
};

export default Feeling



