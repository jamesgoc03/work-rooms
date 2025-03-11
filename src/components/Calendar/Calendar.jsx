import { useState, useEffect } from "react"
import { workingHours } from "@data/workingHours.js"

export function Calendar() {
    const [days, setDays] = useState([])
    const [hours, setHours] = useState([])
    const [reserved, setReserved] = useState([])

    useEffect(() => {
        setDays(workingHours[0])
        setHours(workingHours[1])
    }, [])

    function isReserved(day, hour){
        return reserved.some(reservation => reservation.day === day && reservation.hour === hour)
    }

    function reserve(day, hour) {
        setReserved([...reserved, { day, hour }])
    }

    function unReserve(day, hour) {
        setReserved(reserved.filter(reservation => reservation.day !== day || reservation.hour !== hour))
    }

    function renderCells(day, hour) {
        if (isReserved(day, hour)) {
            return (
                <td key={day} className="w-24 h-16 p-5 flex justify-center items-center btn btn-error">
                    <button onClick={() => unReserve(day, hour)}>Reserved</button>
                </td>
            )
        } else {
            return (
                <td key={day} className="w-24 h-16 p-5 flex justify-center items-center btn">
                    <button onClick={() => reserve(day, hour)}>Book this</button>
                </td>
            )
        }
    }

    return (
        <table>
            <thead className="bg-base-100">
                <tr className="flex">
                    <th className="w-24 h-16 py-0 px-5 flex justify-center items-center">Hours</th>
                    {days.map((day) => <th className="w-24 h-16 p-5 flex justify-center items-center" key={day}>{day}</th>)}
                </tr>
            </thead>
            <tbody>
                {
                    hours.map((hour) =>
                        <tr className="flex" key={hour}>
                            <td className="w-24 h-16 p-5 flex justify-center items-center bg-base-100">{hour}</td>
                            {days.map((day) => renderCells(day, hour))}
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}