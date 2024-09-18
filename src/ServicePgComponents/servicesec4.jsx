import React from 'react'
import Slider from "react-slick";
import { Container, Row, Col} from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import s41 from "../Assets/1.png"
import s42 from "../Assets/2.png"
import s43 from "../Assets/3.png"

const Servicesec4 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <Container className='my-5'>
                <Row>
                    <Col lg={6} md={6} sm={12} className='animate__animated animate__fadeInLeft'>
                        <ul>
                           
                           <li style={{fontSize:"17px"}}>Apart from the best of infrastructure for your servers, we give you Exuberant Server Support which most of all, lets you breathe easy.</li>
                            <li style={{fontSize:"17px"}}>Enthusiastic Colo Teams look after your physical machine minute-by-minute.</li>
                            <li style={{fontSize:"17px"}}>Your servers, along with ours, are powered and backed up on high-speed redundant infrastructure composed of speedy network and secure storage, giving you the confidence of thinking different for your own business.</li>
                            <li style={{fontSize:"17px"}}>ESDS's Master Co-location eventually reduces your CAPEX, You're absolutely stress-free now.</li>
                            <li style={{fontSize:"17px"}}>Get the Remote Control of your co-located machine, through KVM-IP or terminal access.</li>
                            <li style={{fontSize:"17px"}}>Co-lo the smarter way instead, with ample infra and technology, to host hardware and more.</li>
                           
                        </ul>
                    </Col>

                    <Col lg={6} md={6} sm={12} className='animate__animated animate__fadeInRight'>
                        <Slider {...settings}>
                            <div>
                                <img src={s41} alt="" height={"300px"} className='sec4img'/>
                            </div>
                            <div>
                                <img src={s42} alt="" height={"300px"} className='sec4img'/>
                            </div>
                            <div>
                                <img src={s43} alt="" height={"300px"} className='sec4img'/>
                            </div>

                        </Slider>

                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Servicesec4