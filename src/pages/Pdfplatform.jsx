import React,{useState, useEffect} from 'react'
import "../styles/Pdfplatform.css"
import {BsPerson,BsFillArrowUpSquareFill} from "react-icons/bs"
import Projectara from '../json/Projectara'
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { PDFViewer, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const Pdfplatform = () => {
    const [pdfobj, setPadfobj] = useState([]);
    // const [pdfFile, setPdfFile] = useState();
    // const [byteStream, setByteStream] = useState(null);
    
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [fetchResults, setFetchResults] = useState([]);


    const handleChange = (e) => {
        setSearchValue(e.target.value);
        filterResults(e.target.value);
    };

    const filterResults = (value) => {
        const filteredResults = fetchResults.filter((item) =>
            item.title.toLowerCase().includes(value.toLowerCase())
        );
        setSearchResults(filteredResults);
    };


      const pass = (curElem) => {
        setPadfobj(curElem);
        document.querySelector(".viewpdf").classList.add("viewpdf-prime");
      };

      useEffect(() => {
        //setSearchResults(Projectara);
        const url = "https://chat-renegade.vercel.app/api/pdf"

        fetch(url)
            .then((data) => data.json())
            .then((data) => {
                //alert(JSON.stringify(data.data))
                setFetchResults(data.data)
                setSearchResults(data.data);
            })
        
    }, []);


    const styles = StyleSheet.create({
        page: {
          flexDirection: 'row',
          backgroundColor: '#E4E4E4',
        },
        section: {
            flexDirection: 'row',
          margin: 10,
          padding: 10,
          flexGrow: 1,
        },
        subsection: {
            width:'60%',
            paddingLeft:'10',
        },
        text:{
            width:'90%',
            textAlign: 'center',
            fontSize:20,
            marginBottom: 15,
        },
        desc:{
            width:'90%',
            fontSize:15,
        },
        image: {
          width: '40%',
          height: 'auto',
        },
      });

  return (
    <>
    <div className="projects text-white lg:text-xs 2xl:text-sm pb-10" id="portfolio">
        <p className="flex justify-center pt-10 pb-2">PDF</p> 
        <div className="flex justify-center text-3xl lg:text-3xl 2xl:text-4xl font-bold mb-10"><p className="text-orange-600 mr-3">AI Generated</p><p>Pdfs</p></div>
    
        <div className="flex w-100 h-14 mx-auto mb-4">
            <input
                type="text"
                placeholder="Search by name..."
                value={searchValue}
                onChange={handleChange}
                className="searchBar"
            />
            <Link to="/pdfgenerate"><BsFillArrowUpSquareFill className="uploadButton"/></Link>
        </div>
        <div className="flex flex-wrap justify-content w-5/6 lg:w-4/5 mx-auto">
            {searchResults.map((curElem)=>{
                return(
                <div className="project-card" key={curElem.id} onClick={()=> pass(curElem)}>
                    <img src="https://media.kasperskydaily.com/wp-content/uploads/sites/92/2020/02/28163447/36C3-PDF-encryption-featured2.jpg" alt=""></img>
                    <div className="project-card-gradient pt-4 lg:p-6 lg:pt-4 2xl:p-12 2xl:pt-8">
                        <p className="font-bold text-base lg:text-base 2xl:text-lg mt-10 mb-2">{curElem.title}</p>
                        <div className="bg-white h-7 w-7 lg:h-7 lg:w-7 2xl:h-11 2xl:w-11 mx-auto rounded-full flex items-center justify-center">
                            <BsPerson className="text-black" />
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
        
    </div>

    <div className="text-white viewpdf">
    <div className="flex justify-center  text-3xl lg:text-3xl 2xl:text-4xl font-bold mb-5 "><p >View</p><p className="text-orange-600 ml-3">Pdf</p></div>
    <PDFViewer width="1300" height="800" className="mx-auto">
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <View style={styles.subsection}>
                <Text style={styles.text}>{pdfobj.title}</Text>
                <Text style={styles.desc}>{pdfobj.content}</Text>
            </View>
            <Image style={styles.image} src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
            {/* {image && <Image style={styles.image} src={image} />} */}
          </View>
        </Page>
      </Document>
    </PDFViewer>
    </div>

    </>
  )
}

export default Pdfplatform