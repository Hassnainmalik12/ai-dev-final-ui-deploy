import React, { useState } from 'react';
import preloader from '../../../images/preloader.gif';
import arrowDown from '../../../images/white-arrow-down .png';

const ChatBot = ({ onClose }) => {
    const [messages, setMessages] = useState([
        { text: 'Welcome! How can I assist you today?', type: 'bot' }
    ]);
    const [userInput, setUserInput] = useState('');

    const handleSend = async () => {
        if (userInput.trim() !== '') {
            setMessages([...messages, { text: userInput, type: 'user' }]);
            setUserInput('');

            // Fake API call
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message: userInput }),
                });
                const data = await response.json();
                const botResponse = "This is a placeholder response."; // Use response from API
                setMessages([...messages, { text: userInput, type: 'user' }, { text: botResponse, type: 'bot' }]);
            } catch {
                setMessages([...messages, { text: userInput, type: 'user' }, { text: 'Sorry, something went wrong.', type: 'bot' }]);
            }
        }
    };

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.which === 13) {
            handleSend();
        }
    };

    return (
        <div className={"chatbot-div-inside w-[65%] h-full flex flex-col bg-gray-800 rounded-xl p-4"} >
            <div className={"chatbot-top w-full flex justify-between items-center mb-10 "}>
                <div className={"flex items-center gap-2"}>
                    <img src={preloader} alt="Logo" className={"h-10"} />
                    <h1 className={"text-white text-lg"}>AI DEV</h1>
                </div>
                <div onClick={onClose} className={"cursor-pointer"}>
                    <img src={arrowDown} alt="Close" className={"w-6 arrow-down"} />
                </div>
            </div>
            <div className={"flex-1 overflow-y-auto mb-2"}>
                <div className={"flex flex-col gap-2"}>
                    {messages.map((message, index) => (
                        <div key={index} className={`w-full p-2 rounded-lg ${message.type === 'bot' ? 'bg-blue-500 text-left' : 'bg-gray-700 text-right text-white'}`}>
                            <p>{message.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={"flex items-center chatbot-input"}>
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={userInput}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    className={"w-full p-2 rounded-lg bg-blue-500 text-white border-none focus:outline-none"}
                />
                <button
                    onClick={handleSend}
                    className={"ml-2 px-4 py-2 bg-gray-700 text-white rounded-lg"}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatBot;
