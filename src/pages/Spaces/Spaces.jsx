import React from 'react'
import { Link } from "react-router-dom";
import { spacesData } from "@dataUtils/spacesData.js"

export function Spaces() {
    return (
        <div className="flex flex-col items-center justify-center bg-base-300 min-h-screen">
            <h1 className="text-6xl text-white text-center mt-28">Spaces</h1>

            <div className="flex flex-wrap items-center justify-center mt-7 max-w-7xl">
                {spacesData.map((space) => (
                    <Link  key={space.id} to={`/booking/${space.id}`}>
                        <div key={space.id} className="bg-base-100 p-5 m-5 rounded-lg shadow-lg w-96 max-h-96 hover:scale-105 transition-transform duration-300">
                            <img src={space.image} alt={space.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h2 className="text-2xl font-bold">{space.name}</h2>
                            <p>{space.description}</p>
                            <p><strong>Capacity:</strong> {space.capacity}</p>
                            <p><strong>Amenities:</strong> {space.amenities.join(", ")}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
