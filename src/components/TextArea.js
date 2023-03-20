import React, { useState, useEffect, useContext } from 'react';
import ReactQuill from 'react-quill';
import Draggable from 'react-draggable'
import { ReactComponent as ChevronUpIcon } from 'feather-icons/dist/icons/chevron-up.svg';
import './TextArea.css'
import PdfEventContext from '../context/PdfContext'

const TextArea = ({ text, handleChange }) => {

    const pdfEvent = useContext(PdfEventContext);
    const [showToolbar, setShowToolbar] = useState(!pdfEvent)
    const [showButton, setShowButton] = useState(!pdfEvent)
    const [showOutline, setShowOutline] = useState(!pdfEvent)
    const [isDisabled, setIsDisabled] = useState(false)
    const [resize, setResize] = useState('both')

    useEffect(() => {
        if (pdfEvent) {
            setShowToolbar(false)
            setShowButton(false)
            setShowOutline(false)
            setResize('none')
        }
    }, [pdfEvent, setShowToolbar, setShowButton, setShowOutline, setIsDisabled, setResize])

    const modules = {
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

    const handleFocus = () => {
        setIsDisabled(true)
    }

    const handleBlur = () => {
        setIsDisabled(false)
    }


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
                disabled={isDisabled}
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
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            // className = "style"
                            style={{ height: 'auto', width: '500px', padding: '5px', resize: 'both', overflow: 'auto' }}
                        />
                    )}
                    {!showToolbar && (
                        <ReactQuill
                            className={!showOutline ? "q1-editor" : ""}
                            value={text}
                            onChange={handleChange}
                            modules={{ toolbar: false }}
                            formats={formats}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
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

