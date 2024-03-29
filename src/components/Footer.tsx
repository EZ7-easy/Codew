import footerlogo from '../../public/assets/footerlogo.png'
import  onelogo from '../../public/assets/onelogo.png'
import  twologo from '../../public/assets/twologo.png'
import  threelogo from '../../public/assets/threelogo.png'
import  fourlogo from '../../public/assets/fourlogo.png'
import  fivelogo from '../../public/assets/fivelogo.png'


const Footer = () => {
  return (
    <div className='mt-10 py-11 bg-stone-900'>
        <img src={footerlogo} alt='logo' className='m-auto'/>
        <ul className='grid text-white text-2xl max-sm:text-lg xl:grid-cols-5 xl:mx-[500px] mt-8 max-sm:grid-cols-3 max-sm:mr-6 max-sm:ml-[50px] md:grid-cols-5 md:mx-6  '>
          <a href='/'><li>Home</li></a>
          <li>About us</li>
          <li>Portfolio</li>
          <li className='max-sm:text-center'>Contact me</li>
          <li className='max-sm:text-center'>Privacy Policy</li>
        </ul>
        <hr className='mt-10 xl:w-[1280px] md:w-[] bg-[#241008] mx-auto'/>
        <div className="grid mx-auto max-w-screen-xl xl:mx-auto md:flex md:items-center md:justify-between md:mx-6 max-sm:hidden">
                <span className="text-xl text-white sm:text-center  dark:text-white max-sm:text-center max-sm:mt-5">Copyright @ Milton Debnath 2020</span>
                <ul className="text-white flex gap-5 mt-10 pb-8 max-sm:mx-auto">
                  <a href='https://www.facebook.com'><li><img src={onelogo} alt="logo"/></li></a>
                  <a href='https://www.twitter.com'><li><img src={twologo} alt="logo"/></li></a>
                  <a href='https://google.com'><li><img src={threelogo} alt="logo"/></li></a>
                  <a href='https://www.linkedin.com'><li><img src={fourlogo} alt="logo"/></li></a>
                  <a href='https://www.instagram.com'><li><img src={fivelogo} alt="logo"/></li></a>
                </ul>
        </div>
        <div className="grid mx-auto max-w-screen-xl  md:flex md:items-center md:justify-between md:mx-6 xl:hidden lg:hidden md:hidden  ">
        <ul className="text-white flex gap-5 mt-10 pb-8 max-sm:mx-auto">
                  <a href='https://www.facebook.com'><li><img src={onelogo} alt="logo"/></li></a>
                  <a href='https://www.twitter.com'><li><img src={twologo} alt="logo"/></li></a>
                  <a href='https://google.com'><li><img src={threelogo} alt="logo"/></li></a>
                  <a href='https://www.linkedin.com'><li><img src={fourlogo} alt="logo"/></li></a>
                  <a href='https://www.instagram.com'><li><img src={fivelogo} alt="logo"/></li></a>
                </ul>
                <span className="text-xl text-white sm:text-center  dark:text-white max-sm:text-center max-sm:mt-5">Copyright @ Milton Debnath 2020</span>
        </div>
    </div>

  )
}

export default Footer