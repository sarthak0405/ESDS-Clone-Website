import React from 'react'
import Home from '../home'
import Whyus from '../whyus'
import Services from '../services'
import Cloudsolutions from '../cloudsolutions'
import Servicesec3 from '../ServicePgComponents/servicesec3'
// import Whatsapp from '../whatsapp'

const Homepage = () => {
  return (
    <>
        <Home/>
        <Whyus/>
        <Services/>
        <Cloudsolutions/>
        <Servicesec3/>
        {/* <Whatsapp/> */}
    </>
  )
}

export default Homepage