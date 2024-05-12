import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Videos from './Components/Vedio.jsx';
import Upload from './Components/Upload.jsx';
import Login from './Components/Login.jsx';
import Signup from './Components/SignUp.jsx';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup/>}/>



        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
