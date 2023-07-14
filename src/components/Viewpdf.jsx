import React, { useState } from "react";
import Axios from "axios";

const ViewPdf = () => {
  const [pdfFile, setPdfFile] = useState();
  const [byteStream, setByteStream] = useState(null);
  const pako = require('pako'); // Install the 'pako' library via npm or yarn

  const compressByteStream = (byteStream) => {
    const compressedData = pako.gzip(byteStream);
    return compressedData;
  };

  const handlechange2 = () => {

    if (byteStream) {
      
      // Convert byte stream to file
      const file = new File([byteStream], "file.pdf", { type: "application/pdf" });

      // Create a Blob object from the file data
      const blob = new Blob([file], { type: "application/pdf" });

      // Create a URL representing the blob
      const url = URL.createObjectURL(blob);

      // Create a link element
      const link = document.createElement("a");
      link.href = url;
      link.download = file.name;

      // Append the link to the document body and trigger the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Revoke the URL to release resources
      URL.revokeObjectURL(url);
    } 
    else {
      alert("No PDF file selected.");
    }
  }


  const handleChange = (event) => {
    //alert(URL.createObjectURL(event.target.files[0]));
    //setPdfFile(URL.createObjectURL(event.target.files[0]));
    setPdfFile(event.target.files[0]);
    const file = event.target.files[0];

    if (file) {
      
      const reader = new FileReader();

      reader.onload = () => {
        const arrayBuffer = reader.result;
        const uint8Array = new Uint8Array(arrayBuffer);
        setByteStream(uint8Array);
        console.log(uint8Array);
      };

      reader.readAsArrayBuffer(file);
    }

  };

  const handleSave = () => {
    //alert("ue");
    if (byteStream) {
      const compressedData = compressByteStream(byteStream);
      Axios.post('http://localhost:3001/uploadpdf',{
        byteStream:compressedData,
      })
        .then((response) => {
          // Handle the successful response here
          console.log(response);
        })
        .catch((error) => {
          // Handle the error here
          console.error(error);
        });
    }
  };

  return (
    <>
      <h2>View PDF</h2>
      <input type="file" name="file" onChange={handleChange} />
      {/* {pdfFile && (
        <embed
          src={pdfFile}
          type="application/pdf"
          width="100%"
          height="600px"
        />
      )} */}
      {/* <p>{pdfFile}</p> */}
      <br/>
      <button onClick={()=>handleSave()}>submit</button>
      {pdfFile && (
        <embed src={URL.createObjectURL(pdfFile)} type="application/pdf" width="100%" height="600px" />
      )}
    </>
  );
};

export default ViewPdf;

