import react from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Tours from '../pages/Tours'
import TourDetails from '../pages/TourDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SearchResultList from '../pages/SearchResultList'
import ThankYou from '../pages/ThankYou'
import AdminHome from '../pages/AdminHome'
import Controlpanel from '../pages/ControlPanel'
import SeatCheck from '../pages/SeatCheck'
import Myflights from '../pages/Myflights'
import Flightcard from '../pages/Flightcard'


const Router = ()=>{
    return(
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home/>} />
            <Route path='/flights' element={<Tours/>} />
            <Route path='/flights/:id' element={<TourDetails/>} />
            <Route path='/flights/seats/:id' element={<SeatCheck/>} />
            <Route path='/myflights' element={<Myflights/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/thank-you' element={<ThankYou/>} />
            <Route path='/tours/search' element={<SearchResultList/>} />
            <Route path='/admin/home' element={<AdminHome/>} />
            <Route path='/admin/controlpanel' element={<Controlpanel/>} />
            <Route path='/api/v1/myflights' element={<Flightcard/>} />
        </Routes>
    )
}

export default Router