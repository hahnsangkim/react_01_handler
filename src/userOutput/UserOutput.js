import React, { Component } from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className='UserOutput' onClick={props.onclick}>
            <p>
                'Name': {props.username}
            </p>
            {props.children}</div>
    )
};

export default userOutput;