import almohadas from '@assets/img/almohadas.webp';

export function About() {
    return (
        <div className="flex w-full flex-col lg:flex-row">
            <div className="card bg-base-300 rounded-box grid h-screen grow place-items-center px-10">
                <img src={almohadas} alt="almohadas image" />
            </div>
            <div className="card bg-base-300 rounded-box grid h-screen grow justify-center content-center  px-10">
                <h3 className="text-4xl font-extrabold">About Us</h3>
                <p className="text-2xl font-light">
                    Located in the heart of the city, Hotel Estrella Mar offers a perfect blend of modern luxury and warm hospitality. With elegant rooms and exceptional service, every stay promises comfort and sophistication.
                </p>
                
            </div>
        </div>
    )
}
