import react,{useContext} from 'react'
import '../styles/home.css'
import {Container, Row, Col} from 'reactstrap'
import heroImg from '../assests/images/hero-img01.jpg'
import heroImg02 from '../assests/images/hero-img02.jpg'
import heroVideo from '../assests/images/hero-video.mp4'
import worldImg from '../assests/images/world.png'
import experienceImg from '../assests/images/experience.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'
import { AuthContext } from '../components/context/AuthContext'

const Home = ()=>{

    const {user} = useContext(AuthContext)
    // console.log(user.usertype)
    
    return(
        <>
        {/* // Hero Section Start */}
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className='hero__content'>
                        <div className='hero__subtitle d-flex align-items-center'>
                            <Subtitle subtitle={'Know Before You Go'}/>
                            <img src={worldImg} alt=''/>
                        </div>
                        <h1>Travelling Opens the Door to Creating <span className='highlight'>Memories</span></h1>
                        <p>"It seems that the more places I see and experience, the bigger I realize the world to be. The more I become aware of, the more I realize how relatively little I know of it, how many places I have still to go, how much more there is to learn." — Anthony Bourdain</p>
                        
                    </div>
                </Col>
                <Col lg='2'>
                    <div className='hero__img-box'>
                        <img src={heroImg} alt=''/>
                    </div>
                </Col>
                <Col lg='2'>
                    <div className='hero__img-box hero__video-box mt-4'>
                        <video src={heroVideo} alt='' controls/>
                    </div>
                </Col>
                <Col lg='2'>
                    <div className='hero__img-box mt-5'>
                        <img src={heroImg02} alt=''/>
                    </div>
                </Col>
                <SearchBar/>
            </Row>
        </Container>
    </section>
     {/* // Hero Section End */}
    

     <section>
        <Container>
            <Row>
                <Col lg='3'>
                    <h5 className='services__subtitle'>What we Serve </h5>
                    <h2 className='services__title'>We Offer our Best Service</h2>
                </Col>
                <ServiceList/>
            </Row>
        </Container>
     </section> 

    {/* Featured Tour Section Starts  */}

    <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <Subtitle subtitle={'Explore'}/>
                    <h2 className='featured__tour-title'>Our Featured Tours</h2>
                </Col>
                <FeaturedTourList/>
            </Row>
        </Container>
    </section>

    {/* Featured Tour Section Ends  */}

    {/* Experince Sessoin Starts */}
    

    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className='experince__content'>
                        <Subtitle subtitle={'Experience'}/>
                        <h2>With All Our Experience <br/> We WillServe You</h2>
                        <p>
                        Flight Booking Website Design Using ReactJs, Node Js, MongoDB
                        <br/>  Flight Booking Website Design 
                        </p>
                    </div>
                     
                    <div className='counter__wrapper d-flex align-items-center gap-5'>
                        <div className='counter__box'>
                            <span>12k+</span>
                            <h6>Successful Trips</h6>
                        </div>
                        <div className='counter__box'>
                            <span>2k+</span>
                            <h6>Reguler Clients</h6>
                        </div>
                        <div className='counter__box'>
                            <span>15</span>
                            <h6>Years Experience</h6>
                        </div>
                    </div>


                </Col>

                <Col lg='6' className='experience__img'>
                    <img src={experienceImg} alt=''/>
                </Col>


            </Row>
        </Container>
    </section>


    {/* Experince Sessoin Ends */}

    {/* Gallery Session Starts */}


    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Gallery'}/>
                    <h2 className='gallery__title'>Visit Our Customers Tour Gallery</h2>
                </Col>
                <Col lg='12'>
                    <MasonryImagesGallery/>
                </Col>
            </Row>
        </Container>
    </section>

    {/* Gallery Session Ends */}
   
   {/* Testimonial Sessions Starts */}
   <section>
    <Container>
        <Row>
            <Col lg='12'>
                <Subtitle subtitle={'Fans Love'}/>
                <h2 className='testimonial__title'>What our fans say about us</h2>
            </Col>
            <Col lg='12'>
                <Testimonials/>
            </Col>
        </Row>
    </Container>
   </section>
   {/* Testimonial Sessions Starts */}

   <Newsletter/>

     </>
    )
}

export default  Home