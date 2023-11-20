import React,{useState,useContext} from 'react'
import './adding.css'
import {Form, FormGroup, ListGroup, ListGroupItem, Button} from 'reactstrap'
import { Router, useNavigate } from 'react-router-dom'
import {AuthContext} from '../../components/context/AuthContext'
import {BASE_URL} from '../../utils/config'

import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import {TimePicker} from 'react-time-picker';


const Adding = ()=>{

    // const {price, reviews, title} = tour
    const navigate = useNavigate()

    const {user} = useContext(AuthContext)

    const [booking,setBooking] = useState({
        flightname : '',
        boardingpoint : '',
        bpAM : '',
        bpPM : '',
        endingpoint : '',
        epAM : '',
        epPM : '',
        flightnumber : '',
        addAt : '',
        price : ''
    })

    const serviceFee = 10

    const totalAmount = 60*Number(booking.price)+Number(serviceFee)

    const handelChange = e=>{
        setBooking(prev=>({...prev,[e.target.id]:e.target.value}))
    }

    // send data to server

    const handleclick = async e=>{
        e.preventDefault()
        // console.log(booking)
        try{
            if(!user || user===undefined || user===null){
                return alert('Please Login')
            }

            const res = await fetch(`${process.env.REACT_APP_URL}/api/v1/addflight`,{
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
                <h3>60<span> seat/per Flight</span></h3>
                <span className='tour__rating d-flex align-items-center'>
                    <i class="ri-star-fill"></i> {4.5}{" "}({5})
                </span>
            </div>

            {/* Booking Form Starts */}

            <div className='booking__form'>
                <h5>Information</h5>
                <Form className='booking__info-form' onSubmit={handleclick }>
                    <FormGroup>
                        <input type='text' placeholder='Flight Name' id='flightname' required onChange={handelChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type='text' placeholder='Boarding Point and Time [AM/PM]' id='boardingpoint' required onChange={handelChange} />
                        <FormGroup className='d-flex align-items-center gap-3'>
                        <input type='number' placeholder='AM' id='bpAM' required onChange={handelChange} />
                        <input type='number' placeholder='PM' id='bpPM' required onChange={handelChange} />
                        </FormGroup>
                    </FormGroup>
                    <FormGroup>
                        <input type='text' placeholder='Ending Point and Time [AM/PM]' id='endingpoint' required onChange={handelChange} />
                        <FormGroup className='d-flex align-items-center gap-3'>
                        <input type='number' placeholder='AM' id='epAM' required onChange={handelChange} />
                        <input type='number' placeholder='PM' id='epPM' required onChange={handelChange} />
                        </FormGroup>
                    </FormGroup>
                    <FormGroup>
                        <input type='number' required placeholder='Flight Number' id='flightnumber' onChange={handelChange} />
                    </FormGroup>
                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type='date' placeholder='add at' id='addAt' required onChange={handelChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type='number' placeholder='Price Per Person' id='price' required onChange={handelChange} />
                    </FormGroup>
                </Form>
            </div>

            {/* Booking From Ends */}

            {/* Booking Bottom Starts */}
            <div className='booking__bottom'>
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                        <h5 className='d-flex align-items-center gap-1'>60 person * </h5>
                        <span>${booking.price}</span>
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
                <Button className='btn primary__btn w-100 mt-4' onClick={handleclick}>Add Now</Button>
            </div>
            {/* Booking Bottom Ends */}

        </div>
    )
}


export default Adding