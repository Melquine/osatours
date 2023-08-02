import React from 'react'
import './About.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function About() {

  return (
    <>
    <Navbar />
    <div className='container-md about'>
        <div className='row'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 about-image'>
                <img src='./gallery/about/colours.jpg' alt='' />
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                <h1>Learn a little about what we do</h1>
                <p>
                  We are excited to receive you and your family, we would like to be able to offer you the best experiences about nature and giving you a better knowledge about the different species of animals and plants that are found in our National Park.
                </p>
            </div>
        </div>

    </div>
    <Footer />
    </>
  )
}

export default About