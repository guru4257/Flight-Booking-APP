import react from 'react'
import TourCard from '../../shared/TourCard'
import tourData from '../../assests/data/tours'
import {Col} from 'reactstrap'
import useFetch from '../hooks/useFetch'
import {BASE_URL} from './../../utils/config'




const FeaturedTourList = ()=>{

    const {data : featuredTours, loading, error} = useFetch(
        `${process.env.REACT_APP_URL}/api/v1/tours/search/getfeaturedtours`
    )
    // console.log(featuredTours)

    return(
        <>
        {
            loading && <h4>Loading...</h4>
        }
        {
            error && <h4>{error}...</h4>
        }
        {
        !loading && !error && featuredTours?.map(tour=>(
            <Col lg='3' md="6" sm="6" className='mb-4' key={tour._id}>
                <TourCard tour={tour}/>
            </Col>
        ))
        }
        </>
    )
}

export default FeaturedTourList