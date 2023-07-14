import React, { useState } from 'react';
import Speech from 'react-text-to-speech'

const TextToSpeech = () => {
  const [text,setText]= useState("");
  return (
    <>
      <input type="text" onChange={(event) => {setText(event.target.value);} }/>
      <Speech text={text} />
    </>
    
  )
}

export default TextToSpeech
