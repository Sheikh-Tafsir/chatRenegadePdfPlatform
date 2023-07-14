import React, { useState } from 'react';
import Axios from 'axios';


const Uploadpdf = () => {
  const [selectedFile, setSelectedFile] = useState();
    const[isSelected, setIsSelected]= useState(false);
    

    const handleChange = async (event) => {
      setSelectedFile(event.target.files[0]);
      setIsSelected(true);

    };
    const handleSubmit = () => {
      if (isSelected === true) {
        const formData = new FormData();
        formData.append('pdfFile', selectedFile);
    
        Axios.post('http://localhost:3001/uploadpdf', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
          .then((response) => {
            alert(response.data);
          })
          .catch((error) => {
            console.error('Error uploading PDF:', error);
          });
      } else {
        alert("Upload a file");
      }
    };    

  return (
    <>
      <form enctype="multipart/form-data">
        <h2>Upload a file</h2>
        <input type="file" name="file" onChange={handleChange} />
        {isSelected ? (
          <div>
            <h2>File Details</h2>
            <p>Filename: {selectedFile.name}</p>
            <p>Filetype: {selectedFile.type}</p>
            <p>Size in bytes: {selectedFile.size}</p>
            <p>
              lastModifiedDate:{' '}
              {selectedFile.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </>
  );
};


export default Uploadpdf

// import React from 'react';

// class PDFUploader extends React.Component {
//   handleFileChange = (event) => {
//     const file = event.target.files[0];
//     const formData = new FormData();
//     formData.append('pdfFile', file);
//     formData.append('name', file.name);
//     for (let [key, value] of formData.entries()) {
//       console.log(JSON.stringify(`${key}: ${value}`));
//     }

//     fetch('/uploadpdf', {
//       method: 'POST',
//       body: formData,
//     })
//       .then(response => response.json())
//       .then(data => {
//         // Handle the response from the backend
//         console.log(data);
//       })
//       .catch(error => {
//         // Handle any errors that occurred during the request
//         console.error(error);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <input type="file" onChange={this.handleFileChange} />
//       </div>
//     );
//   }
// }

// export default PDFUploader;

