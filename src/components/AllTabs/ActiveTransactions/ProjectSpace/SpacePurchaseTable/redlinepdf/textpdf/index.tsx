// 'use client'
// import React from 'react';
// import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';

// const DocxViewer = () => {
//     // const docxUrl = '/sample.docx';
//     const docxUrl = 'https://jmp.sh/s/gPVP2FMYBplpqRjeTBJH';

//     return (
//         <div>
//             <DocViewer
//                 documents={[{ uri: docxUrl }]}
//                 pluginRenderers={DocViewerRenderers}
//             />
//         </div>
//     );
// };

// export default DocxViewer;




import React from 'react';

const DocxViewer = () => {
    const docxUrl = '/sample.DOCX';

    return (
        <>
            <iframe src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(docxUrl)}`}
                title="Document Viewer" width="100%" height="500px"></iframe>
            <iframe src={`https://docs.google.com/gview?url=${encodeURIComponent(docxUrl)}&embedded=true`}
                title="Document Viewer" width="100%" height="500px"></iframe>
        </>
    );
};

export default DocxViewer;
