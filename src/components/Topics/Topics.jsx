import { useState } from 'react'
import './Topics.css'
import { frequencies, daw, vocalsProcessing, mixing, mixingConsole, mastering, bgElement1 } from '../../assets'

const Topics = () => {
  const [currentImage, setCurrentImage] = useState(frequencies)

  return (
    <section id='topics' className='topics black'>
      <div className="wrapper">
        <h2>What will you learn?</h2>

        <div className="content-container">
          <ul className='topics-list'>
            <li onMouseEnter={() => setCurrentImage(frequencies)}>What are frequencies?</li>
            <li onMouseEnter={() => setCurrentImage(daw)}>Using DAW</li>
            <li onMouseEnter={() => setCurrentImage(vocalsProcessing)}>Vocals Processing</li>
            <li onMouseEnter={() => setCurrentImage(mixing)}>Mixing</li>
            <li onMouseEnter={() => setCurrentImage(mixingConsole)}>Mixing Console</li>
            <li onMouseEnter={() => setCurrentImage(mastering)}>Mastering</li>
          </ul>

          <div className="topics-image">
            <img src={currentImage} />
          </div>

        </div>
        <img src={bgElement1} className='bg-element-1' />
      </div>
    </section>
  )
}

export default Topics