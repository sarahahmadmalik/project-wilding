import React from 'react'
import Hero from '@/Components/Hero/index'
import Navbar from "@/Components/Navbar/index"
import Cards from "@/Components/Cards/index"
import Community from "@/Components/Community/index"
import Quotes from "@/Components/Quotes/index"
import Mission from "@/Components/Mission/index"
import Blogs from "@/Components/Blog/index";
import Member from "@/Components/Member/index"
import Footer from "@/Components/Footer/index"
import Earth from "@/Components/Earth/index"
import Hope from "@/Components/Hope/index"
import Involved from "@/Components/Involved/index"
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