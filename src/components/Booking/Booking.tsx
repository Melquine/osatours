import React, { useState, ChangeEvent } from "react";
import Calendar from "../Calendar/Calendar";

import "react-datepicker/dist/react-datepicker.css";
import { IDate } from "../../interfaces/interfaces";
import './Booking.css'
import Cart from "../Cart/Cart";

const initial = {
    month: '',
    day: '',
    year: ''
}

const Booking = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [ myDate, setMyDate ] = useState<IDate>(initial)

    function handleAction({month, day, year}:IDate) {
        setMyDate({
            ...myDate,
            month,
            day,
            year
        })
    }

    function handleChange({ target }:ChangeEvent<HTMLInputElement>) {
        setMyDate({
            ...myDate,
            [target.name]: target.value
        })
    }

    return(
        <div className="container-md date">
            <div>Booking</div>
            <Calendar onAction={handleAction}/>

            <form>
                <div className="datescontainer">
                    <input className="datescontainer__input" type="text" value={myDate.month} name="month" placeholder="Month" onChange={handleChange} />
                    <input className="datescontainer__input" type="text" value={myDate.day} name="day" placeholder="Day" onChange={handleChange} />
                    <input className="datescontainer__input" type="text" value={myDate.year} name="year" placeholder="Year" onChange={handleChange} /> 
                </div>
            </form>
            
            <Cart />
        </div>

    )
}

export default Booking