import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import _ from 'lodash'

export function Reserve() {
    const receptor = useLocation()
    const navigate = useNavigate()
    const { spaceId, spaceName, day, hour } = receptor.state || {}
    let reservations = JSON.parse(localStorage.getItem(spaceId)) || []
    const { formState: { errors }, register, handleSubmit } = useForm()

    useEffect(() => {
        validateData()
    }, [])


    function validateData() {
        if (!spaceId || !spaceName || !day || !hour) {
            navigate("/spaces")
        }
    }

    function onSubmit(data) {
        let reservation = {
            name: _.startCase(_.toLower(data.name)),
            email: _.toLower(data.email),
            day: day,
            hour: hour
        }
        reservations.push(reservation)
        localStorage.setItem(spaceId, JSON.stringify(reservations))
        navigate(`/booking/${spaceId}`)
    }

    function goBack() {
        navigate(`/booking/${spaceId}`)
    }

    return (
        <div className="flex items-center justify-center h-screen bg-base-300 flex-col gap-3">
            <button className="btn btn-circle h-20 w-20" type="button" onClick={goBack}>
                Go back
            </button>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box"
            >
                <h1 className="text-center text-2xl font-extrabold">Complete your booking</h1>
                <p className="text-center">
                    Booking {spaceName} on {day}, {hour} {hour > "12:00" ? "pm" : "am"}
                </p>

                <label className="fieldset-label">Name person in charge</label>
                <input
                    type="text"
                    className="input"
                    placeholder="Name"
                    {...register("name", {
                        required: true,
                        minLength: 3,
                        maxLength: 40
                    })}
                />
                {errors.name?.type === "required" && (
                    <span className="text-error">This field is required</span>
                )}
                {errors.name?.type === "minLength" && (
                    <span className="text-error">Minimum length is 3</span>
                )}
                {errors.name?.type === "maxLength" && (
                    <span className="text-error">Maximum length is 40</span>
                )}

                <label className="fieldset-label">Email person in charge</label>
                <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    {...register("email", {
                        required: true,
                        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        maxLength: 40
                    })}
                />
                {errors.email?.type === "required" && (
                    <span className="text-error">This field is required</span>
                )}
                {errors.email?.type === "pattern" && (
                    <span className="text-error">Invalid email format</span>
                )}
                {errors.email?.type === "maxLength" && (
                    <span className="text-error">Maximum length is 40</span>
                )}

                <button className="btn btn-accent mt-3.5" type="submit">
                    Book
                </button>
            </form>
        </div>
    )
}