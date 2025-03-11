import almohadas from '@assets/img/almohadas.png';
import { Link } from "react-router-dom";

export function About() {
    return (
        <div className="bg-base-300 flex w-full max-h-fit justify-center items-center flex-wrap py-72 gap-52">

            <div className="px-10 justify-center items-center max-w-lg min-w-xs flex">
                <img className="w-full" src={almohadas} alt="almohadas image" />
            </div>
            <div className="px-10 justify-center items-center max-w-lg min-w-xs flex flex-col gap-4">
                <h3 className="text-4xl font-extrabold">About Us</h3>
                <p className="text-2xl text-center font-light">
                    Located in the heart of the city, Hotel Estrella Mar offers a perfect blend of modern luxury and warm hospitality. With elegant rooms and exceptional service, every stay promises comfort and sophistication.
                </p>
                <Link 
                    className="btn btn-outline btn-wide btn-accent mt-6"
                    to="/booking">
                    Book now
                </Link>
            </div>

        </div>
    )
}
