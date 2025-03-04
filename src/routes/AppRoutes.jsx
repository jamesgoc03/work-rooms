import { Home } from "@pages/Home/Home"
import { Booking } from "@pages/Booking/Booking"
import { DashBoard } from "@pages/DashBoard/Dashboard"
import { Menu } from "@components/Menu/Menu"
import { Footer } from "@components/Footer/Footer"
import { Routes, Route } from "react-router-dom"

export function Router(){
    return(
        <>
            <Menu></Menu>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/dashboard" element={<DashBoard/>}></Route>
                <Route path="/booking" element={<Booking/>}></Route>
            </Routes>
            <Footer></Footer>
        </>
    )
}
