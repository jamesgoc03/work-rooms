import { Home } from "@pages/Home/Home"
import { Booking } from "@pages/Booking/Booking"
import { Spaces } from "@pages/Spaces/Spaces"
import { NotFound } from "@pages/NotFound/NotFound"
import { Reserve } from "@pages/Reserve/Reserve"
import { UnReserve } from "@pages/UnReserve/UnReserve"
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
                <Route path="/spaces" element={<Spaces/>}></Route>
                <Route path="/booking" element={<Booking/>}></Route>
                <Route path="/booking/:id" element={<Booking/>}></Route>
                <Route path="/reserve" element={<Reserve/>}></Route>
                <Route path="/unreserve" element={<UnReserve/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
            <Footer></Footer>
        </>
    )
}
