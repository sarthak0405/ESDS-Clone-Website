import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CountUp from 'react-countup'

const Services = () => {
    return (
        <>
            <Container className='my-5 servicesbg' style={{ width: "100%" }} fluid  >
                <Row>
                    <Col lg={6} md={12} sm={12} className=' my-5 servicetxt animate__animated animate__fadeInLeft'>
                        <h2>Offering Community Cloud Services on Multi-Tenant Model</h2>
                        <Container fluid>
                            <Row>
                                <Col lg={6} md={12} sm={12}>
                                    <CountUp
                                        start={0}
                                        end={200}
                                        duration={2}
                                        className='cnnm'
                                    /><label htmlFor="" style={{ fontSize: "40px" }}>+</label>
                                    <p className='cntxt'>Government/PSUs Users</p>
                                </Col>

                                <Col lg={6} md={12} sm={12}>
                                    <CountUp
                                        start={0}
                                        end={400}
                                        duration={2}
                                        className='cnnm'
                                    /> <label htmlFor="" style={{ fontSize: "40px" }}>+</label>
                                    <p className='cntxt'>Banks Hosting Primary</p>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={6} md={12} sm={12}>
                                    <CountUp
                                        start={0}
                                        end={150}
                                        duration={2}
                                        className='cnnm'
                                    /><label htmlFor="" style={{ fontSize: "40px" }}>+</label>
                                    <p className='cntxt'>Enterprises on SAP HANA CC</p>
                                </Col>

                                <Col lg={6} md={12} sm={12}>
                                    <CountUp
                                        start={0}
                                        end={50}
                                        duration={2}
                                        className='cnnm'
                                    /><label htmlFor="" style={{ fontSize: "40px" }}>+</label>
                                    <p className='cntxt'>E-Commerce, Customers</p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col lg={5} md={12} sm={12} className='my-5 animate__animated animate__fadeInRight'>
                        <iframe className='servicesvid' width="600" height="350" src="https://www.youtube.com/embed/T-2SmjWbCOs?si=9K5LI7LQOxoKl1RE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Services