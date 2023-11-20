import react,{useState} from 'react'
import CommonSection from './../shared/CommonSection'
import {Container,Row,Col} from 'reactstrap'
import TourCard from './../shared/TourCard'
import Newsletter from './../shared/Newsletter'
import { useLocation } from 'react-router-dom'


const SearchResultList = ()=>{

    const location = useLocation()

    const [data] = useState(location.state)

    console.log(data)


    return(
        <>
        <CommonSection title={'Tour Search Result'}/>
        <section>
            <Container>
                <Row>
                    {
                        data.length===0 ? ( <h4>No Tours Found</h4> )  : ( data ?.map(tour=> (<Col><TourCard tour={tour}/></Col>))
                    )}
                </Row>
            </Container>
        </section>
        <Newsletter/>
        </>
    )
}

export default SearchResultList