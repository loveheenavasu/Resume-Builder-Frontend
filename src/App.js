import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Profile from './components/Profile';

import { ProtectedRoute } from './components/Auth/ProtectedRoute';
import PublicRoutes from './components/Auth/PublicRoutes';
import { SignOut } from './components/Auth/Auth';
import Resume from './components/Resume';

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<Home />} />
            <Route path="/resume/:id" element={<Resume />} />
            <Route path="/resume" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/sign-out" element={<SignOut />} />
          </Route>
          <Route path="/" element={<PublicRoutes />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}
export default App