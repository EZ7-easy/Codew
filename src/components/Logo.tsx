import dribbble from '../../public/assets/dribbble.png'
import google from '../../public/assets/google.png'
import amazon from '../../public/assets/amazon.png'
import behance from '../../public/assets/behance.png'
import cocacola from '../../public/assets/cocacola.png'

const Logo = () => {
  return (
    <div className='my-[100px]'>
    <div className='grid xl:grid-cols-5 xl:mx-[350px] xl:m-auto   md:grid-cols-2 md:space-y-[20px]  max-sm:grid-cols-3 max-sm:w-[350px] max-sm:m-auto'>
      <img src={behance} alt="logo"  className='m-auto max-sm:pr-[20px]'/>
      <img src={cocacola} alt="logo" className='m-auto max-sm:pr-[20px]'/>
      <img src={google} alt="logo" className='m-auto max-sm:pl-[10px]'/>
      <img src={dribbble} alt="logo" className='m-auto max-sm:ml-[40px]'/>
      <img src={amazon} alt="logo" className='m-auto max-sm:ml-[60px]'/>
    </div>
    </div>
  )
}

export default Logo