import {Routes , Route , BrowserRouter} from "react-router-dom"
import './App.css';
import ForgetPassword from "./Components/forgetPassword/ForgetPassword";
import LandingPage from "./Components/landingPage/LandingPage"
import Login from "./Components/login/Login";
import SignIn from "./Components/signin/SignIn";

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signin" element={<SignIn/>} />
        <Route path="/ForgetPassword" element={<ForgetPassword/>} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
