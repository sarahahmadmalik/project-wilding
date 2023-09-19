import React from 'react'
import Hero from '@/Components/Hero/index'
import Navbar from "@/Components/Navbar/index"
import Member from "@/Components/Member/index"
import Footer from "@/Components/Footer/index"

import Form from "@/Components/Form/index"
const index = () => {
    return (
        <div>
            <Navbar />
            <Hero heading={"Contact us"} description={"Contact us using the contact form below"} />
            <Form />
            <Member />
            <Footer />
        </div>
    )
}

export default index