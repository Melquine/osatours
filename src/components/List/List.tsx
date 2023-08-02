import React from 'react'
import { IListProp} from '../../interfaces/interfaces'

function List({details}:IListProp) {
  return (
    <>
        <h5>Name</h5>
        <p>{details?.Name}</p>
        <h5>Age</h5>
        <p>{details?.Age}</p>
        <h5>Location</h5>
        <p>{details?.Location}</p>
        <h5>Experiencia</h5>
        <p>{details?.Experience}</p>
    </>

  )
}

export default List