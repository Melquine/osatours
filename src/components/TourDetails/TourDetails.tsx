import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import TourGallery from '../TourGallery/TourGallery'
import Faqs from '../TourFaqs/TourFaqs'

import { useAppDispatch } from '../../store/hooks'
import { setTour } from '../../store/slices/tours.slice'
import { useToTop } from '../../Hooks/UseToTop'


const TourDetails = () => {
    let { id:value } = useParams()
    const { pathname} = useLocation()
    const dispatch = useAppDispatch()
    const top = useToTop()
    
    const handleTour = () => {
        dispatch(setTour({value}))
    }

    useEffect(() => {
        handleTour()
    },[])

    return (
        <>
            <Navbar />
            <TourGallery tour={value}/>
            {/* <Booking /> */}
            <Faqs />
            <Footer />
        </>
    )
}

export default TourDetails