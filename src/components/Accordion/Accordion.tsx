import React from 'react'
import './Accordion.css'
import { IFaqs } from '../../interfaces/interfaces'

function Accordion({question, answear, id}:IFaqs) {
  return (
     
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className={id == 0 ? 'accordion-button' : 'accordion-button collapsed'} type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${id}`} aria-expanded={id == 0 ? true : false} aria-controls="panelsStayOpen-collapseOne">
        { question }
      </button>
    </h2>
    <div id={`panelsStayOpen-collapse${id}`} className={id == 0 ? 'accordion-collapse collapse show' : 'accordion-collapse collapse collapse'}>
      <div className="accordion-body">
        { answear }
      </div>
    </div>
  </div>

  )
}

export default Accordion