import  Input  from "./Input.js";
import {useState } from 'react';


function AuthModal() {
    const [modalType, setModalType] = useState('login');


    return(
        <div className="w-screen h-screen fixed top-0 left-0 z-20 flex" style={{backgroundColor:`rgba(0,0,0,.8)`}}>
            <div className="border border-redditDark-brighter w-3/4 sm:w-1/2 md:w-1/2 bg-redditDark p-5 text-gray-300 mx-auto self-center rounded-xl">
                {modalType === 'login' && (
                    <h1 className="text-2xl mb-3">Login</h1>
                )}
                {modalType === 'register' && (
                    <h1 className="text-2xl mb-3">Register</h1>
                )}

                <label>
                    <span className="">Username:</span>
                    <Input type="text" className="mb-2 w-full"></Input>
                </label>

                <label>
                    <span className="">Password: </span>
                    <Input type="password" className="mb-2 w-full"></Input>
                </label>

                <button className="border border-gray-300 bg-gray-300 mt-2 mb-1 rounded-full px-3 py-1 font-bold w-full text-black">Login</button>
                
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