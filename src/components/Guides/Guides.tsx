import { useEffect } from 'react'
import { useVisilbe } from '../../Hooks/UseVisible'
import './Guides.css'
import { guidesInfo } from './guidesInfo'
import { IGuidesInfo } from '../../interfaces/interfaces'
import GuideCard from '../GuideCard/GuideCard'

const Guides = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const { visible, myRef } = useVisilbe()

    return (
        <div className='container-md guides' id='guides'>
            <div className='title'>
                <h2 className={visible ? 'typing' : ''} ref={myRef}>Our guides</h2>

            </div>
            <div className="row">
                {guidesInfo.map((guide: IGuidesInfo, index: number) => <GuideCard key={index} guide={guide} />)}
            </div>

        </div>

    )
}

export default Guides