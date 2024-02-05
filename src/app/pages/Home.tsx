import Banner from "@/components/Banner"
import Feature from "@/components/Feature"
import Footer from "@/components/Footer"
import Future from "@/components/Future"
import Logo from "@/components/Logo"
import Navbar from "@/components/Navbar"
import Newsletter from "@/components/Newsletter"
import Projects from "@/components/Projects"
import Provide from "@/components/Provide"
import Subscribe from "@/components/Subscribe"

const Home = () => {
  return (
    <div>
        <div className="bg-[#f4ece0] h-full">
          <Navbar/>
          <Banner/>
        </div>
        <Logo/>
        <Projects/>
        <Provide/>
        <Future/>
        <Feature/>
        <Subscribe/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home
