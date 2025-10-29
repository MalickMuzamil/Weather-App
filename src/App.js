import './App.css';

import Container from "react-bootstrap/Container";
import Weather from "./Components/Weathers/Weather";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Container fluid className="d-flex align-items-center justify-content-center min-vh-100 position-relative overflow-hidden">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>

        <div className="glass p-4 p-md-5 w-100 my-5" style={{ maxWidth: 1000 }}>
          <Weather />
        </div>
      </Container>


      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
}

export default App;
