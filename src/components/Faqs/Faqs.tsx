import React from 'react'
import './Faqs.css'
import Accordion from '../Accordion/Accordion'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { AllFaqs } from './AllFaqs'

const data = Object.entries(AllFaqs[0])

function Faqs() {
    return (
        <>
        <Navbar />
        <div className='container-md'>
            <h1 className='faqs'>Frequently asked questions</h1>
            <div className="accordion" id="accordionPanelsStayOpenExample">
            {
                data.map((data: any, index: number) => <Accordion key={index} question={data[0]} answear={data[1]} id={index} />)
            }

            </div>
        </div>
        <Footer />
        </>
    )
}

export default Faqs