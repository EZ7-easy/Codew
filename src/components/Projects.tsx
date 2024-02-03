import { Button } from "./ui/button"
import image1 from "../../public/assets/1.png"
import image2 from "../../public/assets/2.png"


const Projects = () => {
  return (
    <div>
        <div className="justify-between flex">
        <div className="ml-[40px]">
            <p className="text-4xl font-bold">Our Projects</p><br/>
            <p className="text-[#a49e9b] text-xl">
                Present placerated agestas egestas cras rhone <br/>
                magna rutrum tellus laoret 
            </p>
        </div>
            <div className="mr-[50px]">
                <Button className="bg-[#f4ece0] p-6 text-[#fc9063]">See More</Button>
            </div>
        </div>
        <div className="px-[100px] py-0">
            <div className="float-left">
                <img src={image1} alt="image1"/>
            </div>    
            <div className="float-right">
                <img src={image2} alt="image2"/>
            </div>    
        </div>
    </div>
  )
}

export default Projects
