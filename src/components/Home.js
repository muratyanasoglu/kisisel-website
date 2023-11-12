import React from 'react';
import { LockOutlined, LaptopOutlined, CodeOutlined } from '@ant-design/icons';
import './home.css';

const Home = () => {
    return (
        <div className="mt-0">
            <div className="flex flex-col h-screen justify-center items-center bg-transparent text-white relative mt-12">
                <canvas id="matrixCanvas" className="absolute top-0 left-0 z-0 w-full h-full"></canvas>

                <h1 className="text-6xl font-mono font-bold mb-4 animate-pulse z-10">
                    Welcome to Murat's Dev Space
                </h1>

                <p className="text-2xl mb-8 font-semibold tracking-wider z-10">
                    The Hacker's Playground
                </p>

                <div className="flex space-x-8 z-10">
                    <div className="flex flex-col items-center icon-animation">
                        <LockOutlined className="text-5xl text-blue-500" />
                        <p className="mt-4">Security</p>
                    </div>
                    <div className="flex flex-col items-center icon-animation">
                        <LaptopOutlined className="text-5xl text-yellow-500" />
                        <p className="mt-4">Software</p>
                    </div>
                    <div className="flex flex-col items-center icon-animation">
                        <CodeOutlined className="text-5xl text-green-500" />
                        <p className="mt-4">Coding</p>
                    </div>
                </div>

                <div className="mt-8 z-10">
                    <a href="https://playcode.io/new" target="_blank" rel="noopener noreferrer">
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transform hover:scale-105 transition-transform">
                            Let's Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
