import React from 'react'
import { Link } from 'react-router-dom'
import { IGuidesInfoProp } from '../../interfaces/interfaces'

function GuideCard({guide}: IGuidesInfoProp) {
  return (
    <div  className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
    <div style={{ marginTop: "24px" }} >
            <div className="card" style={{textAlign: "center"}}>
                <img src="./img/user.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{guide.name}</h5>
                    <p className="card-text">{guide.section}</p>
                    <Link to={guide.url} className="btn btn-primary">Profile</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GuideCard