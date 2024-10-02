import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import EvoxNAvANdHero from "./Pages/EvoxPage/EvoxNAvANdHero";
import EvoxTop from "./Pages/NewPage/EvoxTopPrivcy/EvoxTop";

import {
  BrowserRouter as Router,
  
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<EvoxNAvANdHero />} /> */}
        <Route path="/" element={<EvoxTop/>}/>

      </Routes>
    </Router>
  );
}

export default App;
