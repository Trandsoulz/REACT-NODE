import React from "react";
import Routing from './routes/Routing'
import Navbar from "./components/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Navbar />
      {/* All the routings */}
      <Routing />
      <ToastContainer />
    </>
  );
};

export default App;
