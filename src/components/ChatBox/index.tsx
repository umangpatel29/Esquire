import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const response = 'Sure, see attached. Let me know if you have any follow-up questions.';
const pdfUrl = '/chatbox.xlsx';

const ChatBox = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isxlsxfile, setIsxlsxfile] = useState(false)
    const [messages, setMessages] = useState<{ text: string | JSX.Element; isUser: boolean; isPdfLink?: boolean; }[]>([]);

    const handleUserInput = (input: string) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: input, isUser: true },
            { text: 'typing..', isUser: false, isPdfLink: false },
        ]);

        setTimeout(() => {
            setMessages((prevMessages) => {
                const updatedMessages = prevMessages.slice(0, -1);
                return [
                    ...updatedMessages,
                    { text: response, isUser: false, isPdfLink: true },
                ];
            });
        }, 2000);
    };

    useEffect(() => {
        setTimeout(() => {
            setIsxlsxfile(false);
        }, 500)
    }, [isxlsxfile])

    return (
        <div className='fixed flex items-end gap-2 right-10 bottom-10'>
            {isChatOpen && (
                <div className="h-[450px] bg-white w-[300px] relative border-2 rounded-xl">
                    <div className="h-[40px] bg-cyan-800 rounded-t-lg text-white font-semibold text-center py-2 w-full">
                        Ask Esquire
                    </div>

                    <div className="h-[368px] overflow-y-auto bg-gray-50 px-4 py-2">

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

                                        <div className='bg-red-700 relative rounded-md p-3 my-2 flex justify-between items-center cursor-pointer text-white font-medium h-[40px]' onClick={() => setIsxlsxfile(true)}>
                                            {isxlsxfile &&
                                                <iframe src='/chtbox.xlsx' title="pdf Viewer" width="1px" height="1px" className='absolute top-0' />
                                            }
                                            <span>Esquire.xlsx</span> <Image src='/icons/up-arrow.svg' className='rotate-180' height={25} width={25} alt='' />
                                        </div>
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
