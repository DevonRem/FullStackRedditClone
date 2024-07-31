import './style.css';
import Header from './Header.js';
import SecondHeader from './SecondHeader';
import PostForm from './PostForm';
import AuthModal from './AuthModal';
import AuthModalContext from './AuthModalContext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserContext from './UserContext';
import Post from './Post.js';
import { Routes, Route, BrowserRouter as Router, } from 'react-router-dom';
import PostListing from './PostListing';
import Board from './Board';
import CommentPage from './CommentPage';



function App() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState({});


  useEffect(() => {

    axios.get('http://localhost:4000/user', {withCredentials:true})
    .then(response => setUser(response.data));



  }, []);

  function logout() {
    axios.post('http://localhost:4000/logout', {}, {withCredentials:true})
    .then(() => setUser({}));
  }

  return (
    <AuthModalContext.Provider value={{show:showModal, setShow: setShowModal}}>
      <UserContext.Provider value={{...user, logout, setUser}}>
    <div>


      <Router>
      <Header></Header>
        <Routes>
          <Route exact path='/' element={<Board />} />
          <Route exact path='/comment/:id' element={<CommentPage />} />
        </Routes>
      </Router>
      <AuthModal></AuthModal>



    </div>

    </UserContext.Provider>
    </AuthModalContext.Provider>
  );
}

export default App;
