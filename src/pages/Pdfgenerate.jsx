import React,{useEffect} from 'react'
import { PDFViewer, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const Pdfgenerate = () => {
    
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
        text:{
            width:'50%',
        },
        image: {
          width: '50%',
          height: 'auto',
        },
      });
      useEffect(() => {

      }, []);
  return (
    <PDFViewer width="1510" height="770">
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.text}>curElemnam</Text>
            <Image style={styles.image} src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}

export default Pdfgenerate