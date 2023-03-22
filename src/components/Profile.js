import React, { useState } from 'react'
import './Home.css'
import TextArea from './TextArea'
import 'react-quill/dist/quill.snow.css'

// A demo for the user to add their profile
const Profile = () => {

    const [text, setText] = useState(
        '<p>Name:</p><p>LinkedIn:</p><p>Portfolio:</p>'
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
