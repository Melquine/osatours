let monthNames = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September', 'October', 'November',
    'December']

let currentDate = new Date()
let currentDay = currentDate.getDate()
let monthNumber = currentDate.getMonth()
let currentYear = currentDate.getFullYear()

const isLeap = (): boolean => {
    return (currentYear % 400 === 0 || (currentYear % 100 !== 0) && (currentYear % 4 === 0))
}

const fill = (num: number): number[] => {
    return Array(num).fill(1).map((x: number, i: number) => i + 1)
}

const getTotalDays = (monthNumber: number): number[] => {
    const monthWith31 = [0, 2, 4, 6, 7, 9, 11]
    const monthWith30 = [3, 5, 4, 8, 10]

    if (monthWith31.includes(monthNumber)) {
        return fill(31)
    } else if (monthWith30.includes(monthNumber)) {
        return fill(30)
    } else {
        return isLeap() ? fill(29) : fill(28)
    }
}

export {
    monthNames,
    currentDay,
    monthNumber,
    currentYear,
    getTotalDays
}