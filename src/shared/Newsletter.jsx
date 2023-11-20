import react from 'react'
import './newsletter.css'
import { Container,Row,Col } from 'reactstrap'
import maleTourist from '../assests/images/male-tourist.png'


const Newsletter = ()=>{
    return(
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className='newsletter__content'>
                            <h2>Subscribe now to get useful training information</h2>
                        </div>

                        <div className='newsletter__input'>
                            <input type='email' placeholder='Enter Your Email Here' />
                            <button className='btn newsletter__btn '>Subscribe</button>
                        </div>
                         
                        <p>
                        MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based.(Note : The subscription module is in developing mode - Sanjai Ragul Murugesan)
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
    )
}

export default Newsletter