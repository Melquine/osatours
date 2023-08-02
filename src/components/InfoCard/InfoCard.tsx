import React from 'react'
import { IInfoProp } from '../../interfaces/interfaces'

const InfoCard = ({ info }:IInfoProp) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 test">
    <div className="cont" style={{ marginTop: "24px" }}>
        <div className="logo"><i className={info.icon}></i></div>
        <div className="title_description">
            <h4>{info.title}</h4>
        </div>
        <div className="description">
            <p>{info.text}</p>
        </div>
    </div>

</div>
  )
}

export default InfoCard