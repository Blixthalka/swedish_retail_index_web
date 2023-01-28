import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import App from './App';
import './index.css';
import Index from './routes/Index';
import Instrument from './routes/Instrument';
import Wrapper from './Wrapper';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Wrapper />} >
            <Route index element={<Index />} />
            <Route path="/instruments/:key" element={<Instrument />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


