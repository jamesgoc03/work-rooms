import { Calendar } from "@components/Calendar/Calendar"
import { spacesData } from "@dataUtils/spacesData.js"
import { useParams } from "react-router-dom"
import { Navigate } from "react-router-dom"
import React from 'react'

export function Booking() {
    const { id } = useParams()
    let spaces = []

    if(id) {
        spaces = spacesData.filter(space => space.id === parseInt(id))
        if(spaces.length === 0) {
            return <Navigate to="/notfound" />
        }
    } else {
        spaces = spacesData
    }


    return (
        <div className="flex flex-wrap gap-8 items-center justify-center h-fit bg-base-300 pt-28 pb-36">
            {spaces.map((space) => (
                <div key={space.id}>
                    <h1 className="text-4xl text-white text-center mb-7">Booking {space.name}</h1>
                    <Calendar spaceId={ space.id } spaceName={ space.name } />
                </div>
            ))}
        </div>
    )
}
