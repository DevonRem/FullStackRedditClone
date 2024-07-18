import './style.css';
import Logo from './Dlogo.png';
import {SearchIcon}from '@heroicons/react/solid';

function App() {
  return (
    <div>
      <header className="flex w-full bg-redditDark p-2">
        <div className='mx-4'>
          <img src={Logo} alt="" className='w-8 h-8 '/>
        </div>
        <form action='' className='bg-redditDark-brighter p-1 px-3 flex rounded-md border border-gray-700'>
          <SearchIcon className="text-gray-300 h-6 w-6"/>
          <input type='text' className='bg-redditDark-brighter text-sm p-1 pl-2 pr-0 block focus: outline-none text-white' placeholder='Search'></input>
        </form>
      </header>
    </div>
  );
}

export default App;
