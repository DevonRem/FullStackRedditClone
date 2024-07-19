import './style.css';
import Logo from './Dlogo.png';
import Avatar from './defaultAvatar.png';
import {BellIcon, ChatIcon, ChevronDownIcon, PlusIcon, SearchIcon}from '@heroicons/react/outline';

function Header() {
    return (
        <header className=" w-full bg-redditDark p-2">
        <div className='mx-4 flex'>
          <img src={Logo} alt="" className='w-8 h-8 mr-4 mt-1'/>
          <form action='' className='bg-redditDark-brighter p-1 px-3 flex rounded-md border border-redditBorder mx-4 flex-grow'>
          <SearchIcon className="text-gray-300 h-6 w-6 mt-1"/>
          <input type='text' className='bg-redditDark-brighter text-sm p-1 pl-2 pr-0 block focus: outline-none text-white' placeholder='Search'></input>
        </form>

        <button className='px-2 py-1'><BellIcon className='text-white w-6 h-6 m-1 mx-2' /></button>
        <button className='px-2 py-1'><ChatIcon className='text-white w-6 h-6 m-1 mx-2' /></button>
        <button className='px-2 py-1'><PlusIcon className='text-white w-6 h-6 m-1 mx-2' /></button>

        <button className='mt-1 flex rounded-md ml-4'>
          <img src={Avatar} alt="" className='block w-8 h-8'></img>
          <ChevronDownIcon className=' text-white w-5 h-5 ml-1 mt-2'/>  
        </button>
        </div>

      </header>
    );
}

export default Header;