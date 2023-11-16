import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className="mt-0">
            <div className="flex flex-col h-screen justify-center items-center bg-transparent text-white relative mt-12">
                <div className="about-content mt-8 z-10 animate-typing">
                    <p>
                        &gt; Hello everyone! My name is <span className="text-yellow-400">Muhammed Murat Yanasoglu</span>.<br />
                        &gt; I am a Junior Student at Near East University,Major In Software Engineering <br />
                        &gt;and Student Department of History at Anadolu University <br />
                        &gt; I love learning new things in developing software, new languages.<br />
                        &gt;I am advancing in front-end development by using React.js, Next,js, Typescript, Javascript, Tailwind CSS  <br />
                        &gt; and Ant Design, still learning to develop my skills<br />
                        &gt; Furthermore, Cybersecurity and Artificial Intelligence attract me to work on.<br />
                        &gt; <br />
                        &gt; As my hobbies History-numismatics,chess and listening classical music hold a significant part in my life.  <br />
                        &gt; <br />
                        &gt; Kind Regards,<br />
                        &gt; <span className="text-yellow-400">Muhammed Murat Yanasoglu</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
