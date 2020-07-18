import React, { Component } from 'react';

const userInput = (props) => {
    const inputStyle = {
        border: '2px solid red'
    };
    return (
        <div>
            <input typ='text' style={inputStyle} onChange={props.changed} value={props.currentName}></input>
        </div>
    )
};

export default userInput;