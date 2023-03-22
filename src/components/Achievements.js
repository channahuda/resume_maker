import React, { useState } from 'react';
import './Home.css'
import TextArea from './TextArea';
import 'react-quill/dist/quill.snow.css';

// A demo for the user to enter their achievements and skills. Shows the users that they can also add skills
// i.e. add multiple headings inside a single textbox

const Achievements = () => {
    const [text, setText] = useState('<p>Achievements</p><br><p>Skills</p>');


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

export default Achievements;
