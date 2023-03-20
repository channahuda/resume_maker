import React, { useState } from 'react'
import './Home.css'
import TextArea from './TextArea'
import 'react-quill/dist/quill.snow.css'


const WorkExperience = () => {
    const [text, setText] = useState(
        '<p style="font-weight: bold;">Work&nbsp;Experience</p>'
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