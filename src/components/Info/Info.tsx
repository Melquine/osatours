import React from "react";
import { info } from './info'
import InfoCard from '../InfoCard/InfoCard'
import { IInfo } from '../../interfaces/interfaces'
import './Info.css'

const Info = () => {
    return (
        <div className="container-md container-info">
            <div className="row">

                {info.map((info: IInfo, index: number) => <InfoCard key={index} info={info} />)}

            </div>
        </div>
    )
}

export default Info