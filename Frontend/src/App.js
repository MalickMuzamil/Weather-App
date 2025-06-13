import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from './Components/Weathers/Weather'

function App() {
  return (
    <>
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Weather />}>
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
