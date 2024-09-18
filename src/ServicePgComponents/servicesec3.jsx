import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import im1 from "../Assets/sec3im1.png"
import im2 from "../Assets/sec3im2.png"
import im3 from "../Assets/sec3im3.png"
const Servicesec3 = () => {
    return (
        <>
            <div className="s3head mt-5 animate__animated animate__fadeIn"><h1 className='sec3head'>With a Full-Proof Redundant Infrastructure, a Premium Service Guarantee for You - On Demand</h1></div>
            <Container className='mt-3 animate__animated animate__fadeInUp'>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={im1} className='sec3img' />
                            <Card.Body>
                                <Card.Title className='text-center'>Infrastructure</Card.Title>
                                <Card.Text className='crdcon'>
                                    <ul>
                                        <li>Tier 3 Indian Data Centers with N+1 Redundancy</li>
                                        <li>Good Storage with Quarter, Half, or Full Racks</li>
                                        <li>Upgradable Rack Space up to 42U</li>
                                        <li>High Power Substation</li>
                                        <li>Direct expansion (DX) based Precision Air Conditioners (PAC) with PAC unit pumps</li>
                                        <li>FM200 fire suppression extinguishment system for Fire Safety</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={im2} className='sec3img' />
                            <Card.Body>
                                <Card.Title className='text-center'>Built-in Services</Card.Title>
                                <Card.Text className='crdcon'>
                                    <ul>
                                        <li>99.995% Uptime</li>
                                        <li>Zero-cost Setups and Reboots</li>
                                        <li>Proactive Monitoring and Support</li>
                                        <li>High Data transfer</li>
                                        <li>Dedicated IPs</li>
                                        <li>Advisory Words from our Technical Experts – Review and Recommendation for Server Performance</li>
                                        <li>Server Hardening</li>
                                        <li>24x7x365 Exuberant Support</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={im3} className='sec3img' />
                            <Card.Body>
                                <Card.Title className='text-center'>Exclusive Services – On Demand</Card.Title>
                                <Card.Text className='crdcon'>
                                    <ul>
                                        <li>Remote Controls of OS and hardware, through KVM-IP or terminal access</li>
                                        <li>eMagic Portal Access for On click server management</li>
                                        <li>Master Guidance for Secondary or Tertiary Level Technical Queries for Business Flourishing</li>
                                        <li>Rapid Back-Ups</li>
                                        <li>Dedicated Private Network</li>
                                        <li>Free Reboots and Setups</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Servicesec3