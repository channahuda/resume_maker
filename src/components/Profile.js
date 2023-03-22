import React, { useState } from 'react'
import './Home.css'
import TextArea from './TextArea'
import 'react-quill/dist/quill.snow.css'

// A demo for the user to add their profile
const Profile = () => {

    const [text, setText] = useState(
        '<p style="font-weight: bold;">Name:</p><p style="font-weight: bold;">LinkedIn:</p><p style="font-weight: bold;">Portfolio:</p>'
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

export default Profile
