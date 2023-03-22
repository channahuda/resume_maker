import React, { useState, useRef } from 'react'
import Education from './Education'
import Achievements from './Achievements'
import Profile from './Profile'
import WorkExperience from './WorkExperience'
import './Home.css'
import PdfEventContext from '../context/PdfContext'
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

const Home = () => {

    const pdfRef = useRef(null)

    // Global state variable which checks whether the button for generate pdf has been clicked
    const [pdfEvent, setPdfEvent] = useState(false)

    // function to hide toolbars of Reactquill
    const hideToolbar = () => {
        setPdfEvent(true)
    }

    //function to generatepdf when generate pdf button is clicked
    // a snapshot of the page is generated
    const generatePDF = async () => {
        try {
            // toolbar should hide because we dont want toolbar to show up in pdf
            hideToolbar()
            // wait for sometime before pdf is generated so that the toolbars and toogle toolbar buttons are hidden
            await new Promise(resolve => setTimeout(resolve, 700))
            const pdf = new jsPDF("p", "mm", "a4");
            const canvas = await html2canvas(pdfRef.current, { scale: 8 });
            const imgData = canvas.toDataURL("image/png");
            pdf.addImage(imgData, "PNG", 10, 10, 200, 300);
            pdf.save("my-document.pdf")
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <PdfEventContext.Provider value={pdfEvent}>
            <div>
                <div style={{ position: 'absolute', top: '250px', left: '20px' }}>
                    <h1>MAKE YOUR RESUME</h1>
                    <p>You can edit, resize and drag the boxes to make a customized resume.</p>
                </div>
                <div ref={pdfRef}
                    style={{ boxShadow: "0px 0px 10px #888888", padding: "20px", height: "600px", overflow: 'scroll' }}
                >
                    <Profile />
                    <WorkExperience />
                    <Education />
                    <Achievements />
                </div>
                <div style={{ position: 'absolute', top: '300px', right: '200px' }}>
                    <button className='btn' onClick={generatePDF}>
                        Generate PDF
                    </button>
                </div>
            </div>
        </PdfEventContext.Provider>
    )
}

export default Home

