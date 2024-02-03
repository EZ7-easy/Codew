import Group from "../../public/assets/Group.png"
import { Button } from "./ui/button"

const Banner = () => {
  return (
    <div className="bg-[#f4ece0] pb-[100px]">
        <div className="my-[150px] flex flex-col items-center">
            <p className="text-center text-7xl font-bold">
                We Build <span className="bg-[#f4d3a1] pr-2 pl-2">Digital</span> Product <br/>
                For Your Success
            </p>
            <div className="space-x-3  mt-[50px] max-[281px]:justify-center max-[281px]:flex max-[281px]:flex-col">
                <Button className="bg-[#FF733B] border rounded text-lg p-8">Get Started</Button>
                <Button className="bg-[#f4d3a1] border rounded text-lg p-8 text-center text-[#FF733B] max-sm:mt-3">Watch Demo</Button>
            </div>
        </div>
        <img src={Group} alt="banner" className="m-auto"/>
    </div>
  )
}

export default Banner
