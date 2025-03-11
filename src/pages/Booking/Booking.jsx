import { Calendar } from "@components/Calendar/Calendar"

export function Booking() {
    return (
        <div className="flex flex-col items-center justify-center h-fit bg-base-300 pt-28 pb-36">
            <h1 className="text-4xl text-white text-center mb-7">Booking</h1>
            <Calendar />
        </div>
    )
}
