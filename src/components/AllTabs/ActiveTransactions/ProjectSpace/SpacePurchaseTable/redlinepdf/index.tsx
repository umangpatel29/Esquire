// components/PdfModal.tsx
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import Modal from 'react-modal';

interface PdfModalProps {
    setIsRedlinePdf: () => void;
    isRedlinePdf: boolean;
}

const pdfUrl = '/redlinev4.pdf';
const pages = [0, 4, 30, 33, 50, 70];

const PdfModal: React.FC<PdfModalProps> = ({ setIsRedlinePdf, isRedlinePdf }) => {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const iframeRef = useRef<HTMLIFrameElement>(null);


    useEffect(() => {
        if (iframeRef.current) {
            iframeRef.current.src = `${pdfUrl}#page=${pages[currentPageIndex]}`;
        }
    }, [currentPageIndex, iframeRef]);

    const goToPage = (pageIndex: number) => {
        if (pageIndex >= 0 && pageIndex < pages.length) {
            setCurrentPageIndex(pageIndex);
        }
    };

    const handleNextPage = () => {
        if (currentPageIndex < pages.length - 1) {
            goToPage(currentPageIndex + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPageIndex > 0) {
            goToPage(currentPageIndex - 1);
        }
    };

    const handleCloseModal = () => {
        setIsRedlinePdf();
    };

    return (
        <div className='z-30 flex justify-between items-center'>
            <Modal
                isOpen={isRedlinePdf}
                onRequestClose={handleCloseModal}
                overlayClassName='fixed inset-0 z-40 bg-gray-800 bg-opacity-75 flex justify-center items-center'
                className='bg-white px-5 pb-2 pt-5 rounded-lg outline-none w-[70%] h-[95%]'
            >
                <div className='relative'>
                    <Image onClick={() => setIsRedlinePdf()} src='/icons/crossmodal.svg' alt='' width={20} height={20} className="absolute cursor-pointer -top-5 -right-2 m-4 text-white hover:text-gray-800" />
                </div>

                <div className='flex flex-row h-[90%] mt-6 border-b'>
                    <iframe src={`${pdfUrl}#page=${pages[currentPageIndex]}`} title="PDF Viewer" width="100%" height="100%" className='mr-4 border-b' ref={iframeRef} />
                    {/* <div className='w-[25%] border rounded-md bg-slate-100 p-3'>
                        <p className='text-center font-medium underline text-[24px]'>Comments</p>
                        <div className='flex flex-col gap-4 mt-5'>
                            <p>Proposed shorter time period.</p>
                            <p>Require that Buyer “shall” complete the working capital adjustment (so if the adjustment is positive in Company’s favor or the adjustment is very small, Buyer must still complete the working capital adjustment process).</p>
                            <p>Allows for subsequent objection to items included in the Company’s Final Adjustment Spreadsheet</p>
                        </div>
                    </div> */}
                </div>

                <div className='flex gap-2 mt-2 items-center justify-center'>
                    <button onClick={handlePreviousPage} disabled={currentPageIndex === 0} className='border p-2'>Previous</button>
                    <button onClick={handleNextPage} disabled={currentPageIndex === pages.length - 1} className='border p-2'>Next</button>
                </div>
            </Modal>
        </div>
    );
};

export default PdfModal;
