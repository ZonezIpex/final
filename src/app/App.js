import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import a from '../components/Finalbutton.jsx';
import b from '../components/CombinedComponent.jsx';
import c from '../components/counter.js';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<a/>}>
            <Route path="/finalbutton" />
            <Route path="/blog page" />
        </Route>
        <Route path="/combined" element={<b/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 