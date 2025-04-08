import React from 'react'

export function NotFound() {
    return (
        <div className="flex items-center justify-center h-screen bg-base-300 flex-col gap-3">
            <h1 className="text-6xl text-white text-center">404 Not Found</h1>
            <p className="text-2xl text-white text-center">The route does not exist.</p>
        </div>
    )
}