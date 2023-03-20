import React, { useState } from 'react';
import './Home.css'
import TextArea from './TextArea';
import 'react-quill/dist/quill.snow.css';

const Education = () => {
    const [text, setText] = useState('<p style="font-weight: bold;">Achievements</p><br><p style="font-weight: bold;">Skills</p>');


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

export default Education;
