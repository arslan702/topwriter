import Navbar from '../src/Custom/Navbar/Navbar'
import Footer from '../src/Custom/Footer/Footer'
import Home from '../src/Components/Home/Home/Home'
import Studytools from '../src/Components/Studytools/Studytools/Studytools'
import Educators from '../src/Components/Educators/Educators/Educator'
import Becometutor from '../src/Components/Becometutor/Becometutor/Becometutor'
import Signup from '../src/Components/SignUp/Signup'
import { Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <BrowserRouter>

     <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/studytools' element={<Studytools/>}/>
     <Route path='/educators' element={<Educators/>}/>
     <Route path='/becometutor' element={<Becometutor/>}/>
     <Route path='/signup' element={<Signup/>}/>






     </Routes>
     <Footer/>
     </BrowserRouter>

    </div>
  );
}

export default App;
