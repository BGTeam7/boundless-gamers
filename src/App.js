import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/home";
import Mission from './pages/mission';
import Connect from './pages/connect';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/connect" element={<Connect />} />
            {/* <Route path="/conspiracy" element={<Conspiracy />}/>
            <Route path="/construction" element={<Construction />}/> */}
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
