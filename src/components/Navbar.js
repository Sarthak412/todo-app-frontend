import React, {useState} from 'react'

// import { Link } from 'react-scroll';
import {GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';


const Navbar = (props) => {
    
    const [toggle, setToggle] = useState(false);

    const navigate = useNavigate();

  return (
    <nav>
        <div className='sticky top-0 z-50 bg-teal-600 w-full items-center px-5 py-6 shadow-md'>
            <div className='flex text-white cursor-pointer'> 
                    <h1 className='font-semibold mx-auto text-[25px] flex items-center custom-margin text-shadow'> 
                    <a onClick={()=> navigate('/')}>
                        {props.logo}
                    </a>
                   
                    </h1>
                    <ul className='flex items-center mx-auto space-x-5 cursor-pointer text-[18px] lg:flex-row custom_toggle'>
                        <li onClick={()=> navigate('/about')} className='hover:bg-teal-800 p-3'> {props.link_1} </li>
                    </ul>
                <GiHamburgerMenu onClick={() => setToggle(!toggle)} size={25} className='burger-icon cursor-pointer hover:bg-blue-700'/>
                    {toggle && ( 
                    <ul className='flex-column bg-black w-full absolute mt-[49px] mx-[-1px] text-[14px] p-4 space-y-4 shadow-lg cursor-pointer custom_drop'>
                        <li className='hover:bg-gradient-to-t from-blue-900 to-indigo-300 p-3'> {props.link_1} </li>   
                    </ul>
                )}    
            </div>
        </div>
    </nav>
  )
}

export default Navbar;