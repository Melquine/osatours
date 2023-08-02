import React, { useEffect, useState } from 'react'
import { allFaqs } from './allFaqs'


import { useAppSelector } from '../../store/hooks'

import './Faqs.css'
import { formatter } from '../../helpers/formatText'
import { formatQuestion } from '../../helpers/formatQuestion'

function Faqs() {
    const [details, setDeatails] = useState<string[]>([])
    const [faqs, setFaqs] = useState<string[]>([])

    const {value: stateSelector} = useAppSelector((state) => state.tours)

    useEffect(() => {
        if(stateSelector == 'sloth') {
            setDeatails(formatter(allFaqs.sloth.details, '*'))
            setFaqs(formatQuestion(allFaqs.sloth.faqs, '*'))

        }else if(stateSelector == 'birds') {
            setDeatails(formatter(allFaqs.birds.details, '*'))
            setFaqs(formatQuestion(allFaqs.birds.faqs, '*'))
        }
        else if(stateSelector == 'frogs') {
            setDeatails(formatter(allFaqs.frogs.details, '*'))
            setFaqs(formatQuestion(allFaqs.frogs.faqs, '*'))
        }

    }, [stateSelector])

    return (
        <div className='faqscontainer container-md'>
            <section className='faqscontainer__details'>
                <h2 className='details__item details__item--modifier'>Tour Details</h2>

                {
                    Object.values(details)
                    .map((data: any, index:number) => <p key={index}>{data}</p>)
                    
                }        
                
            </section>

            <section className='faqscontainer'>
            <h2 className='faqs__item faqs__item--modifier'>Common faqs</h2>

                {
                    Object.values(faqs)
                    .map((data: any, index:number) => {
                        if(index % 2 == 0) {
                        return <h3 key={index} className='faqs__item'>{data}</h3>
                        }
                        return <p key={index} className='faqs__item'>{data}</p>
                    })
                    
                } 

            </section>
        </div>
    )
}

export default Faqs