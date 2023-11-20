import react, {useState,useEffect} from 'react'
import CommonSection from '../shared/CommonSection'
import '../styles/tours.css'
import TourCard from './../shared/TourCard'
import SearchBar from './../shared/SearchBar'
import NewsLetter from './../shared/Newsletter'
import tourData from '../assests/data/tours'
import {Container, Row, Col} from 'reactstrap'
import { useLocation } from 'react-router-dom'

import useFetch from './../components/hooks/useFetch'
import { BASE_URL } from '../utils/config'

const SeatCheck = ()=>{

    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)

    const location = useLocation()
    const id = location.state.id
    console.log(id)

    const {data:tours,loading,error} = useFetch(`${process.env.REACT_APP_URL}/api/v1/flights/seats/${id}`)
    const {data:tourcount} = useFetch(`${process.env.REACT_APP_URL}/api/v1/tours/search/gettourcount`)

    const Array = tours.Array

    let array1 = [10]
    let array2 = [10]
    let array3 = [10]
    let array4 = [10]
    let array5 = [10]
    let array6 = [10]


    for(var i=0;i<10;i++){
        array1.push(i)
    }
    for(var i=10;i<20;i++){
        array2.push(i)
    }
    for(var i=20;i<30;i++){
        array3.push(i)
    }
    for(var i=30;i<40;i++){
        array4.push(i)
    }
    for(var i=40;i<50;i++){
        array5.push(i)
    }
    for(var i=50;i<=60;i++){
        array6.push(i)
    }
    

    console.log(Array)


    useEffect(()=>{
        const pages = Math.ceil(tourcount/8)
        // console.log(pages)
        setPageCount(pages)
        window.scrollTo(0,0)
    },[page,tourcount,tours])

    return(
        <>
        <CommonSection title={'All Tours'}/>
        <section>
            <Container>
                <Row>
                    <SearchBar/>
                </Row>
            </Container>
        </section>

        {/* <section className='pt-0'>
            <Container>
                {loading && <h4 className='text-center pt-5'>Loading.....</h4>}
                {error && <h4 className='text-center pt-5'>Error.....</h4>}
               {
                !loading && !error &&  <Row>
                {
                    tours?.map(tour => (<Col lg='3' key={tour._id} className='mb-4'><TourCard tour={tour}/></Col>)
                )}
                <Col lg='12'>
                    <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
                        {
                            [...Array(pageCount).keys()].map(number=>(
                                <span key={number} onClick={()=>setPage(number)} className={page===number ? 'active__page' : ''}>
                                    {number+1}
                                </span>
                            ))
                        }
                    </div>
                </Col>
            </Row>
               }
            </Container>
        </section> */}
        <section>
        <Col lg='12'>
                    <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
                        {
                            array1?.map(number=>(
                                <span key={number} className={Array?.includes(number) ? 'active__page' : ''}>
                                    {number}
                                </span>
                            ))
                        }
                        
                    </div>
                </Col>
                <Col lg='12'>
                    <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
                        {
                            array2?.map(number=>(
                                <span key={number}   className={Array?.includes(number) ? 'active__page' : ''}>
                                    {number}
                                </span>
                            ))
                        }
                        
                    </div>
                </Col>
                <Col lg='12'>
                    <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
                        {
                            array3?.map(number=>(
                                <span key={number}   className={Array?.includes(number) ? 'active__page' : ''}>
                                    {number}
                                </span>
                            ))
                        }
                        
                    </div>
                </Col>
                <Col lg='12'>
                    <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
                        {
                            array4?.map(number=>(
                                <span key={number}   className={Array?.includes(number) ? 'active__page' : ''}>
                                    {number}
                                </span>
                            ))
                        }
                        
                    </div>
                </Col>
                <Col lg='12'>
                    <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
                        {
                            array5?.map(number=>(
                                <span key={number}   className={Array?.includes(number) ? 'active__page' : ''}>
                                    {number}
                                </span>
                            ))
                        }
                        
                    </div>
                </Col>
                <Col lg='12'>
                    <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
                        {
                            array6?.map(number=>(
                                <span key={number}   className={Array?.includes(number) ? 'active__page' : ''}>
                                    {number}
                                </span>
                            ))
                        }
                        
                    </div>
                </Col>
        </section>
        <NewsLetter/>
        </>
    )
}

export default SeatCheck


