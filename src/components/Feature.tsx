import check from "../../public/assets/check.png";
import feature1 from "../../public/assets/feature1.png";

const Feature = () => {
  return (
    <div className="my-10 xl:mx-[300px] grid grid-cols-2 max-sm:grid-cols-1 md:mx-[20px]">
        <img src={feature1} alt="image" className="max-sm:mt-10 m-auto"/>
    <div className="max-sm:mx-4 mx-auto my-auto">
        <h1 className="text-4xl font-bold">
            Explore Your Best Ideas<br/>
            <span className="underline decoration-[#F4D3A1]">On A Whiteboard</span>
        </h1>
            <p className="mt-10 font-normal text-[87807D]"> 
                Vestibulum blandit ut nunc vel bibendum semper elit eget <br/>
                dignissim rhoncus, nisl augue lacinia urna vel rutrum nisi <br/> 
                nunc sit amet risus nulla ornare egestas.
            </p>
        <p className="flex mt-8">
            <img src={check} alt="check"/>
                Blandit ut nunc vel bibendum semper elit
        </p>
            <p className="mt-4 flex">
                <img src={check} alt="check"/>
                    Blandit ut nunc vel bibendum 
            </p>
        </div>
    </div> 
  )
}

export default Feature