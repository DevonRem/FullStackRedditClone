import './style.css';
import Logo from './Dlogo.png';
import Avatar from './defaultAvatar.png';
import Button from './Button.js';
import {BellIcon, ChatIcon, ChevronDownIcon, PlusIcon, SearchIcon, UserIcon, LoginIcon}from '@heroicons/react/outline';
import { useState, useEffect, useRef, useContext } from 'react';
import AuthModalContext from './AuthModalContext';


function Header() {
    const [userDropdownHidden, setUserDropdownHidden] = useState('hidden');

    function useUserDropdown(ref) {
      useEffect(() => {
        function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
            setUserDropdownHidden('hidden');
          }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [ref]);
      
    }
    const userDropdownRef = useRef(null);
    useUserDropdown(userDropdownRef);
    function toggleUserDropdown() {
      if (userDropdownHidden === 'hidden') {
        setUserDropdownHidden('block');
      }
      else {
        setUserDropdownHidden('hidden');
      }
    }

    const AuthModal = useContext(AuthModalContext);

    return (
        <header className=" w-full bg-redditDark p-2">
        <div className='mx-4 flex relative'>
          <img src={Logo} alt="" className='w-8 h-8 mr-4 mt-1'/>
          <form action='' className='bg-redditDark-brighter p-1 px-3 flex rounded-md border border-redditBorder mx-4 flex-grow'>
          <SearchIcon className="text-gray-300 h-6 w-6 mt-1"/>
          <input type='text' className='bg-redditDark-brighter text-sm p-1 pl-2 pr-0 block focus: outline-none text-white' placeholder='Search'></input>
        </form>

        {/*
        <button className='px-2 py-1'><BellIcon className='text-white w-6 h-6 m-1 mx-2' /></button>
        <button className='px-2 py-1'><ChatIcon className='text-white w-6 h-6 m-1 mx-2' /></button>
        <button className='px-2 py-1'><PlusIcon className='text-white w-6 h-6 m-1 mx-2' /></button>
    */}


        <Button className='mr-3' onClick={() => AuthModal.setShow(true)}>Login</Button>
        <Button className='mx-3' onClick={() => AuthModal.setShow(true)}>Sign up</Button>


        <button className='mt-1 flex rounded-md ml-4 border border-gray-700' onClick={() => toggleUserDropdown()} ref={userDropdownRef}>
          {/*<img src={Avatar} alt="" className='block w-8 h-8'></img>*/}
          <UserIcon className='bg-gray-600 w-8 h-8 text-gray-400 m-1'></UserIcon>
          <ChevronDownIcon className=' text-white w-5 h-5 m-1 mt-2'/>  
          <div onClick={() => AuthModal.setShow(true)}className={'absolute right-0 top-8 bg-redditDark border border-gray-700 z-10 rounded-md text-gray-300 overflow-hidden ' + userDropdownHidden}>
          <div onClick={() => AuthModal.setShow(true)} className='block flex w-50 py-2 px-3 hover:bg-gray-300 hover:text-black'><LoginIcon className='w-6 h-6 mr-2'/>Login / Sign up</div>
          </div>
        </button>

        </div>

      </header>
    );
}

export default Header;