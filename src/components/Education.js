import React, { useState } from 'react'
import './Home.css'
import TextArea from './TextArea'
import 'react-quill/dist/quill.snow.css'

// A demo for the user to enter their academic qualifications
const Education = () => {
    const [text, setText] = useState(`
    <p style="font-weight: bold">Education</p>
    <p>Year&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Degree&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Institution</p>
    <p>Year&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Degree&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Institution</p>
`);


    const handleChange = (value) => {
        setText(value);
    }
    return (
        <div>
            <TextArea
                text={text}
                onChange={handleChange} />
        </div>
    );
};

export default Education
