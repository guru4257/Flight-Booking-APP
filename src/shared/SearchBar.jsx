import react,{useRef} from 'react'
import './search-bar.css'
import {Col, Form, FormGroup} from 'reactstrap'
import {BASE_URL} from './../utils/config.js'
import { useNavigate } from 'react-router-dom'

const SearchBar = ()=>{

    const location1Ref = useRef('')
    const locationRef = useRef('')
    const dateRef = useRef(0)
    const timeRef = useRef(0)
    const navigate = useNavigate()
 
    const searchHandler = async()=>{
        const bdpoint = location1Ref.current.value
        const location = locationRef.current.value
        const date = dateRef.current.value
        const time = timeRef.current.value

        if(location==='' || date==='' ){
            return alert('You Must Fill All the Fields')
        }
        
        const res = await fetch(`${process.env.REACT_APP_URL}/api/v1/flights/search/getflightsbysearch?city=${location}&bdpoint=${bdpoint}&date=${date}&time=${time}`)

        if(!res.ok){
            alert('Something Went Wrong')
        }

        const result = await res.json()
        console.log(res)

        navigate(`/tours/search/?city=${location}&date=${date}&time=${time}`,{state:result.Data}) // need to wrk

    }



    return(
        <Col lg='12'>
            <div className='search__bar'>
                <Form className='d-flex align-items-center gap-4'>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                        <span>
                        <i class="ri-map-pin-line"></i>
                        </span>
                        <div>
                            <h6>Boarding Point</h6>
                            <input type='text' placeholder='Current Location' ref={location1Ref} />
                        </div>
                    </FormGroup>

                    <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                        <span>
                        <i class="ri-map-pin-line"></i>
                        </span>
                        <div>
                            <h6>Reaching Point</h6>
                            <input type='text' placeholder='Where are you going?' ref={locationRef} />
                        </div>
                    </FormGroup>

                    <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                        <span>
                        <i class="ri-map-pin-time-line"></i>
                        </span>
                        <div>
                            <h6>Date</h6>
                            <input type='date' placeholder='Date' ref={dateRef}/>
                        </div>
                    </FormGroup>

                    {/* <FormGroup className='d-flex gap-3 form__group form__group-last'>
                        <span>
                        <i class="ri-group-line"></i>
                        </span>
                        <div>
                            <h6>Time(AM)</h6>
                            <input type='number' placeholder=' choose only AM (or)' ref={timeRef} />
                        </div>
                        <span>
                        <i class="ri-group-line"></i>
                        </span>
                        <div>
                            <h6>Time(PM)</h6>
                            <input type='number' placeholder='choose only PM' ref={timeRef} />
                        </div>
                    </FormGroup> */}

                    <span className='search__icon' type='submit' onClick={searchHandler}>
                    <i class="ri-search-line"></i>
                    </span>
                </Form>
            </div>
        </Col>
    )
}

export default SearchBar