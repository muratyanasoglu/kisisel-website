import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import {
    LinkedinOutlined,
    GithubOutlined,
    MediumOutlined,  
    InstagramOutlined,
    UserOutlined,
    RocketOutlined,
    SafetyCertificateOutlined,
    ToolOutlined,
    AppstoreAddOutlined,
    FileTextOutlined,
    PhoneOutlined,
    HomeOutlined // Bu satırı ekledik
} from '@ant-design/icons';
import "./indexx.css";

const Header = () => {
    const currentDate = new Date();
    const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes() < 10 ? '0' : ''}${currentDate.getMinutes()}`;

    const [showOutput, setShowOutput] = useState(false);

    useEffect(() => {
        const canvas = document.getElementById('matrixCanvas');
        const ctx = canvas.getContext('2d');

        function updateCanvasSize() {
            canvas.width = window.innerWidth;
            canvas.height = document.body.offsetHeight; // Sayfanın toplam yüksekliğini al
        }

        // Pencere yeniden boyutlandırıldığında veya içerik değiştiğinde canvas boyutunu güncelle
        window.addEventListener('resize', updateCanvasSize);

        updateCanvasSize(); // İlk yüklemede canvas boyutunu ayarla

        const columns = canvas.width / 20;
        const drops = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        function drawMatrix() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = 'rgba(0, 255, 65, 0.25)';
            ctx.font = '20px Courier New';

            for (let i = 0; i < drops.length; i++) {
                const text = String.fromCharCode(Math.floor(Math.random() * 33) + 33);
                ctx.fillText(text, i * 20, drops[i] * 20);

                if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        }

        setInterval(drawMatrix, 50);

        setTimeout(() => {
            setShowOutput(true);
        }, 5000); // 5 saniye sonra output'u göster

        // Event listener'ı temizle
        return () => {
            window.removeEventListener('resize', updateCanvasSize);
        };

    }, []);

    return (
        <div className="mb-0 relative">
            <canvas id="matrixCanvas" className="absolute top-0 left-0 z-0 w-full"></canvas>
            <div className="container mx-auto relative z-10">
                <div className="flex flex-col justify-between items-center">
                    <div className="flex justify-between items-center w-full mb-4">
                        <div className="terminal-window bg-black p-3 rounded-lg">
                            <div className="terminal-header bg-gray-700 text-red-500 p-1 rounded-t-lg">
                                root@murat
                            </div>
                            <div className="terminal-content text-white font-mono">
                                {currentDate.toDateString()} - {currentTime}
                            </div>
                        </div>
                        <h1 className="text-4xl font-mono font-bold text-white mx-auto">
                            {!showOutput ? (
                                <span className="code-animation">
                                    <span className="color-blue">print</span>
                                    (<span className="color-yellow">{'`<Welcome to Murat\'s Dev Space👨‍💻 />`'}</span>)
                                </span>
                            ) : (
                                '<Welcome to Murat\'s Dev Space👨‍💻 />'
                            )}
                        </h1>
                        <div className="flex space-x-5">
                            <a href="https://www.linkedin.com/in/muratyanasoglu" target="_blank" rel="noopener noreferrer">
                                <LinkedinOutlined className="text-3xl text-white hover:text-blue-500 transition duration-300" />
                            </a>
                            <a href="https://github.com/muratyanasoglu" target="_blank" rel="noopener noreferrer">
                                <GithubOutlined className="text-3xl text-white hover:text-gray-400 transition duration-300" />
                            </a>
                            <a href="https://medium.com/@academyyanasoglu" target="_blank" rel="noopener noreferrer">
                                <MediumOutlined className="text-3xl text-white hover:text-gray-400 transition duration-300" />
                            </a>
                            <a href="https://instagram.com/muratyanasoglu" target="_blank" rel="noopener noreferrer">
                                <InstagramOutlined className="text-3xl text-white hover:text-pink-600 transition duration-300" />
                            </a>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <Link to="/"><Button icon={<HomeOutlined />} className="custom-btn">Homepage</Button></Link>
                        <Link to="/about"><Button icon={<UserOutlined />} className="custom-btn">About Me</Button></Link>
                        <Link to="/skills"><Button icon={<RocketOutlined />} className="custom-btn">My Skills</Button></Link>
                        <Link to="/certificates"><Button icon={<SafetyCertificateOutlined />} className="custom-btn">My Certificates</Button></Link>
                        <Link to="/experiences"><Button icon={<ToolOutlined />} className="custom-btn">My Work Experiences</Button></Link>
                        <Link to="/projects"><Button icon={<AppstoreAddOutlined />} className="custom-btn">My Projects</Button></Link>
                        <Link to="/cv"><Button icon={<FileTextOutlined />} className="custom-btn">CV</Button></Link>
                        <Link to="/contacts"><Button icon={<PhoneOutlined />} className="custom-btn">Contacts</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
