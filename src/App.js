
import './App.css';
import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom';
import Home from './pages/Home.js';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login.js';

function App() {
  return (
    <div className="App">
       
      <Router>
         <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/login">Login</Link>
      </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/create" element={<CreatePost />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
