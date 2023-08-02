import React, { useEffect, useState } from 'react'
import './TourIntro.css'
import { ToursIntro } from './ToursIntro'

import { useAppSelector } from '../../store/hooks'
import { formatter } from '../../helpers/formatText'

function TourIntro() {
    const [intro, setIntro] = useState<string[]>([])

    const { value: state } = useAppSelector((state) => state.tours)

    useEffect(() => {
        if(state == 'sloth') {
            setIntro(formatter(ToursIntro.sloth, '*'))
        }else if(state == 'birds') {
            setIntro(formatter(ToursIntro.bird, '*'))

        }else if(state == 'frogs') {
            setIntro(formatter(ToursIntro.frogs, '*'))
        }

    }, [state])

  return (
      <div className='test'>
          {
              Object.values(intro)
                  .map((data: any, index: number) => <p key={index}>{data}</p>)
          }
      </div>
  )
}

export default TourIntro