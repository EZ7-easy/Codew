import { Button } from "./ui/button"
import { Input } from "./ui/input"

const Newsletter = () => {

  const onSubmit = () => {
    alert('Thanks For Subscribing')
  }

  return (
    <div className="py-[50px] bg max-sm:mx-2">
        <p className="text-center text-4xl font-bold underline decoration-[#fc9063]">Newsletter Subscription</p>
        <p className="text-[#6B625E] text-xl text-center mt-6">Praesent placerated egestas egestas cras rhone <br/> magna rutrum tellus laoreet</p>
        <div className="flex justify-center  mt-6">
            <Input type="email" placeholder="Enter your email address" className="border-0 rounded-[5px] w-[300px] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"/>
            <Button onClick={onSubmit} className="bg-[#fc9063] p-1 px-3 text-center rounded-[5px] text-white shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">Subscribe</Button>
        </div>
    </div>
  )
}

export default Newsletter