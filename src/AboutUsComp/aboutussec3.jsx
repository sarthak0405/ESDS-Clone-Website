import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import s1 from "../Assets/s1.png"
import s2 from "../Assets/s2.png"
import s3 from "../Assets/s3.png"
import s4 from "../Assets/s4.png"
import s5 from "../Assets/s5.png"
import s6 from "../Assets/s6.png"
import s7 from "../Assets/s7.png"
import s8 from "../Assets/s8.png"
import s9 from "../Assets/s9.png"
import s10 from "../Assets/s10.png"
import s11 from "../Assets/s11.png"
import s12 from "../Assets/s12.png"

const Aboutussec3 = () => {
    return (
        <>
            <div className="s3head mt-5"><h1 className='sec3head'>Our Team</h1></div>
            <Container className='p-3 animate__animated animate__fadeIn'>
                <Row>
                    <Col lg={3} md={6} sm={12}>
                        <div className="imgtxt">
                        <img src={s1} width={"300px"} className='photoabout1' alt="" />
                        <div className="s1hover">
                            <p>Piyush Somani</p>
                        </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="imgtxt">
                        <img src={s2} width={"300px"} className='photoabout1' alt="" />
                        <div className="s1hover">
                            <p>Komal Somani</p>
                        </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="imgtxt">
                        <img src={s3} width={"300px"} className='photoabout1' alt="" />
                        <div className="s1hover">
                            <p>Alipt Sharma</p>
                        </div>
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <div className="imgtxt">
                        <img src={s4} width={"300px"} className='photoabout1' alt="" />
                        <div className="s1hover">
                            <p>Lokesh Sharma</p>
                        </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                <Col lg={3} md={6} sm={12}>
                        <div className="imgtxt">
                        <img src={s5} width={"300px"} className='photoabout1' alt="" />
                        <div className="s1hover">
                            <p>Pamela Kumar</p>
                        </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="imgtxt">
                        <img src={s6} width={"300px"} className='photoabout1' alt="" />
                        <div className="s1hover">
                            <p>Dhandapani T.G.</p>
                        </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="imgtxt">
                        <img src={s7} width={"300px"} className='photoabout1' alt="" />
                        <div className="s1hover">
                            <p>Nadukuru Ramaiah</p>
                        </div>
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <div className="imgtxt">
                        <img src={s8} width={"300px"} className='photoabout1' alt="" />
                        <div className="s1hover">
                            <p>Parthsarthy Raghupaty</p>
                        </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                <Col lg={3} md={6} sm={12}>
                        <div className="imgtxt">
                        <img src={s9} width={"300px"} className='photoabout1' alt="" />
                        <div className="s1hover">
                            <p>Sameer Redij</p>
                        </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="imgtxt">
                        <img src={s10} width={"300px"} className='photoabout1' alt="" />
                        <div className="s1hover">
                            <p>Rushikesh Jadhav</p>
                        </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="imgtxt">
                        <img src={s11} width={"300px"} className='photoabout1' alt="" />
                        <div className="s1hover">
                            <p>Deepak Anand</p>
                        </div>
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <div className="imgtxt">
                        <img src={s12} width={"300px"} className='photoabout1' alt="" />
                        <div className="s1hover">
                            <p>Kishore Shah</p>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Aboutussec3