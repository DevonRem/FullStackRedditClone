import './style.css';
import Header from './Header.js';
import SecondHeader from './SecondHeader';
import PostForm from './PostForm';
import AuthModal from './AuthModal';



function App() {
  return (
    <div>
      <Header></Header>
      <AuthModal></AuthModal>
      <SecondHeader></SecondHeader>
      <PostForm></PostForm>

    <div className='px-6 bg-redditDark text-gray-400'>
      <div className='border border-redditBorder bg-redditDark-brighter p-2 rounded-md'>
        <h5 className='text-gray-500 text-sm'> Posted by u/test 3 days ago</h5>
        <h2 className='text-xl mb-3 text-gray-300'>Title Placeholder Text: containing lorem ipsum</h2>
        <div className='text-sm leading-6'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
      </div>
    </div>
    </div>
  );
}

export default App;
