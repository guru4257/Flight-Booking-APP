import react, {useState,useEffect} from 'react'
import CommonSection from '../shared/CommonSection'
import '../styles/tours.css'
import TourCard from './../shared/TourCard'
import SearchBar from './../shared/SearchBar'
import NewsLetter from './../shared/Newsletter'
import tourData from '../assests/data/tours'
import {Container, Row, Col} from 'reactstrap'

import useFetch from './../components/hooks/useFetch'
import { BASE_URL } from '../utils/config'

const Tours = ()=>{

    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)

    const {data:tours,loading,error} = useFetch(`${process.env.REACT_APP_URL}/api/v1/flights?page=${page}`)
    const {data:tourcount} = useFetch(`${process.env.REACT_APP_URL}/api/v1/tours/search/gettourcount`)


    useEffect(()=>{
        const pages = Math.ceil(tourcount/8)
        // console.log(pages)
        setPageCount(pages)
        window.scrollTo(0,0)
    },[page,tourcount,tours])

    // console.log(Flights)

    return(
        <>
        <CommonSection title={'All Flights'}/>
        <section>
            <Container>
                <Row>
                    <SearchBar/>
                </Row>
            </Container>
        </section>

        <section className='pt-0'>
            <Container>
                {loading && <h4 className='text-center pt-5'>Loading.....</h4>}
                {error && <h4 className='text-center pt-5'>Error.....</h4>}
               {
                !loading && !error &&  <Row>
                {
                    tours?.map(tour => (<Col lg='3' md="6" sm="6" key={tour._id} className='mb-4'><TourCard tour={tour}/></Col>)
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
        </section>
        <NewsLetter/>
        </>
    )
}

export default Tours


