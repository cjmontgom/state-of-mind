import React from 'react';

const Comment = ({setComment}) => {

    const handleCommentChange = (e) => {
        setComment({comment: e.target.value});
    };

    return (
        <div>
            <input type="textbox" onChange={handleCommentChange}/>
            <button>submit and see previous submissions</button>
        </div>
    );
};

export default Comment


