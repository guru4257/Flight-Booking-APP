import React,{useState,useContext} from 'react'
import './booking.css'
import {Form, FormGroup, ListGroup, ListGroupItem, Button} from 'reactstrap'
import { Router, useNavigate } from 'react-router-dom'
import {AuthContext} from '../../components/context/AuthContext'
import {BASE_URL} from '../../utils/config'


const Booking = ({tour, avgRating})=>{

    // const {price, reviews, title} = tour
    const { _id,Flightname,Boardingpoint,bpAM,bpPM,Endingpoint,epAM,epPM,Flightnumber,AddAt,Price} = tour
    const navigate = useNavigate()

    const {user} = useContext(AuthContext)

    const [booking,setBooking] = useState({
        userId : user && user._id,
        // userEmail : user.email,
        Flightid : _id,
        Flightname : Flightname,
        username : '',
        phone : '',
        guestSize : '',
        bookAt : '',
        seat1No : '',
        seat2No : '',
        seat1No : ''
    })

    const serviceFee = 10

    const totalAmount = Number(Price)*Number(booking.guestSize)+Number(serviceFee)

    const handelChange = e=>{
        setBooking(prev=>({...prev,[e.target.id]:e.target.value}))
    }

    // send data to server

    const handleclick = async e=>{
        e.preventDefault()
        console.log(booking)
        try{
            if(!user || user===undefined || user===null){
                return alert('Please Login')
            }

            const res = await fetch(`${process.env.REACT_APP_URL}/api/v1/booking`,{
                method : 'post',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(booking)
            })

            const result = await res.json()

            if(!res.ok){
                alert (result.message)
            }
            
        navigate('/thank-you')
        }catch(err){
            alert(err.message)
        }

    }

    return(
        <div className='booking'>
            <div className='booking__top d-flex align-items-center justify-content-between'>
                <h3>{Price}<span>/per person</span></h3>
                <span className='tour__rating d-flex align-items-center'>
                    <i class="ri-star-fill"></i> {5}{" "}({5})
                </span>
            </div>

            {/* Booking Form Starts */}

            <div className='booking__form'>
                <h5>Information</h5>
                <Form className='booking__info-form' onSubmit={handleclick }>
                    <FormGroup>
                        <input type='text' placeholder='User Name' id='username' required onChange={handelChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type='number' required placeholder='Phone' id='phone' onChange={handelChange} />
                    </FormGroup>
                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type='date' placeholder='' id='bookAt' required onChange={handelChange} />
                    </FormGroup>
                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type='number' placeholder='Book Maximum Three Seats' id='guestSize' required onChange={handelChange} />
                    </FormGroup>
                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type='number' placeholder='Seat 1 No' id='seat1No' required onChange={handelChange} />
                        <input type='number' placeholder='Seat 2 No' id='seat2No' required onChange={handelChange} />
                        <input type='number' placeholder='Seat 3 No' id='seat3No' required onChange={handelChange} />
                    </FormGroup>
                </Form>
            </div>

            {/* Booking From Ends */}

            {/* Booking Bottom Starts */}
            <div className='booking__bottom'>
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                        <h5 className='d-flex align-items-center gap-1'>${Price} <i class="ri-close-line"></i> 1 person </h5>
                        <span>${Price}</span>
                    </ListGroupItem>
                </ListGroup>
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                        <h5>Service Charge</h5>
                        <span>${serviceFee}</span>
                    </ListGroupItem>
                </ListGroup>
                <ListGroup>
                    <ListGroupItem className='border-0 px-0 total'>
                        <h5>Total</h5>
                        <span>{totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>
                <Button className='btn primary__btn w-100 mt-4' onClick={handleclick}>Book Now</Button>
            </div>
            {/* Booking Bottom Ends */}

        </div>
    )
}


export default Booking