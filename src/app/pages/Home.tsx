import Banner from "@/components/Banner"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"

const Home = () => {
  return (
    <div>
        <div className="bg-[#f4ece0] h-full">
          <Navbar/>
          <Banner/>
        </div>
        <Projects/>
    </div>
  )
}

export default Home
