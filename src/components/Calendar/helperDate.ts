import React, { useEffect, useState } from "react";
import { monthNames, currentDay, monthNumber, currentYear, getTotalDays } from "./helperCalendar";

export const useDate = () => {
    const [monthNum, setMonthNumber] = useState<number>(monthNumber)
    const [month, setMonth] = useState<string>('')
    const [year, setYear] = useState<string>(currentYear.toString())
    const [days, setDays] = useState<number[]>([])
    const [prevDays, setPrevDays] = useState<number[]>([])

    useEffect(() => {
        setMonth(monthNames[monthNum])
        setDays(getTotalDays(monthNum))
        startDay()
    }, [monthNum])

    const startDay = () => {
        const start = new Date(Number(year), monthNum, 1)
        const totalDays = ((start.getDay() - 1 === -1) ? 6 : (start.getDay() - 1))
        let days: number[] = []
        const m = getTotalDays(monthNum - 1)
        for (let i = totalDays; i > 0; i--) {
            days.push(m.length - (i - 1))
        }
        setPrevDays(days)
    }

    const nextMonth = (monthNum: number) => {
        if (monthNum !== 11) {
            setMonthNumber(monthNum + 1)
        } else {
            setMonthNumber(0)
            let newYear = Number(year) + 1
            let x = newYear.toString()
            setYear(x)
        }
    }

    const prevMonth = (monthNum: number) => {
        if (monthNum !== 0) {
            setMonthNumber(monthNum - 1)
        } else {
            setMonthNumber(11)
            let newYear = Number(year) - 1
            let x = newYear.toString()
            setYear(x)
        }
    }

    return { nextMonth, prevMonth, month, year, days, prevDays, monthNum }

}
