import React from 'react'
import './Breadcrumb.css'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'

type IRoute = {
    route: {
        name: string | undefined; 
        route: string;
    }[]

}

function Breadcrumb({route}:IRoute) {
    const { value } = useAppSelector((state) => state.tours)

  return (
    <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>

            {
                route.map((el, index:number) => {
                    if(index == route.length-1) {
                        return <li key={index} aria-current='page' className='breadcrumb-item active last'>{value}</li>
                    }
                    return <li key={index} className='breadcrumb-item'><Link to={el.route}>{el.name}</Link></li>
                })
            }

        </ol>
    </nav>
  )
}

export default Breadcrumb