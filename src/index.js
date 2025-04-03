// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import App_login from './App_login';
import App_aboutus_0116 from './App_aboutus_0116';
import SignUp from '../src/SignupPage';
import ShopNow from '../src/Shop_0116';
import ContactUs from '../src/Contact_0116';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/action" element={<App_login/>} />
        <Route path="/" element={<App_aboutus_0116/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/shop" element={<ShopNow/>} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();

//<Route path="/action1" element={<App />} />