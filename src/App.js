// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './components/container/LandingPage/LandingPage';
import SignIn from './components/container/SignIn/SignIn';
import HomePage from './components/container/HomePage/HomePage';


function App() {
  const isUserLoggedIn=true;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={isUserLoggedIn ? <HomePage /> :<LandingPage />}/>
          <Route path='/sign-in' element={<SignIn />}/>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
