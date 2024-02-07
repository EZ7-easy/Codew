import photo1 from '../../public/assets/bolton.png'
import photo2 from '../../public/assets/brook.png'


import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Subscribe = () => {
  return (
    <>
        <div className="block mx-[10%]">
            <p className="text-4xl font-bold underline decoration-[#fc9063]">Customers Feedback</p><br/>
            <p className="text-[#a49e9b] text-xl">
                Present placerated agestas egestas cras rhone <br/>
                magna rutrum tellus laoret 
            </p>
        </div>

    <Carousel className="max-w-[80%] mx-[10%] mt-10">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card>
                <CardContent className="lg:flex max-h-full lg:justify-between">
                  <img src={photo1} alt='photo' className='lg:w-[40%] max-sm:w-full'/>
                  <img src={photo2} alt='photo' className='lg:w-[40%] max-sm:w-full'/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='w-10 h-10 border-none bg-[#FF733B]'/>
      <CarouselNext className='w-10 h-10 border-none bg-[#FF733B]' />
    </Carousel>
    </>
    
  )
}

export default Subscribe