import react from 'react'
import {Card,CardBody} from 'reactstrap'
import {Link} from 'react-router-dom'
import './tour-card.css'
import photos from "../assests/images/tour-img01.jpg";

const TourCard = ({tour})=>{
  
    // const { _id, title, city, price, photo, featured, avgRating, reviews} = tour

    const { _id,Flightname,Boardingpoint,bpAM,abPM,Endingpoint,epAM,epPM,Flightnumber,AddAt,Price} = tour

    return(
        <div className='tour__card'>
            <Card>
                <div className='tour__img'>
                    <img src={photos} alt='tour-img' />
                    <span>Featured</span>
                </div>


                <CardBody>
                <div className='card__top d-flex align-items-center justify-content-between'>
                    <span className='tour__location d-flex align-items-center gap-1'>
                    <i class="ri-map-pin-line"></i> {Endingpoint}
                    </span>
                    <span className='tour__rating d-flex align-items-center gap-1'>
                    <i class="ri-star-fill"></i> {5}{" "}
                    <span>({5})</span>
                    </span>
                </div>

                <h5 className='tour__title'><Link to={`/flights/${_id}`}>{Flightname}</Link></h5>

                <div className='card__bottom d-flex align-items-center justify-content-between mt-3'>
                    <h5>${Price} <span>/per person</span></h5>
                    <button className='btn booking__btn'>
                        <Link to={`/flights/${_id}`}>Book Now</Link>
                    </button>
                </div>

            </CardBody>



            </Card>

            

        </div>
    )
}

export default TourCard