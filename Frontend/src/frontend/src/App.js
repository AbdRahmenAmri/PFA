import './App.css';
import Logo from './components/logo/logo';
import Home from './components/home/home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


function App() {
  return (    
    <Router>
      <Link to="/"><Logo/></Link>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
