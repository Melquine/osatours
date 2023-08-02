import React from 'react'
import './Information.css'

function Information() {
    
  return (
    <div className='container-md'>
        <div id='info' className='row'>

            <div className='col-12 col-sm-12 col-md-6 col-lg-6 section-one'>
                <img src='./img/riosirena_JPG.jpg' alt='Corcovado national park' />
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 section-one'>
                <h2>Sirena</h2>
                <p>
                    Sirena in the central station of the corcovado national park, you will have the opportunity to observe the most exotic flora and fauna of this jungle,
                    Currently, it can be reached in 2 ways by boat from Puerto Jimenez or by walking approximately 16 km from Carate.
                </p>
            </div>

            <div className='col-12 col-sm-12 col-md-6 col-lg-6 order-md-3'>
                <img src='./img/sector_laleona_JPG.jpg' alt='Corcovado national park' />
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 order-md-2'>
                <h2>La leona</h2>
                <p>
                A quick way to get to the Corcovado National Park is by visiting the La Leona sector, it can be accessed through a path or by walking along the shore of the beach. Or through a trail that will be a faster way to get to the nearest station.
                </p>
            </div>

        </div>
    </div>
  )
}

export default Information