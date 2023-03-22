import React, { useState, useEffect, useContext } from 'react';
import ReactQuill from 'react-quill';
import Draggable from 'react-draggable'
import { ReactComponent as ChevronUpIcon } from 'feather-icons/dist/icons/chevron-up.svg';
import './TextArea.css'
import PdfEventContext from '../context/PdfContext'

const TextArea = ({ text, handleChange }) => {

    // Global state variable which checks whether the button for generate pdf has been clicked
    const pdfEvent = useContext(PdfEventContext);

    // state to show or hide the toolbar
    const [showToolbar, setShowToolbar] = useState(!pdfEvent)

    //State to hide or show the show toolbar button
    const [showButton, setShowButton] = useState(!pdfEvent)

    //State to show or hide the outline of the textfields
    const [showOutline, setShowOutline] = useState(!pdfEvent)

    // State for the draggable component, to manage if it's disabled or not
    // const [isDisabled, setIsDisabled] = useState(false)

    // State to hide or show resize handle
    const [resize, setResize] = useState('both')

    // to re render components if any of the following state is changed
    useEffect(() => {
        if (pdfEvent) {
            setShowToolbar(false)
            setShowButton(false)
            setShowOutline(false)
            setResize('none')
        }
    }, [pdfEvent, setShowToolbar, setShowButton, setShowOutline, setResize])

    const modules = {

        // toolbar for react quill
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video'],
            ['clean']
        ],

    }

    // input formats for react quill
    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video', 'color', 'background'
    ]

    const [dragState, setDragState] = useState({
        activeDrags: 0,
        deltaPosition: {
            x: 0, y: 0
        },
        controlledPosition: {
            x: 0, y: 0
        }
    });

    // // drag is diabled when the user is typing
    // const handleFocus = () => {
    //     setIsDisabled(true)
    // }

    // // drag is enabled again when the user is not typing
    // const handleBlur = () => {
    //     setIsDisabled(false)
    // }


    const handleDrag = (e, ui) => {
        // Only allow dragging if the user clicked on the draggable element
        if (e.target.classList.contains('drag-handle')) {
            const { x, y } = dragState.deltaPosition
            setDragState({
                deltaPosition: {
                    x: x + ui.deltaX,
                    y: y + ui.deltaY,
                },
            })
        }
    }

    return (
        <div style={{ position: 'relative' }}>
            <Draggable
                //  disabled={isDisabled}
                {...handleDrag}>
                <div style={{ padding: '2px', cursor: 'move' }}>
                    {showButton && (
                        <button className="chevron-icon-button"
                            onClick={() => setShowToolbar(!showToolbar)}><ChevronUpIcon />
                        </button>)}
                    {showToolbar && (
                        <ReactQuill
                            className={!showOutline ? "input-no-outline" : ""}
                            value={text}
                            onChange={handleChange}
                            modules={modules}
                            formats={formats}
                            // onFocus={handleFocus}
                            // onBlur={handleBlur}
                            // className = "style"
                            style={{ height: 'auto', width: '500px', padding: '5px', resize: resize, overflow: 'auto' }}
                        />
                    )}
                    {!showToolbar && (
                        <ReactQuill
                            className={!showOutline ? "q1-editor" : ""}
                            value={text}
                            onChange={handleChange}
                            modules={{ toolbar: false }}
                            formats={formats}
                            //onFocus={handleFocus}
                            // onBlur={handleBlur}
                            style={{ height: 'auto', width: '500px', padding: '5px', resize: resize, overflow: 'auto' }}
                        />
                    )}
                </div>
            </Draggable>
            <div style={{ position: 'absolute', left: dragState.deltaPosition.x, top: dragState.deltaPosition.y }}>
            </div>
        </div>

    )
}

export default TextArea

