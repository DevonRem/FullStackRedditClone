import  Input  from "./Input.js";
import {useState, useContext, useEffect, useRef } from 'react';
import axios from 'axios';
import AuthModalContext from "./AuthModalContext.js";


function AuthModal() {
    const [modalType, setModalType] = useState('login');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const modalContext = useContext(AuthModalContext);

    const [userDropdownHidden, setUserDropdownHidden] = useState('hidden');


    function useUserDropdown(ref) {
      useEffect(() => {
        function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
            modalContext.setShow(false);
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





    if(modalContext.show && modalContext.show !== modalType) {
        setModalType(modalContext.show);
    }

    const visible = modalContext.show ? 'block' : 'hidden';

    function register(e) {
        e.preventDefault();
        const data = {email, username, password}
        axios.post('http://localhost:4000/register', data, {withCredentials:true});
    }

    return(
        <div className={"w-screen h-screen fixed top-0 left-0 z-20 flex "+ visible }style={{backgroundColor:`rgba(0,0,0,.8)`}}>
            <div className="border border-redditDark-brighter w-3/4 sm:w-1/2 md:w-1/2 bg-redditDark p-5 text-gray-300 mx-auto self-center rounded-xl" ref={userDropdownRef}>
                {modalType === 'login' && (
                    <h1 className="text-2xl mb-3">Login</h1>
                )}
                {modalType === 'register' && (
                    <h1 className="text-2xl mb-3">Sign up!</h1>
                )}

                {modalType === 'register' && (
                    <label>
                        <span className="">Email:</span>
                        <Input type="email" className="mb-2 w-full" value={email} onChange={e => setEmail(e.target.value)}></Input>
                    </label>
                )}

                <label>
                    <span className="">Username:</span>
                    <Input type="text" className="mb-2 w-full" value={username} onChange={e => setUsername(e.target.value)}></Input>
                </label>

                <label>
                    <span className="">Password: </span>
                    <Input type="password" className="mb-2 w-full" value={password} onChange={e => setPassword(e.target.value)}></Input>
                </label>

                {modalType === 'login' && (
                    <button className="border border-gray-300 bg-gray-300 mt-2 mb-1 rounded-full px-3 py-1 font-bold w-full text-black">Login</button>
                )}
                {modalType === 'register' && (
                    <button className="border border-gray-300 bg-gray-300 mt-2 mb-1 rounded-full px-3 py-1 font-bold w-full text-black" onClick={e=> register(e)}>Sign up</button>
                )}
        

                {modalType === 'login' && (
                    <div>
                    New user? <button className='text-blue-600 mt-1' onClick={()=> setModalType('register')}>Sign Up!</button>
                    </div>
                )}

                {modalType === 'register' && (
                    <div>
                    Already have an account? <button className='text-blue-600 mt-1' onClick={()=> setModalType('login')}>Login!</button>
                    </div>
                )}                


                </div>
            </div>

    );
}

export default AuthModal;