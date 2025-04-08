import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import _ from 'lodash'

export function UnReserve() {
    const receptor = useLocation()
    const navigate = useNavigate()
    const { spaceId, spaceName, day, hour } = receptor.state || {}
    let reservations = JSON.parse(localStorage.getItem(spaceId)) || []
    let originalEmail = reservations.find(reservation => reservation.day === day && reservation.hour === hour)?.email
    const { formState: { errors }, register, handleSubmit } = useForm()
    validateData()

    function validateData() {
        if (!spaceId || !day || !hour) {
            navigate("/spaces")
        }
    }

    function onSubmit(data) {
        let reservationsUpdated = reservations.filter(reservation => reservation.day !== day || reservation.hour !== hour)
        localStorage.setItem(spaceId, JSON.stringify(reservationsUpdated))
        navigate(`/booking/${spaceId}`)
    }

    function goBack() {
        navigate(`/booking/${spaceId}`)
    }

    function validateEmail(email) {
        let emailLower = _.toLower(email)
        return emailLower === originalEmail
    }

    function anonymizeEmail() {
        const [username, domain] = originalEmail.split('@');
        const anonymizedUsername = username.charAt(0) + '*'.repeat(username.length - 2) + username.charAt(username.length - 1);
        return anonymizedUsername + "@" + domain;
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
                <h1 className="text-center text-2xl font-extrabold">Unreserve</h1>
                <p className="text-center">
                    Unreserve {spaceName} on {day}, {hour} {hour > "12:00" ? "pm" : "am"}
                </p>

                <label className="fieldset-label">Complete the email to unreserve</label>
                <label className="fieldset-label">{anonymizeEmail()}</label>
                <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    {...register("email", {
                        required: true,
                        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        validate: validateEmail,
                        minLength: 3,
                        maxLength: 100
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
                {errors.email?.type === "validate" && (
                    <span className="text-error">Email does not match</span>
                )}

                <button className="btn btn-warning mt-3.5" type="submit">
                    Unreserve
                </button>
            </form>
        </div>
    )
}