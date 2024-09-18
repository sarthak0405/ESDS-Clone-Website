import React from 'react'

import serviceim from "../Assets/servicebg.png"
import { Col, Container, Row } from 'react-bootstrap'

const Contactheader = () => {
    return (
        <>
            <div>
                <img src={serviceim} alt="" className='serviceim' />

            </div>
            <Container fluid>
                <Row>
                    <Col lg = {12} md={12} sm={12}>

                        <div className='servicehead'>
                            <h1 className='servicehead1'>Contact Us </h1>
                        </div>
                        <div className='servicepara'>
                            <p className='servicepara1'>Join With ESDS</p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Contactheader