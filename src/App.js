// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './components/container/LandingPage/LandingPage';

function App() {
  const isUserLoggedIn=false;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={isUserLoggedIn ? " " :<LandingPage />}/>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
