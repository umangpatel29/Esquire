// components/ChatInterface.tsx
import Spinner from '@/components/spinner';
import Image from 'next/image';
import React, { useState } from 'react';

const response = 'The 2L credit agreement definition includes the anticipated earn-out amount per the last version of the financing model within the leverage calculation - this is not included in the SPA nor the QoE. Neither the SPA nor the credit agreement include transfer pricing tax liabilities identified during due diligence - these are included in the QoE.';

const ChatInterface: React.FC = () => {

    const [messages, setMessages] = useState<string[]>([]);
    const [spinners, setSpinner] = useState(false)

    const handleUserInput = () => {

        setSpinner(true)
        setTimeout(() => {
            setSpinner(false)
            simulateTypingResponse(response)
        }, 2000);
    };

    const simulateTypingResponse = (text: string) => {
        const characters = text.split('');
        let typedText = '';
        characters.forEach((char, index) => {
            setTimeout(() => {
                typedText += char;
                setMessages((prevMessages) => [
                    ...prevMessages.slice(0, -1), // Remove the last message (incomplete response)
                    `Esquire: ${typedText}`,
                ]);
            }, 50 * index); // Adjust the speed of typing by changing the delay (50 milliseconds here for faster typing)
        });
    };

    return (
        <div className='border px-3 py-1 w-[65%] my-4 flex shadow-md flex-col justify-center border-gray-300 rounded-md'>
            <div className='flex gap-2 items-center justify-between'>
                <div className='flex gap-2 w-full items-center'>
                    <div className='h-[25px] w-[23px] overflow-hidden'>
                        <Image src='/icons/prompticon.png' width={23} height={20} className='w-full h-full object-cover' alt='' />
                    </div>
                    <input
                        type="text"
                        placeholder="Ask Esquire"
                        style={{ outline: 'none' }} // Hide cursor and remove border
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && e.currentTarget.value.trim() !== '') {
                                handleUserInput();
                                e.currentTarget.value = '';
                            }
                        }}
                        className='px-2 py-1 h-8 text-[14px] w-full font-medium'
                    />
                </div>
                <div onClick={() => handleUserInput()}>
                    <Image src='/icons/up-arrow.svg' width={35} height={35} alt='' className='cursor-pointer' />
                </div>
            </div>
            {
                (messages.length > 0 || spinners === true) && <>
                    {
                        spinners ?
                            <div className='flex gap-2 items-center p-3'>
                                <div className='font-medium text-[14px]'>Esquire:</div><Spinner />
                            </div>
                            :
                            <div className='py-3 pl-3 pr-4'>
                                {messages.map((message, index) => (
                                    <div key={index} className='font-medium text-[14px]'>{message}</div>
                                ))}
                            </div>
                    }
                </>
            }

        </div >
    );
};

export default ChatInterface;
