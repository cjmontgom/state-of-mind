import React from 'react';
import {Section, SubHeader, TextInput} from "../styles/styles";

const Comment = ({setComment}) => {

    const handleCommentChange = (e) => {
        setComment({comment: e.target.value});
    };

    return (
        <Section>
            <SubHeader>Comments</SubHeader>
            <TextInput type="textbox" onChange={handleCommentChange}/>
        </Section>
    );
};

export default Comment



