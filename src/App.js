import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './screens/Home/Home';
import SignIn from './screens/Authentication/SignIn';
import SignUp from './screens/Authentication/SignUp';
import Welcome from './screens/Welcome/Welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
