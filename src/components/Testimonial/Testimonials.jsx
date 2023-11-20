import react from 'react'
import Slider from 'react-slick'
import ava01 from '../../assests/images/ava-1.jpg'

const Testimonials = ()=>{
    
    const setting = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipetoSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        responive:[
            {
                breakpoint:992,
                settings:{
                    slidestoShow:2,
                    slidestoScroll:1,
                    infinite:true,
                    dots:true
                },
            },
            {
                breakpoint:576,
                settings:{
                    slidestoShow:1,
                    slidestoScroll:1,
                }
            }
        ]
    }

    return(
        <Slider {...setting}>
            <div className='testimonail py-4 px-3'>
                <p>
                MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based.
                </p>
                <div className='d-flex align-items-center gap-3 mt-3'>
                    <img src={ava01} className='w-25 h-25 rounded-2' alt=''  />
                    <div>
                        <h6 className='mb-0 mt-3'>John Doe</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className='testimonail py-4 px-3'>
                <p>
                MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based.
                </p>
                <div className='d-flex align-items-center gap-3 mt-3'>
                    <img src={ava01} className='w-25 h-25 rounded-2' alt=''  />
                    <div>
                        <h6 className='mb-0 mt-3'>John Doe</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className='testimonail py-4 px-3'>
                <p>
                MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based.
                </p>
                <div className='d-flex align-items-center gap-3 mt-3'>
                    <img src={ava01} className='w-25 h-25 rounded-2' alt=''  />
                    <div>
                        <h6 className='mb-0 mt-3'>John Doe</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>


            <div className='testimonail py-4 px-3'>
                <p>
                MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based.
                </p>
                <div className='d-flex align-items-center gap-3 mt-3'>
                    <img src={ava01} className='w-25 h-25 rounded-2' alt=''  />
                    <div>
                        <h6 className='mb-0 mt-3'>John Doe</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>



        </Slider>
    )
}

export default Testimonials