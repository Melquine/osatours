import React, { useState, useRef, useEffect } from "react";

import TourIntro from "../TourIntro/TourIntro";

import { tourImages } from "./tourImages";
import { routes } from "./routes";
import './TourGallery.css'
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { IDetailsTour } from "../../interfaces/interfaces";

const TourGallery = (tour: IDetailsTour) => {
    const imgSize = useRef<HTMLDivElement>(null)
    const [tourName, setTourName] = useState<string | undefined>(tour.tour)
    const [divSize, setDivSize] = useState<number>()
    const [url, setUrl] = useState<string>()
    const [active, setActive] = useState<number>()
    const [images, setImages] = useState<any>([])

    useEffect(() => {

        if (tourName == 'sloth') {
            setImages(tourImages.sloth)
            setUrl(tourImages.sloth[0].fullSizeImg)
        }
        if (tourName == 'birds') {
            setImages(tourImages.birds)
            setUrl(tourImages.birds[0].fullSizeImg)
        }
        if (tourName == 'frogs') {
            setImages(tourImages.frogs)
            setUrl(tourImages.frogs[0].fullSizeImg)
        }

    }, [images])

    const handleImg = (image: string, index: number, size: number) => {
        setUrl(image)
        setActive(index)
        setDivSize(size)

    }



    return (
        <div className="container-md">
            <div className="global">
                <div className="container-test">
                    <div className="container__img" ref={imgSize} style={{ height: divSize ? `${divSize}px` : '401px' }}>
                        <img className="img__main" src={url} alt="Main" />
                    </div>

                    <div className="conatainer__elements">
                        {
                            images.map((image: any, index: number) => {
                                return (
                                    <img width='100%' className={active == index ? 'active' : 'normal'}
                                        key={image.fullSizeImg} onClick={(e) => handleImg(image.fullSizeImg, index, image.size)}
                                        src={image.smallSizeImg} alt="Main" />
                                )
                            })
                        }
                    </div>

                </div>

                <div className="left-items">
                    <Breadcrumb route={routes} />
                    <TourIntro />
                </div>

            </div>

        </div>
    )
}

export default TourGallery