import React from 'react'
import { Link } from 'react-router-dom'
import { IToursInfoProp } from '../../interfaces/interfaces'

function TourCard({ tour }: IToursInfoProp) {
    return (
        
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div style={{ marginTop: "24px" }} >
                    <div className="card" style={{ textAlign: "center" }}>
                        <img src={tour.tourImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{tour.name}</h5>
                            <p className="card-text">{tour.time}</p>
                            <Link to={tour.url} className="btn btn-primary">BOOK A TOUR</Link>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default TourCard