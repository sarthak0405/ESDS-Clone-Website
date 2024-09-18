import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import im1 from "./Assets/logo.png"

const Footer = () => {
  return (
    <>
      <MDBFooter className='text-center mt-5' color='white' style={{backgroundColor:"rgb(16,122,179)"}}>
        <MDBContainer className='p-4'>
          <section className='mb-4'>
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='google' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='instagram' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='github' />
            </MDBBtn>
          </section>

          <section className=''>
            <form action=''>
              <MDBRow className='d-flex justify-content-center'>
                <MDBCol size="auto">
                  <p className='pt-2'>
                    <strong>Get In Touch</strong>
                  </p>
                </MDBCol>

                <MDBCol md='5' start>
                  <MDBInput contrast type='email' label='Email address' className='mb-4' />
                </MDBCol>

                <MDBCol size="auto">
                  <MDBBtn outline color='light' type='submit' className='mb-4'>
                    Join Us
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </section>

          <section className='mb-4'>
            <p>
              1st floor, No 76, 77 & 78(p), New STPI building, Cyber Park, Electronic City Phase-1, Hosur Road ,Bengaluru 560 100
            </p>
          </section>

          <section className=''>
            <MDBRow>
              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Links</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='text-white'>
                      Sitemaps
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Service Level Agreement
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Data Privacy Policy
                    </a>
                  </li>
                </ul>
              </MDBCol>



              <MDBCol lg='6' md='6' className='mb-4 mb-md-0'>
                <img src={im1} width={"150px"} alt="" />
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Links</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='text-white'>
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Billing Policy
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Support
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-white'>
                      Customer Billing
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>

        <div className='text-center text-white p-3' style={{ backgroundColor: '#28292B'  }}>
          © 2024 Copyright:
          <a className='text-white' href='https://www.esds.co.in/'>
            ESDS Software Solution Ltd. All Rights Reserved.
          </a>
        </div>
      </MDBFooter>
    </>
  )
}

export default Footer