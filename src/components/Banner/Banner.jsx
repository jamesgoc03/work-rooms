import './Banner.css'
import { Link } from "react-router-dom";

export function Banner() {
    return (
        <>
            <section className="banner flex flex-col justify-center items-center gap-3">
                <h2 className='text-white text-4xl text-center'>
                    <span className="text-6xl font-extrabold">Hotel Gestor</span>
                    <br />
                    If you are looking for a place to stay, you are in the right place.
                </h2>
                <Link
                    className="btn btn-outline btn-wide btn-accent mt-6"
                    to="/booking">
                    Book now
                </Link>
            </section>
        </>
    )
}
