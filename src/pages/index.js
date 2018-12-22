import React from "react"
import Home from "../components/home"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'




const index = () => {
    return ( <div style={{ color: `purple`, fontFamily: 'Ubuntu', fontSize: '20px'}}>
            <Navbar />
            <Home />
            <Footer />
            </div>)
}

export default index