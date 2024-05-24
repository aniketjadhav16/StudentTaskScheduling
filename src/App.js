import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Calendar from './components/Calendar';
import PartnerDiscovery from './components/PartnerDiscovery';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/partner-discovery" element={<PartnerDiscovery />} />
      </Routes>
    </Router>
  );
};

export default App;
