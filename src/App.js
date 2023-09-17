import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from './Home';

import Settings from "./Settings";

import Layout from "./Layout";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} />
        </Route>


      </Routes >
    </BrowserRouter>
  );
}

export default App;
