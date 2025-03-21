import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateEvent from './pages/CreateEvent';
import CreateTemplate from './pages/CreateTemplate';
import FillQuestionnaire from './pages/FillQuestionnaire';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/create-template" element={<CreateTemplate />} />
        <Route path="/fill-questionnaire" element={<FillQuestionnaire />} />
      </Routes>
    </Router>
  );
}
