import React from 'react'
import TextToSpeech from '../components/TextToSpeech'
import SpeechToText from '../components/SpeechToText'

const Speech = () => {
  return (
    <div>Speech
        <TextToSpeech/>
        <SpeechToText/>
    </div>
  )
}

export default Speech