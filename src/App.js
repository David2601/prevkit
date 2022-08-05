import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import Info from './components/Info';



function App() {
  return (
    <><Navbar />
    <div class="px-4 py-5 my-5 text-center">
      <img class="d-block mx-auto mb-4" src='../prevkit.png' />
      <h1 class="display-5 fw-bold text">PrevKit</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">El primero en prevenir tu salud</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Saber más</button>
        </div>
      </div>
    </div>
    <Info/></>
  );
}

export default App;
