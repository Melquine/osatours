import React from 'react'
import './LocationMap.css'
import { useVisilbe } from '../../Hooks/UseVisible'

function LocationMap() {
  const { visible, myRef } = useVisilbe()

  return (
    <div id='location' className='container-md maps'>
      <div className='title'>

        <h2 className={visible ? 'typing' : ''} ref={myRef}>Location</h2>

      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15782.53587786064!2d-83.3125448524559!3d8.53487013431553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa466c2a75032fb%3A0x8d5d454d2acd0d0!2sProvincia%20de%20Puntarenas%2C%20Puerto%20Jim%C3%A9nez!5e0!3m2!1ses!2scr!4v1684958466723!5m2!1ses!2scr" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default LocationMap