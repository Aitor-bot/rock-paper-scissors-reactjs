import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './screens/Home';
import Game from './screens/Game';
import Error from './screens/Error';
import './App.css';
import WebcamPlayer1 from "./components/WebCamPlayer1";
import Flexbox from 'flexbox-react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />

        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;