import React, { useState } from 'react'
import './Home.css'
import TextArea from './TextArea'
import 'react-quill/dist/quill.snow.css'

// A demo for the user to enter their work experience
const WorkExperience = () => {

    const [text, setText] = useState(
        '<p>Work&nbsp;Experience</p>'
    )

    const handleChange = (value) => {
        setText(value)
    }
    return (
        <div>
            <TextArea
                text={text}
                onChange={handleChange} />
        </div>
    )
}

export default WorkExperience