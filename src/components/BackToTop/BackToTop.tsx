import React, {useEffect, useState} from "react";
import './BackToTop.css'

const BackToTop = () => {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setVisible(true)
            }else{
                setVisible(false)
            }
        })

    }, [])

    const scrollToUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className="container-fluid backToTop">
            {visible && (
                <i onClick={scrollToUp} className="bi bi-arrow-up backToTop__button"></i>
            )}
        </div>
    )
}

export default BackToTop
