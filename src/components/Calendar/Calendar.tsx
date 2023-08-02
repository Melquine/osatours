import React, { useEffect, useState } from "react";
import { Iprop } from "../../interfaces/interfaces";
import { monthNames, currentDay, monthNumber, currentYear, getTotalDays } from "./helperCalendar";
import { useDate } from './helperDate'
import './Calendar.css'

const Calendar = ({onAction}:Iprop) => {
    const [day, setDay] = useState<string>('')
    const { nextMonth, prevMonth, month, year, days, prevDays, monthNum } = useDate()

    const setDate = (x:number) => {
        let day = x.toString()
        setDay(day)
        onAction({month, day, year})
    }

    useEffect(() => {

        onAction({month, day, year})
    }, [month, year])

    return (
        <div className="calendar">
            <div className="calendar__info">
                <div className="calendar__prev" id="prev-month" onClick={() => prevMonth(monthNum)}>&#9664;</div>
                <div className="calendar__month" id="month">{month}</div>
                <div className="calendar__year" id="year">{year}</div>
                <div className="calendar__next" id="next-month" onClick={() => nextMonth(monthNum)} >&#9654;</div>
            </div>

            <div className="calendar__week">
                <div className="calendar__day calendar__item">Mon</div>
                <div className="calendar__day calendar__item">Tue</div>
                <div className="calendar__day calendar__item">Wed</div>
                <div className="calendar__day calendar__item">Thu</div>
                <div className="calendar__day calendar__item">Fri</div>
                <div className="calendar__day calendar__item">Sat</div>
                <div className="calendar__day calendar__item">Sun</div>
            </div>

            <div className="calendar__dates" id="dates">

                {prevDays.map(x => <div key={x} className="calendar__date__prev calendar__item">{x}</div>)}

                 {days.map((x) => x === currentDay ?
                    <div onClick={() => setDate(x)} key={x} className="calendar__date calendar__item today">{x}</div> :
                    <div onClick={() => setDate(x)} key={x} className="calendar__date calendar__item">{x}</div>
                )}
            </div>

        </div>
    )
}

export default Calendar