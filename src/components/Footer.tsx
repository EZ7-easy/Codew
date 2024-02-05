<<<<<<< HEAD
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
          <li>Home</li>
          <li>About us</li>
          <li>Portfolio</li>
          <li className='max-sm:text-center'>Contact me</li>
          <li className='max-sm:text-center'>Privacy Policy</li>
        </ul>
        <hr className='mt-10 xl:w-[1280px] md:w-[] bg-[#241008] mx-auto'/>
        <div className="grid mx-auto max-w-screen-xl xl:mx-auto md:flex md:items-center md:justify-between md:mx-6 max-sm:hidden">
                <span className="text-xl text-white sm:text-center  dark:text-white max-sm:text-center max-sm:mt-5">Copyright @ Milton Debnath 2020</span>
                <ul className="text-white flex gap-5 mt-10 pb-8 max-sm:mx-auto">
                  <li>
                      <img src={onelogo} alt="logo"/>
                  </li>
                  <li>
                      <img src={twologo} alt="logo"/>
                  </li>
                  <li>
                      <img src={threelogo} alt="logo"/>
                  </li>
                  <li>
                      <img src={fourlogo} alt="logo"/>
                  </li>
                  <li>
                      <img src={fivelogo} alt="logo"/>
                  </li>
                </ul>
        </div>
        <div className="grid mx-auto max-w-screen-xl  md:flex md:items-center md:justify-between md:mx-6 xl:hidden lg:hidden md:hidden  ">
        <ul className="text-white flex gap-5 mt-10 pb-8 max-sm:mx-auto">
                  <li>
                      <img src={onelogo} alt="logo"/>
                  </li>
                  <li>
                      <img src={twologo} alt="logo"/>
                  </li>
                  <li>
                      <img src={threelogo} alt="logo"/>
                  </li>
                  <li>
                      <img src={fourlogo} alt="logo"/>
                  </li>
                  <li>
                      <img src={fivelogo} alt="logo"/>
                  </li>
                </ul>
                <span className="text-xl text-white sm:text-center  dark:text-white max-sm:text-center max-sm:mt-5">Copyright @ Milton Debnath 2020</span>
        </div>
    </div>
=======
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex items-center justify-between">
      <p>Copyright @ Milton Debnath 2020, All rights reserved</p>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-gray-300">Privacy Policy</a>
        <a href="#" className="hover:text-gray-300">Terms of Service</a>
      </div>
    </div>
  </footer>
>>>>>>> 8957cc6572717c1565f0943ed210d590dab16f2a
  )
}

export default Footer