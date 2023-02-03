import React from 'react'
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  </>
  );
}

export default App;