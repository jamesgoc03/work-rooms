import { useState, useEffect } from "react"
import { workingHours } from "@dataUtils/workingHours.js"
import { useNavigate } from "react-router-dom";

export function Calendar({ spaceId, spaceName }) {
    const reservations = JSON.parse(localStorage.getItem(spaceId)) || []

    const [days, setDays] = useState([])
    const [hours, setHours] = useState([])
    const [reserved, setReserved] = useState([])

    const navigator = useNavigate()

    useEffect(() => {
        setDays(workingHours[0])
        setHours(workingHours[1])
        setReserved(reservations)
    }, [])

    function isReserved(day, hour){
        return reserved.some(reservation => reservation.day === day && reservation.hour === hour)
    }

    function reserve(day, hour) {
        navigator("/reserve", { state: { spaceId, spaceName, day, hour }})
    }

    function unReserve(day, hour) {
        navigator("/unreserve", { state: { spaceId, spaceName, day, hour }})
    }

    function renderCells(day, hour) {
        if (isReserved(day, hour)) {
            return (
                <td key={day + hour}>
                    <button className="w-24 h-16 p-5 flex justify-center items-center btn btn-error"onClick={() => unReserve(day, hour)}>Reserved</button>
                </td>
            )
        } else {
            return (
                <td key={day + hour}>
                    <button className="w-24 h-16 p-5 flex justify-center items-center btn" onClick={() => reserve(day, hour)}>Book this</button>
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