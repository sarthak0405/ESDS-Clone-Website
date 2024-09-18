import React from 'react'
import im from "../Assets/serviceimg2.png"
import { Col, Container, Row } from 'react-bootstrap'

const Servicesec2 = () => {
  return (
    <>
        <Container className=''>
            <Row>
                <Col lg = {6} md = {6} sm = {12} style={{display:"flex" , justifyContent:"center"}}>
                    <img src={im} alt="" width="550px" className='mt-3 sec2img animate__animated animate__fadeInLeft'/>
                </Col>
                <Col lg = {6} md = {6} sm = {12} className='mt-3 animate__animated animate__fadeInRight'>
                    <h1 className='sec2head'>ESDS Smart City Community Cloud</h1>
                    <p className='sec2para'>Smart Cities are exciting places to live which encompasses technology that offers improved quality of life and boost economical development. To shape future cities, the development authorities need to focus on fitting technologies. Recognizing the IT challenges such as legacy infrastructure, data security, and device connectivity, will help the authorities embark on the Cloud journey due to it’s amazing capabilities. Indian Smart Cities are accelerating economic and social growth on ESDS Smart City Community Cloud. This Cloud platform is an incredible foundation to build smart infrastructure and run citizen-centric applications. Development Authorities can integrate Internet of Things (IoT) devices and Smart solutions on our Smart City Community Cloud to seamlessly create an environment that is robust and secure. Our remarkable Cloud platform gives Smart Cities the ability to process citizen’s data and use it for enhanced decision-making that improves everyday life.</p>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Servicesec2