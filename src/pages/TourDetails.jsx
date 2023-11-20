import react,{useEffect, useRef, useState} from 'react'
import '../styles/tour-details.css'
import {Container, Row, Col, Form, ListGroup} from 'reactstrap'
import {useFetcher, useParams, useNavigate} from 'react-router-dom'
import tourData from '../assests/data/tours'
import avatar from '../assests/images/avatar.jpg'
import Booking from '../components/Booking/Booking'
import Newsletter from '../shared/Newsletter'
import useFetch from '../components/hooks/useFetch'
import {BASE_URL} from './../utils/config'
import photos from "../assests/images/tour-img01.jpg";

const TourDetails = ()=>{

    const {id} = useParams()
    // const tour = tourData.find(tour=> tour.id===id)
    const reviewMsgRef = useRef('')

    const [tourRating,setTourRating] = useState(null)

    const {data:tour,loading,error} = useFetch(`${process.env.REACT_APP_URL}/api/v1/flight/${id}`)
    const { _id,Flightname,Boardingpoint,bpAM,bpPM,Endingpoint,epAM,epPM,Flightnumber,AddAt,Price} = tour


    // format data
    const options = {day : 'numeric', month : 'long',year : 'numeric', }

    // Submit request to the handler

    const submitHandler = e=>{
        e.preventDefault();
        const reviewText = reviewMsgRef.current.value
        // alert(`${reviewText},${tourRating}`)
        // later we will call the api
    }

    useEffect(()=>{
        window.scrollTo(0,0)
    },[tour])

    const navigate = useNavigate()

    const handelchange = ()=>{
        navigate(`/flights/seats/${_id}`,{
            state : {id:_id}
        })
    }


    return(
        <>
        <section>
            <Container>
                {
                    loading && <h4 className='text-cnter pt-5'>Loading...</h4>
                }
                {
                    error && <h4 className='text-cnter pt-5'>{error}</h4>
                }
                {
               !loading && !error &&  <Row>
                    <Col lg='8'>
                        <div className='tour__content'>
                            <img src={photos} alt='' />
                            <div className='tour__info'>
                                <h2>{Flightname}</h2>
                                <div className='d-flex align-items-center gap-5'>
                                    <span className='tour__rating d-flex align-items-center gap-1'>
                                    <i class="ri-star-fill" style={{color: "var(--secondary-color)"}}></i> {5}{" "}
                                    <span>({5})</span>
                                    </span>
                                    <span><i class="ri-map-pin-user-fill"></i>FlightNumber : {Flightnumber}</span>
                                </div>

                                   <div className='tour__extra-details'>
                                       <span>
                                       <i class="ri-map-pin-2-line"></i> {Endingpoint}
                                       </span>
                                       <span>
                                       <i class="ri-money-dollar-circle-line"></i> ${Price} per person
                                       </span>
                                       <span>
                                       <i class="ri-map-pin-time-line"></i> {Boardingpoint} 
                                       </span>
                                       <span>
                                       <i class="ri-group-line"></i> {60} people
                                       </span>
                                   </div>


                                   <h5>Boarding Point Timing</h5>
                                   {
                                        bpAM!=0 ? <>Hey Passengers be ready at {bpAM} AM</> : <></>
                                   }
                                   {
                                        bpPM!=0 ? <>Hey Passengers be ready at {bpPM} PM</> : <></>
                                   }
                                   {"\n"}<h5>     </h5>
                                   <h5>Reaching Point Timing</h5>
                                   {
                                        epAM!=0 ? <>Hey Passengers you will be reached at {epAM} AM</> : <></>
                                   }
                                   {
                                        epPM!=0 ? <>Hey Passengers you will be reached at {epPM} PM</> : <></>
                                   }        
                                   
                                   

                            </div>
                            {/* tour review section starts */}
                            <div className='newsletter__input'>
                            {/* <input type='email' placeholder='Admin Add tour and Delete Tour Here' /> */}
                            <h5>Here is your Way to Check Availability Seats</h5>
                            <button className='btn newsletter__btn' onClick={handelchange}>Control</button>
                            </div>
                            {/* tour review section ends */}
                        </div>
                    </Col>

                    <Col lg='4'>

                        <Booking tour={tour} avgRating={5} />

                    </Col>


                </Row>
              }
            </Container>
        </section>
        <Newsletter/>
        </>
    )
}

export default TourDetails