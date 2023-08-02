import { useVisilbe } from '../../Hooks/UseVisible'
import { IToursInfo } from '../../interfaces/interfaces'
import TourCard from '../TourCard/TourCard'
import { toursInfo } from './toursInfo'
import './Tours.css'


const Tours = () => {
    const { visible, myRef } = useVisilbe()

    return (
        <div className='container-md tours' id='tours'>
            <div className='title'>
                <h2 className={visible ? 'typing' : ''} ref={myRef}>Our Tours</h2>
            </div>
            <div className="row">

            {toursInfo.map((guide: IToursInfo, index: number) => <TourCard key={index} tour={guide} />)}


            </div>

        </div>

    )
}

export default Tours