import Hero from '@/Components/Hero/index'
import Navbar from "@/Components/Navbar/index"
import Member from "@/Components/Member/index"
import Footer from "@/Components/Footer/index"
import AboutCards from '@/Components/about-cards/AboutCards'
import Project from '@/Components/about-cards/Project'
import Values from '@/Components/about-cards/Values'
import Team from '@/Components/about-cards/Team'
import Involved from '@/Components/about-cards/Involved'

const index = () => {
    return (
        <div>
            <Navbar />
            <Hero heading={"About us"} description={"We’re working hard for our planet"} />
            <AboutCards/>
            <Project/>
            <Values/>
            <Team/>
            <Involved/>
            <Member />
            <Footer />
        </div>
    )
}

export default index