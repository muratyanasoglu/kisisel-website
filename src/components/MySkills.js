import React from 'react';
import './MySkills.css'; // MySkills için özel CSS dosyası, About.js ile aynı stil

const MySkills = () => {
    return (
        <div className="mt-0">
            <div className="flex flex-col h-screen justify-center items-center bg-transparent text-white relative mt-12">
                <div className="about-content mt-8 z-10 animate-typing">
                    <h1 className="text-4xl font-bold mb-4">My Skills</h1>



                    <h2 className="font-bold text-xl mb-2">IT Skills</h2>
                    <ul className="list-disc pl-5">
                        <li>Front End Web Development (Javascript, Typescript ➢ React.js, Next.js)</li>
                        <li>CSS ➢ Tailwind CSS, Ant Design</li>
                        <li>Object Oriented Programming( ➢ Python)</li>
                        <li>Data Structure And Algorithm( ➢ Python)</li>
                        <li>Programming and Problem Solving( ➢ Python)</li>
                        <li>Database Management( ➢ MySQL)</li>
                        <li>Desktop App Development(➢ Visual Basic )</li>
                        <li>Linux Knowledge (➢ Kali Linux)</li>
                        <li>Software Project Management ( ➢ SPM Models , SPM Diagrams)</li>



                    </ul>
                    <h2 className="font-bold text-xl mb-2">LANGUAGES</h2>
                    <ul className="list-disc pl-5 mb-5">
                        <li>English "Advanced"</li>
                        <li>Turkish "Mother Tongue"</li>
                        <li>Arabic "Elementary"</li>
                        <li>French "Elementary"</li>
                        <li>Ottoman Turkish "Old Turkish" - Intermediate</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MySkills;
