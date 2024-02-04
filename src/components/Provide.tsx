import { Button } from "./ui/button"
import app from "../../public/assets/app.png"
import design from "../../public/assets/design.png"
import web from "../../public/assets/web.png"

const Provide = () => {
  return (
    <div>
        <div className="justify-between flex mt-[100px] xl:mx-[380px] md:mx-[40px]">
            <div className="max-sm:mx-6 ">
                <p className="text-4xl font-bold underline decoration-[#fc9063]">What We Provide</p><br/>
                    <p className="text-[#a49e9b] text-xl">
                        Present placerated agestas egestas cras rhone <br/>
                        magna rutrum tellus laoret 
                    </p>
            </div>
                <div className="max-sm:hidden mt-6">
                    <Button className="bg-[#f4ece0] p-6 text-[#fc9063]">See More</Button>
                </div>
                </div>        
    <section id="products" className="max-container max-sm:mt-12">            
      <div className="mt-16 ml-212 grid xl:grid-cols-3 xl:mx-[370px] lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 sm:gap-4 gap-14">
        <img src={app} alt="icon" className="m-auto"/>
        <img src={design} alt="icon" className="m-auto"/>
        <img src={web} alt="icon" className="m-auto"/>
      </div>
      <div className="mt-6 flex justify-center xl:hidden lg:hidden md:hidden">
                    <Button className="bg-[#f4ece0] p-6 text-[#fc9063]">See More</Button>
                </div>
    </section>

             
    </div>
  )
}

export default Provide