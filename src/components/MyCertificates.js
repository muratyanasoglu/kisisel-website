import React from 'react';
import './MyCertificates.css'; // Stil dosyası yolu

const MyCertificates = () => {
    return (
        <div className="flex flex-col h-screen justify-start items-center bg-transparent text-white pt-24">
            <div className="cv-content z-10">
                <h1 className="text-2xl font-bold mb-4">Certificate of High Honour</h1>
                <div className="cv-image mt-4 text-center">
                    <img src={`${process.env.PUBLIC_URL}/high_honour.jpg`} alt="Certificate of High Honour" className="cv-preview mx-auto" />

                </div>
            </div>

            <div className="cv-content z-10">
                <h1 className="text-2xl font-bold mb-4">Entrepreneurship Certificate - Certificate of Achievement from the European Union</h1>
                <div className="cv-image mt-4 text-center">
                    <img src={`${process.env.PUBLIC_URL}/european.jpg`} alt="Entrepreneurship Certificate - Certificate of Achievement from the European Union" className="cv-preview mx-auto" />

                </div>



            </div>
            <div className="cv-content z-10">
                <h1 className="text-2xl font-bold mb-4">Python for Data Science, AI & Development Certificate</h1>
                <div className="cv-image mt-4 text-center">
                    <img src={`${process.env.PUBLIC_URL}/python_1.jpg`} alt="Python for Data Science, AI & Development Certificate" className="cv-preview mx-auto" />

                </div>
            </div>
            <div className="cv-content z-10">
                <h1 className="text-2xl font-bold mb-4">Python Project for AI & Application Development Certificate</h1>
                <div className="cv-image mt-4 text-center">
                    <img src={`${process.env.PUBLIC_URL}/python_2.jpg`} alt="Python Project for AI & Application Development Certificate" className="cv-preview mx-auto" />

                </div>
            </div>
            <div className="cv-content z-10">
                <h1 className="text-2xl font-bold mb-4">Developing Front-End Apps with React Certificate</h1>
                <div className="cv-image mt-4 text-center">
                    <img src={`${process.env.PUBLIC_URL}/react.jpg`} alt="Developing Front-End Apps with React Certificate" className="cv-preview mx-auto" />

                </div>
            </div>

            <div className="cv-content z-10">
                <h1 className="text-2xl font-bold mb-4">Developing Back-End Apps with Node.js and Express Certificate</h1>
                <div className="cv-image mt-4 text-center">
                    <img src={`${process.env.PUBLIC_URL}/backend.jpg`} alt="Developing Back-End Apps with Node.js and Express Certificate" className="cv-preview mx-auto" />

                </div>
            </div>
            <div className="cv-content z-10">
                <h1 className="text-2xl font-bold mb-4">Introduction to Cloud Computing Certificate</h1>
                <div className="cv-image mt-4 text-center">
                    <img src={`${process.env.PUBLIC_URL}/cloud.jpg`} alt="Introduction to Cloud Computing Certificate" className="cv-preview mx-auto" />

                </div>
            </div>

            <div className="cv-content z-10">
                <h1 className="text-2xl font-bold mb-4">Application Development using Microservices and Serverless Certificate</h1>
                <div className="cv-image mt-4 text-center">
                    <img src={`${process.env.PUBLIC_URL}/microservice.jpg`} alt="Application Development using Microservices and Serverless Certificate" className="cv-preview mx-auto" />

                </div>
            </div>
            <div className="cv-content z-10">
                <h1 className="text-2xl font-bold mb-4">Introduction to Containers w/ Docker, Kubernetes & OpenShift Certificate
                </h1>
                <div className="cv-image mt-4 text-center">
                    <img src={`${process.env.PUBLIC_URL}/docker.jpg`} alt="Introduction to Containers w/ Docker, Kubernetes & OpenShift Certificate" className="cv-preview mx-auto" />

                </div>
            </div>
            <div className="cv-content z-10">
                <h1 className="text-2xl font-bold mb-4">Developing Applications with SQL, Databases, and Django Certificate</h1>
                <div className="cv-image mt-4 text-center">
                    <img src={`${process.env.PUBLIC_URL}/sql.jpg`} alt="Developing Applications with SQL, Databases, and Django Certificate" className="cv-preview mx-auto" />

                </div>
            </div>
            <div className="cv-content z-10">
                <h1 className="text-2xl font-bold mb-4">Introduction to Web Development with HTML, CSS, JavaScript Certificate</h1>
                <div className="cv-image mt-4 text-center">
                    <img src={`${process.env.PUBLIC_URL}/html_css_js.jpg`} alt="Introduction to Web Development with HTML, CSS, JavaScript Certificate" className="cv-preview mx-auto" />

                </div>
            </div>
            <div className="cv-content z-10">
                <h1 className="text-2xl font-bold mb-4">Getting Started with Git and GitHub Certificate</h1>
                <div className="cv-image mt-4 text-center">
                    <img src={`${process.env.PUBLIC_URL}/github.jpg`} alt="Getting Started with Git and GitHub Certificate" className="cv-preview mx-auto" />

                </div>
            </div>
            <div className="cv-content z-10">
                <h1 className="text-2xl font-bold mb-4">B1+ Level Completion Certificate (English)</h1>
                <div className="cv-image mt-4 text-center">
                    <img src={`${process.env.PUBLIC_URL}/cefr.jpg`} alt="B1+ Level Completion Certificate" className="cv-preview mx-auto" />

                </div>
            </div>
        </div>
    );
}

export default MyCertificates;
