import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Calendar from './components/Calendar';
import PartnerDiscovery from './components/PartnerDiscovery';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/partner-discovery" element={<PartnerDiscovery />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
