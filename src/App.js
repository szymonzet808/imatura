import { useState } from 'react';
import Header from './components/Header';
import video from './media/bg.mp4'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Arkusze from './components/Arkusze';
import LoginPage from './components/LoginPage';
import { AppContext } from './Context/AppContext'
import Gramatyka from './components/Gramatyka';
import HomePage from './components/HomePage';


function App() {

  const [search, setSearch] = useState('')
  const [logged, setLogged] = useState(false)
  return (

    <AppContext.Provider value={{ search, setSearch, logged, setLogged }}>
      <BrowserRouter>
        <Header />
        {/* <video loop autoPlay muted className='video-bg'>
          <source
            src={video}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className='video-overlay'>

        </div> */}
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
        </Routes>
        <Routes>
          <Route path='/arkusze' element={<Arkusze />}></Route>
        </Routes>
        <Routes>
          <Route path='/login' element={<LoginPage />}></Route>
        </Routes>
        <Routes>
          <Route path='/gramatyka' element={<Gramatyka />}></Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
