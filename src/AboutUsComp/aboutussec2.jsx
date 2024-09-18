import React from 'react'
import im1 from "../Assets/aboutussec2.jpg"
import { Col, Container, Row, Accordion } from 'react-bootstrap'

const Aboutussec2 = () => {
    return (
        <>
            <Container className='aboutuscon'>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <img src={im1} alt="" width={"550px"} className='aboutusimg animate__animated animate__fadeInLeft'/>
                    </Col>
                    <Col lg={6} md={6} sm={12} className='animate__animated animate__fadeInRight'>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>The Digital Transformation Catalyst</Accordion.Header>
                                <Accordion.Body>
                                ESDS began its operations from Nashik (India) in 2005 and offer our products across diversified industries that include government ministries & companies and corporate entities across sectors such as BFSI, manufacturing, IT and ITES, telecom, real estate, pharmaceuticals, retail and education and in several countries across the APAC region, Europe, Middle East, the Americas and Africa.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>What is eNlight Cloud ?</Accordion.Header>
                                <Accordion.Body>
                                It is state-of-the-art cloud hosting solution with built-in ability to automatically scale CPU and RAMon-demand without any human intervention or downtime. The auto-scalable feature of eNlight hassucceeded in eliminating the downtime which is generally seen as a result of volatile internet traffic.Thus feature also makes eNlight an unsurpassed proposition for Disaster Recovery hosting withcost saving of up to 70%. With unmatched granular transparency delivered through pay-per-consumer billing model, user gets to eliminate cost of unused resources.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Cloud Hosting for various Industry Verticals</Accordion.Header>
                                <Accordion.Body>
                                Cloud hosting is the most innovative cloud computing technologies that allow multiple physical server machines to act as one system. ESDS provides some specific cloud hosting solutions as under-
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>What is eMagic DCIM module in eNlight 360°?</Accordion.Header>
                                <Accordion.Body>
                                eMagic DCIM is a highly integrated and composite solution that provides a single console for management of Data Center operations. It facilitates streamlining of administration process, leading to optimization of functional operations.
                                </Accordion.Body>
                            </Accordion.Item>   
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Aboutussec2