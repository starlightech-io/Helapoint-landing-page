import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Layout } from './Layout';
import { PrivacyPolicy } from './pages/PrivacyPolicy';



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main Pages */}
          <Route index element={<HomePage />} />
          {/* <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
           */}
          {/* Legal Pages */}
          <Route path="privacy" element={<PrivacyPolicy />} />
          {/* <Route path="terms" element={<TermsOfService />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}