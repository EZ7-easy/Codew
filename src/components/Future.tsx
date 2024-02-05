import features from "../../public/assets/features.png"
import check from "../../public/assets/check.png"

const Future = () => {
  return (
<<<<<<< HEAD
    <div className="my-10 xl:mx-[300px] grid grid-cols-2 max-sm:grid-cols-1 md:mx-[20px]">
=======
    <div className="my-10 xl:mx-[300px] grid grid-cols-2 max-sm:grid-cols-1">
>>>>>>> 8957cc6572717c1565f0943ed210d590dab16f2a
        <div className="max-sm:mx-4 mx-auto my-auto">
            <h1 className="text-4xl font-bold">
                Providing The World's Best <br/>
                <span className="underline decoration-[#F4D3A1]">User Experiences</span>
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
        <img src={features} alt="image" className="max-sm:mt-10 m-auto"/>
    </div> 
  )
}

export default Future