import React from 'react'
import './Contact.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useForm } from '../../Hooks/UseForm'

const initial = {
    name: '',
    message: ''
}

function Contact() {
    const { handleChange, contact } = useForm(initial)
    const msg = `Hello my name is ${contact.name} ${contact.message}`

    return (
        <>
            <Navbar />
            <div className='container-md contact'>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-6'>
                        <h1>Contact information</h1>
                        <form className="needs-validation">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" id="name" className="form-control" placeholder="Name" name="name"
                                    pattern="[A-Za-z(À-ÿ)?(\u00f1\u00d1)?]{2,15}" value={contact.name} onChange={handleChange} required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea placeholder='Message' className="form-control" name="message" value={contact.message} onChange={handleChange} id="exampleFormControlTextarea1" cols={30} rows={10}>

                                </textarea>
                            </div>

                            <a href={`mailto:melquine83@gmail.com?subject=Tour information&body=${msg}`} className="btn btn-success send-btn">Submit</a>
                        </form>
                    </div>
                    <div className='col-12 col-sm-6 col-md-6 contact-img'>
                        <img src='./img/Eltigre03_jpg.jpg' alt='Corcovado' />
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Contact