import React from 'react';
import insta from "./assets/preRegistration/Instagram logo.svg";
import Facebook from "./assets/preRegistration/Facebook logo.svg";
import linkdIn from "./assets/preRegistration/LinkedIn logo.svg";
import logo from "./assets/preRegistration/logo.svg";
import Background from "./assets/preRegistration/Background.svg";
import download from "./assets/preRegistration/DownloadOutline.svg";

import "./preRegistration.css";

// Define the URL for the PDF file and the Google Form
const PDF_FILE_URL = "http://localhost:5173/brochure.pdf";
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/1FbKqQR6JMjUS-Hnvo_yIqT9yPmGw8jNSSHoSR4kqKPo/edit"; // Your Google Form URL

export default function PreReg() {
    const backgroundImageStyle = {
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        height: '100%', // Ensures the background covers the full height of the lower_box
    };

    const handleDownload = (url) => {
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    };

    const handleRegisterClick = () => {
        window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="main_box">
            <div className="upper_box">
                <div className="top_box">
                    <img src={logo} alt="logo" className="logo" />
                    <button className="download_Btn" onClick={() => handleDownload(PDF_FILE_URL)}>
                        Download Brochure
                        <img src={download} alt="download" />
                    </button>
                </div>
                <h1 className="main_heading">
                    Website is under <span className="constraction">construction</span>!
                </h1>
                <h3 className="discription">
                    Secure your spot and be the first to experience our exciting things by <span className="constraction">pre-registering</span> through the following link!
                </h3>
                <button className="register_btn" onClick={handleRegisterClick}>REGISTER</button>
            </div>
            <div className="lower_box" style={backgroundImageStyle}>
                <h3 className="contact_us">CONTACT US:</h3>
                <div className="contact_logo">
                    <a href="https://www.instagram.com/"><img src={insta} alt="instagram" /></a>
                    <a href="https://www.facebook.com/login/"><img src={Facebook} alt="facebook" /></a>
                    <a href="https://www.linkedin.com/feed/"><img src={linkdIn} alt="linkdIn" /></a>
                </div>
            </div>
        </div>
    );
}
