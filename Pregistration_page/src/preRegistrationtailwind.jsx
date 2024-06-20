import React from 'react';
import insta from "./assets/preRegistration/Instagram logo.svg";
import Facebook from "./assets/preRegistration/Facebook logo.svg";
import linkdIn from "./assets/preRegistration/LinkedIn logo.svg";
import logo from "./assets/preRegistration/logo.svg";
import Background from "./assets/preRegistration/Background.svg";
import download from "./assets/preRegistration/DownloadOutline.svg";
import "./preRegistrationTailwind.css"; // Ensure you have the Tailwind CSS import here

const PDF_FILE_URL = "http://localhost:5173/brochure.pdf";
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/1FbKqQR6JMjUS-Hnvo_yIqT9yPmGw8jNSSHoSR4kqKPo/edit";

export default function PreRegTail() {
    const backgroundImageStyle = {
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        height: '100%',
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
        <div className="h-screen w-screen bg-white flex flex-col items-center ">
            <div className="h-3/5 flex flex-col items-center">
                <div className="w-full flex justify-between items-center px-24 mt-10 h-3/20">
                    <img src={logo} alt="logo" className="w-56 h-20" />
                    <button
                        className="w-76 h-14 border-3 border-black rounded-lg flex justify-center items-center text-2xl font-semibold leading-tight tracking-tight text-blue-600"
                        onClick={() => handleDownload(PDF_FILE_URL)}
                    >
                        Download Brochure
                        <img src={download} alt="download" className="pl-1 h-6" />
                    </button>
                </div>
                <h1 className="text-center text-6xl font-bold tracking-tighter mt-0 mb-0">
                    Website is under <span className="text-blue-600">construction</span>!
                </h1>
                <h3 className="w-7/12 text-center text-2xl font-medium tracking-tighter mt-0 mb-0">
                    Secure your spot and be the first to experience our exciting things by <span className="text-blue-600">pre-registering</span> through the following link!
                </h3>
                <button
                    className="border-4 border-blue-600 rounded-md px-8 py-0 text-center text-2xl font-semibold tracking-wider"
                    onClick={handleRegisterClick}
                >
                    REGISTER
                </button>
            </div>
            <div className="w-full flex flex-col items-center h-2/5" style={backgroundImageStyle}>
                <h3 className="text-center text-2xl font-medium leading-tight tracking-tight text-blue-600 w-50">
                    CONTACT US:
                </h3>
                <div className="flex justify-around items-center w-50">
                    <a href="https://www.instagram.com/"><img src={insta} alt="instagram" /></a>
                    <a href="https://www.facebook.com/login/"><img src={Facebook} alt="facebook" /></a>
                    <a href="https://www.linkedin.com/feed/"><img src={linkdIn} alt="linkdIn" /></a>
                </div>
            </div>
        </div>
    );
}
