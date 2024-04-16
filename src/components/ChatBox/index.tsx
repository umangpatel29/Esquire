import Image from 'next/image';
import React, { useState } from 'react';

const response = 'Sure, see attached. Let me know if you have any follow-up questions. (Note to Mitul - I have sent you a project space attachment in email, please add that in the response)';
const pdfUrl = '/chatbox.pdf';

const ChatBox = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState<{ text: string | JSX.Element; isUser: boolean; isPdfLink?: boolean; }[]>([]);

    const handleUserInput = (input: string) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: input, isUser: true },
            { text: response, isUser: false, isPdfLink: true },
        ]);
    };

    return (
        <div className='fixed flex items-end gap-2 right-10 bottom-10'>
            {isChatOpen && (
                <div className="h-[450px] bg-white w-[300px] relative border-2 rounded-xl">
                    <div className="h-[40px] bg-cyan-800 rounded-t-lg text-white font-semibold text-center py-2 w-full">
                        Ask Esquire
                    </div>

                    <div className="h-[368px] overflow-y-scroll bg-gray-50 px-4 py-2">

                        {messages.length > 1 && messages.map((message, index) => (
                            <div
                                key={index}
                                className={`my-2 rounded-lg px-3 py-1 bg-slate-200 ${message.isUser ? 'ml-auto rounded-br-none' : ' mr-auto rounded-bl-none'}`}
                                style={{
                                    width: '70%',
                                    alignSelf: message.isUser ? 'flex-start' : 'flex-end',
                                    textAlign: message.isUser ? 'right' : 'left',
                                }}
                            >
                                <span className={`text-sm`}>{message.text}
                                    {
                                        message.isPdfLink &&

                                        <a href={pdfUrl} download className='bg-red-700 rounded-md p-3 my-2 flex justify-between items-center text-white font-medium'>
                                            <span>Esquire.pdf</span> <Image src='/icons/up-arrow.svg' className='rotate-180' height={25} width={25} alt='' /></a>
                                    }
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="border-t-2 px-2 py-1 flex gap-3 items-center absolute bottom-0 right-0 w-full rounded">
                        <div className="h-8 w-10 flex justify-center items-center rounded-full overflow-hidden">
                            <Image src='/icons/user.svg' alt="user" width={20} height={20} className="object-cover w-full h-full" />
                        </div>
                        <input
                            type="text"
                            placeholder="write your message"
                            className="w-full outline-none border-l-2 px-2 font-medium"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && e.currentTarget.value.trim() !== '') {
                                    handleUserInput(e.currentTarget.value);
                                    e.currentTarget.value = '';
                                }
                            }}
                        />
                    </div>
                </div>
            )}

            <div onClick={() => setIsChatOpen(!isChatOpen)}>
                <div className={`h-[50px] w-[50px] cursor-pointer `}>
                    {isChatOpen ? (
                        <Image src='/icons/cross.svg' alt="" width={40} height={40} className="object-cover h-full w-full" />
                    ) : (
                        <Image src='/icons/plus.svg' alt="" width={40} height={40} className="object-cover h-full w-full" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
