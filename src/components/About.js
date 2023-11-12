import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className="mt-0">
            <div className="flex flex-col h-screen justify-center items-center bg-transparent text-white relative mt-12">
                <div className="about-content mt-8 z-10 animate-typing">
                    <p>
                        &gt; Hello everyone! My name is <span className="text-yellow-400">Muhammed Murat Yanaşoğlu</span>.<br />
                        &gt; I am 20 years old and a 3rd-year Software Engineering student.<br />
                        &gt; I completed my middle school and high school education at Hala Sultan Theology College and Erenköy High School.<br />
                        &gt; I have a character that loves to work in teams and adopts a strong work ethic.<br />
                        &gt; Additionally, I am interested in the fields of Cybersecurity and Artificial Intelligence.<br />
                        &gt; <br />
                        &gt; As for my hobbies, I can list history, numismatics, reading books, writing poetry, and listening to classical music.<br />
                        &gt; <br />
                        &gt; Kind Regards,<br />
                        &gt; <span className="text-yellow-400">Muhammed Murat Yanaşoğlu</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
