import react, {useState,useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CommonSection from '../shared/CommonSection'
import '../styles/tours.css'
import TourCard from './../shared/TourCard'
import SearchBar from './../shared/SearchBar'
import NewsLetter from './../shared/Newsletter'
import tourData from '../assests/data/tours'
import {Container, Row, Col} from 'reactstrap'
import maleTourist from '../assests/images/male-tourist.png'

import useFetch from './../components/hooks/useFetch'
import { BASE_URL } from '../utils/config'

const Myflights = ()=>{

    const navigate = useNavigate()
    
    const [name,setName] = useState({
        username : ''
    })
    const handelChange = e=>{
        // console.log(name)
        setName(prev=>({...prev,[e.target.id]:e.target.value}))
    }

    const handelsubmit = ()=>{
        navigate(`/api/v1/myflights`,{
                state : {username : name}}
            )
    }

    

    return(
        <>
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className='newsletter__content'>
                            <h2>Subscribe now to get useful training information</h2>
                        </div>

                        <div className='newsletter__input'>
                        <input type='text' placeholder='User Name' id='username' required onChange={handelChange} />
                            <button className='btn newsletter__btn ' onClick={handelsubmit}>Check</button>
                        </div>
                         
                        <p>
                        In this practical MERN stack project tutorial, I'm going to teach you, step-by-step, how to create a full mern stack tours & travels booking website using react js.
                        </p>

                    </Col>
                    <Col lg='6'>
                        <div className='newsletter__img'>
                            <img src={maleTourist} alt='' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default Myflights


