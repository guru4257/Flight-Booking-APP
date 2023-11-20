import react,{useEffect, useRef, useState} from 'react'
import '../styles/tour-details.css'
import {Container, Row, Col, Form, ListGroup} from 'reactstrap'
import {useFetcher, useParams} from 'react-router-dom'
import tourData from '../assests/data/tours'
import avatar from '../assests/images/avatar.jpg'
// import Booking from '../components/Booking/Booking'
import Adding from '../components/Adding/addding'
import Newsletter from '../shared/Newsletter'
import useFetch from '../components/hooks/useFetch'
import {BASE_URL} from './../utils/config'
import photos from "../assests/images/tour-img01.jpg";

const ControlPanel = ()=>{

    // const {id} = useParams()
    const id  = '64683e31e46702e750be84f1'
    const reviewMsgRef = useRef('')


    // const {data:tour,loading,error} = useFetch(`${BASE_URL}/api/v1/tours/${id}`)
    // const {title, desc, price, reviews, city, distance, address} = tour

    const desc = 'this is a desc'
    const maxGroupSize = 60
    const avgRating = 5


    // format data
    const options = {day : 'numeric', month : 'long',year : 'numeric', }


    useEffect(()=>{
        window.scrollTo(0,0)
    },[])


    return(
        <>
        <section>
            <Container>
                 <Row>
                    <Col lg='8'>
                        <div className='tour__content'>
                            <img src={photos} alt='' />
                            <div className='tour__info'>
                                <h2>Hey Admin, Add an another Flight</h2>
                                <div className='d-flex align-items-center gap-5'>
                                    <span className='tour__rating d-flex align-items-center gap-1'>
                                    <i class="ri-star-fill" style={{color: "var(--secondary-color)"}}></i> {avgRating}{" "}
                                    <span>({5})</span>
                                    </span>

                                </div>

                                   <div className='tour__extra-details'>
                                       <span>
                                       <i class="ri-map-pin-2-line"></i> Travel World - Over the Air
                                       </span>
                                       <span>
                                       <i class="ri-money-dollar-circle-line"></i> $10 Service charge  per person
                                       </span>
                                       <span>
                                       <i class="ri-group-line"></i> {maxGroupSize} people
                                       </span>
                                   </div>


                                   <h5>Description</h5>
                                   <p>{desc}</p>

                            </div>
                            {/* tour review section starts */}
                            {/* <div className='tour__reviews mt-4'> */}
                                {/* <h4>Reviews ({reviews.length} reviews)</h4> */}
                                  {/* <h4>Reviews ( reviews)</h4>
                                <Form onSubmit={submitHandler}>
                                    <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                                        <span>1<i class="ri-star-s-fill"></i></span>
                                        <span>2<i class="ri-star-s-fill"></i></span>
                                        <span>3<i class="ri-star-s-fill"></i></span>
                                        <span>4<i class="ri-star-s-fill"></i></span>
                                        <span>5<i class="ri-star-s-fill"></i></span>
                                    </div>
                                    <div className='review__input'>
                                        <input type='text' ref={reviewMsgRef} placeholder='share your thoughts' required/>
                                        <button className='btn primary__btn text-white' type='submit'>
                                            Submit
                                        </button>
                                    </div>
                                </Form> */}
 
                                {/* <ListGroup className='user__reviews'>
                                    {/* {
                                        reviews?.map(review=>(
                                            <div className='review__item'>
                                                <img src={avatar} alt=''/>
                                                <div className='w-100'>
                                                    <div className='d-flex align-items-center justify-content-between'>
                                                        <div>
                                                            <h5>Muhib</h5>
                                                            <p>
                                                                {new Date('01-18-2023').toLocaleDateString('en-Us',options)}
                                                            </p>
                                                        </div>
                                                    <span className='d-flex align-items-center'>
                                                        5<i class="ri-star-s-fill"></i>
                                                    </span>
                                                    </div>
                                                    <h6>Amazing Tour</h6>
                                                </div>
                                            </div>
                                        ))
                                    } */}
                                {/* </ListGroup> */} 

                            {/* </div> */}
                            {/* tour review section ends */}
                        </div>
                    </Col>

                    <Col lg='4'>

                        <Adding />

                    </Col>


                </Row>
              {/* } */}
            </Container>
        </section>
        <Newsletter/>
        </>
    )
}

export default ControlPanel