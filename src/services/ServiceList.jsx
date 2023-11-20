import react from 'react'
import ServiceCard from './ServiceCard'
import {Col} from 'reactstrap'
import weatherImg from '../assests/images/weather.png'
import guideImg from '../assests/images/guide.png'
import customizationImg from '../assests/images/customization.png'

const servicesData = [
    {
        imgUrl : weatherImg,
        title : "Calculate Total Cost",
        desc : "Travel makes one modest. You see what a tiny place you occupy in the world."
    },
    {
        imgUrl : guideImg,
        title : "Best Flight Guide",
        desc : "Travel makes one modest. You see what a tiny place you occupy in the world."
    },
    {
        imgUrl : customizationImg,
        title : "Best Offers",
        desc : "Travel makes one modest. You see what a tiny place you occupy in the world."
    }
]

const ServiceList = ()=>{
    return(
        <>
        {
            servicesData.map((item,index)=>(
                <Col lg='3' md="6" sm="12" className="mb-4" key={index}>
                    <ServiceCard item={item}/>
                </Col>
            ))
        }
        </>
    )
}

export default ServiceList