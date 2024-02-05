import { Button } from "./ui/button"
import image1 from "../../public/assets/1.png"
import image2 from "../../public/assets/2.png"


const Projects = () => {
  return (
    <div>
        <div className="justify-between flex mt-[100px] xl:mx-[380px] md:mx-[40px]">
        <div className="max-sm:mx-6 ">
            <p className="text-4xl font-bold underline decoration-[#fc9063]">Our Projects</p><br/>
            <p className="text-[#a49e9b] text-xl">
                Present placerated agestas egestas cras rhone <br/>
                magna rutrum tellus laoret 
            </p>
        </div>
            <div className="max-sm:hidden mt-6">
                <Button className="bg-[#f4ece0] p-6 text-[#fc9063]">See More</Button>
            </div>
        </div>
<<<<<<< HEAD
        <div className="grid xl:grid-cols-2 lg:mx-[299px] md:grid-cols-1 max-sm:grid-cols-1 mt-[50px]">
            <div className="items-center m-auto w-[350px] lg:w-[500px] max-sm:mt-5 max-sm:m-auto md:mt-10">
                <img src={image1} alt="image1" className="m-auto"/>
            </div>    
            <div className="items-center m-auto w-[350px] lg:w-[500px] max-sm:mt-5 max-sm:m-auto md:mt-10">
                <img src={image2} alt="image2" className="m-auto"/>
=======
        <div className="grid grid-cols-2 lg:mx-[299px] max-sm:grid-cols-1 mt-[100px]">
            <div className="items-center m-auto w-[350px] max-sm:mt-5 xl:w-[500px] lg:w-[700px] max-sm:m-auto">
                <img src={image1} alt="image1"/>
            </div>    
            <div className="items-center m-auto w-[350px] lg:w-[500px] max-sm:mt-5 max-sm:m-auto ">
                <img src={image2} alt="image2"/>
>>>>>>> 8957cc6572717c1565f0943ed210d590dab16f2a
            </div>    
        </div>
        <div className="lg:hidden flex justify-center md:hidden mt-6">
                <Button className="bg-[#f4ece0] p-6 text-[#fc9063] context-center">See More</Button>
        </div>
    </div>
  )
}

export default Projects
