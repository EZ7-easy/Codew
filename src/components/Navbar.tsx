import logo from '../../public/assets/logo.png'
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };
  return (
    <div className='flex bg-[#f4ece0] justify-between items-center h-28 max-w-[1620px] mx-auto px-4 xl:mx-[10%]'>
    <img src={logo} alt='logo' className='cursor-pointer'/>
      <ul className='hidden md:flex  lg:space-x-5 space-x-0'>
        <a href='/'><li className='p-4 text-[#6B625E] cursor-pointer text-xl font-bold hover:text-black'>Home</li></a>
        <li className='p-4 text-[#6B625E] cursor-pointer text-xl font-bold hover:text-black'>Services</li>
        <li className='p-4 text-[#6B625E] cursor-pointer text-xl font-bold hover:text-black'>Projects</li>
        <li className='p-4 text-[#6B625E] cursor-pointer text-xl font-bold hover:text-black'>Blog</li>
        <li className='p-4 text-[#6B625E] cursor-pointer text-xl font-bold hover:text-black'>About</li>
        <button className=' px-[35px] py-[10px] bg-[#FF733B] rounded-md text-white text-xl  md:hidden'>Contact</button>
      </ul>
      <div onClick={handleNav} className='block md:hidden max-[780px]:visible'>
          {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full  bg-white  ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <img src={logo} alt='logo' className='mt-7 ml-3 cursor-pointer mb-[50px]'/>
          <li className='p-4 text-[#6B625E] cursor-pointer text-xl font-bold hover:text-black'>Home</li>
          <li className='p-4 text-[#6B625E] cursor-pointer text-xl font-bold hover:text-black'>Our services</li>
          <li className='p-4 text-[#6B625E] cursor-pointer text-xl font-bold hover:text-black'>Projects</li>
          <li className='p-4 text-[#6B625E] cursor-pointer text-xl font-bold hover:text-black'>Blog</li>
          <li className='p-4 text-[#6B625E] cursor-pointer text-xl font-bold hover:text-black'>About</li>
          <button className='min-[768px]:hidden px-[35px] py-[10px] bg-[#FF733B] rounded-md ml-4 text-white text-xl font-bold'>Contact</button>
      </ul>
    </div>
  )
}

export default Navbar