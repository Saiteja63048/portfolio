import './App.css';
import Home from './Home';
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';
import Resume from './Resume';
import {
  BrowserRouter as Router,
  
  Route,
  Routes,
  
} from "react-router-dom";


function App() {
  return (
    <Router>

    <div className="App">
      <Header/>

        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/Projects' element={<Projects/>} ></Route>
          <Route path='/Skills' element={<Skills/>} ></Route>
          <Route path='/Resume' element={<Resume/>} ></Route>

        </Routes>
    </div>
    </Router>

  );
}

export default App;
