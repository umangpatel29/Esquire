// components/ChatBox.tsx
import React, { useState } from 'react';

interface Message {
    text: string;
    isUser: boolean;
}

const ChatBoxDemo: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { text: 'Hi there!', isUser: false },
        { text: 'Hello!', isUser: true },
    ]);

    const handleUserInput = (input: string) => {
        setMessages((prevMessages) => [...prevMessages, { text: input, isUser: true }]);
        // Simulate AI response
        setTimeout(() => {
            setMessages((prevMessages) => [...prevMessages, { text: 'AI response', isUser: false }]);
        }, 500);
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="bg-gray-800 text-white p-4">WhatsApp Chat</div>
            <div className="flex-1 overflow-y-scroll p-4">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`my-2 p-2 rounded-lg ${message.isUser ? 'bg-gray-300 ml-auto' : 'bg-green-500 mr-auto'}`}
                    >
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="bg-gray-800 p-4">
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="w-full p-2 rounded-lg border-none outline-none"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && e.currentTarget.value.trim() !== '') {
                            handleUserInput(e.currentTarget.value);
                            e.currentTarget.value = '';
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default ChatBoxDemo;
