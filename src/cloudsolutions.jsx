import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import cloudimg from "./Assets/cloudsolutions (1).jpg"

const Cloudsolutions = () => {
    return (
        <>
            <Container fluid className='mt-5'>
                <Row>
                    <Col lg={5} md={12} sm={12} style={{display:"flex",justifyContent:"center"}}>
                        <img src={cloudimg} alt="" width={"500px"} className='whyusimg animate__animated animate__fadeInLeft' />
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <div className="sec2txt animate__animated animate__fadeInRight">
                            <h2 style={{ color: "rgb(65,150,204)" }}>Why ESDS</h2>
                            <p style={{fontSize:"18px"}}>Having been named "India's preferred" cloud services provider, we help businesses grow by transforming processes and providing advanced solutions. As an innovator of Patented Cloud platforms and Community Clouds, ESDS continually develops technologies that transform traditional IT methods and deliver substantial business value.</p>
                            <p style={{fontSize:"18px"}}>Our reliable managed services have captured credibility from prominent Government organizations, Financial institutions, and major enterprises. Assuring our customers of our ability to perform, our certified support professionals resolve minute service concerns through a proactive approach.</p>
                            <p style={{fontSize:"18px"}}>It is essential to deploy security and control policies for a secure Cloud environment, and our Security Insight Services gives organizations the capabilities to design and implement their customized security strategies. Protect a website’s authority with VTMScan that detects malware and vulnerabilities to notifies through detailed reports for appropriate actions.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Cloudsolutions