import React from "react"
import Home from "../components/home"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Layout from '../components/layout'




const index = () => {
    return ( <Layout><div style={{ color: `purple`, fontFamily: 'Ubuntu', fontSize: '20px'}}>
            <Navbar />
            <Home/>
            <Footer />
            </div></Layout>)
}

export default index