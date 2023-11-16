import React from 'react';
import { AiOutlineMail } from 'react-icons/ai'; // Eğer react-icons kullanıyorsanız
import './MyContacts.css';
import { ColorFactory } from 'antd/es/color-picker/color';
import { ColorFormat } from 'antd/es/color-picker/interface';

const MyContacts = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center bg-transparent text-white relative">
            <div className="about-content mt-8 z-10 animate-typing">
                <h1 className="text-4xl font-bold mb-4">My Contacts</h1>
                <div className="flex items-center justify-center">
                    <p className="text-xl mr-3">E-Mail Address ➢ akademiyanasoglu@gmail.com</p>
                    <a href="mailto:akademiyanasoglu@gmail.com" className="email-button flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <AiOutlineMail className="mr-2" /> Email Me
                    </a>
                </div>
                <p className="text-xl mt-4 " >Telephone Number ➢ +90 533 832 46 02 / +90 548 840 41 97</p>

                <h2 className="font-bold text-xl mt-4 mb-2">Social Medias</h2>
                <p><a href="https://www.linkedin.com/in/muratyanasoglu" target="_blank" rel="noopener noreferrer">Linkedin ➢ https://www.linkedin.com/in/muratyanasoglu</a></p>
                <p><a href="https://github.com/muratyanasoglu" target="_blank" rel="noopener noreferrer">Github ➢ https://github.com/muratyanasoglu</a></p>
                <p><a href="https://www.instagram.com/muratyanasoglu/" target="_blank" rel="noopener noreferrer">Instagram ➢ https://www.instagram.com/muratyanasoglu/</a></p>
            </div>
        </div>
    );
}

export default MyContacts;
