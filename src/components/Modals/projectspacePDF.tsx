import Image from 'next/image';
import React, { useEffect } from 'react';

function ProjectspacePDF({ filePath = '/Husky.pdf', isPdfOpen, setIsPdfOpen }: any) {
    const fileExtension = filePath.split('.').pop().toLowerCase();

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (isPdfOpen && e.target instanceof HTMLElement && !e.target.closest('.modal-content')) {
                setIsPdfOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isPdfOpen, setIsPdfOpen]);

    return (
        <div>
            {isPdfOpen && (
                <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative bg-white py-9 px-6 rounded-lg shadow-xl w-[50%] h-[70%] overflow-y-auto modal-content">
                        <Image src='/icons/crossmodal.svg' alt='' width={20} height={20} className="absolute cursor-pointer -top-2 right-1 m-4 text-white hover:text-gray-800" onClick={() => setIsPdfOpen(false)} />

                        {fileExtension === 'pdf' ? (
                            <iframe
                                src={filePath}
                                className="w-full h-full"
                                title="PDF Viewer"
                            ></iframe>
                        ) : fileExtension === 'docx' ? (
                            <iframe
                                src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURI(filePath)}`}
                                className="w-full h-full"
                                title="DOCX Viewer"
                            ></iframe>
                        ) : (
                            <p>Unsupported file format</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectspacePDF;
