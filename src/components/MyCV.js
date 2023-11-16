import React from 'react';
import './MyCV.css'; // MyCV için özel CSS

const MyCV = () => {
    return (
        <div className="flex flex-col h-screen justify-start items-center bg-transparent text-white pt-24">
            <div className="cv-content z-10">
                <h1 className="text-4xl font-bold mb-4">Curriculum Vitae (CV)</h1>
                <a href={`${process.env.PUBLIC_URL}/murat_cv.jpg`} download className="cv-download-button">
                    Download My CV
                </a>
                <div className="cv-image mt-4 text-center">
                    <img src={`${process.env.PUBLIC_URL}/murat_cv.jpg`} alt="Curriculum Vitae" className="cv-preview mx-auto" />
                </div>
            </div>
        </div>
    );
}

export default MyCV;
