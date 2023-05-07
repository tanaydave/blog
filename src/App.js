
// import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.js';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login.js';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login"
    });
  };
  return (

    <div className="App ">
     
      

      <Router>
      
        <nav className="flex flex-row justify-center ">
          <div className=' flex flex-row p-4 navbar-div'>
          {/* <div className='flex-1'> */}

            <Link className="pr-8" to="/">Home</Link>

            {!isAuth ? <Link to="/login">Login</Link> :
              <>
                <Link to="/create">Create</Link>
                <button className='btn-user pl-8' onClick={signUserOut}> Sign Out</button>
              </>
            }
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth} />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/create" element={<CreatePost isAuth={isAuth} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
