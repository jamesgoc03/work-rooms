import './Banner.css'
import { Link } from "react-router-dom";

export function Banner() {
    return (
        <>
            <section className="banner flex flex-col justify-center items-center gap-3">
                <div className="max-w-2xl">
                    <h2 className='text-white text-4xl text-center'>
                        <span className="text-6xl font-extrabold">Work Rooms</span>
                        <br />
                        If you are looking for a space to work, study or meet, you are in the right place.
                    </h2>
                </div>
                <Link
                    className="btn btn-outline btn-wide btn-accent mt-6"
                    to="/Spaces">
                    Booking now
                </Link>
            </section>
        </>
    )
}
