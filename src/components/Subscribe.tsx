import arrow from "../../public/assets/arrow.png"
import bolton from "../../public/assets/bolton.png"
import brook from "../../public/assets/brook.png"

const Subscribe = () => {
  return (
    <div>
        <div className="justify-between flex mt-[100px] xl:mx-[320px] md:mx-[40px]">
            <div className="max-sm:mx-6 ">
                <p className="text-4xl font-bold underline decoration-[#fc9063]">Customers Feedback</p><br/>
                    <p className="text-[#a49e9b] text-xl">
                        Present placerated agestas egestas cras rhone <br/>
                        magna rutrum tellus laoret 
                    </p>
            </div>
                <img src={arrow} alt="arrow" className="w-[100px] h-[40px] mt-11 max-sm:hidden"/>
        </div>  

        <div className="my-10 xl:mx-[250px] grid grid-cols-2 max-sm:grid-cols-1">
            <img src={bolton} alt="image" className="m-auto"/>
            <img src={brook} alt="image" className="m-auto"/>
        </div>

    </div>
  )
}

export default Subscribe