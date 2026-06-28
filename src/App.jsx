

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import FloatingButtons from './components/FloatingButtons.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import GoldLoan from './pages/GoldLoan.jsx';
import LoanCalculator from './pages/LoanCalculator.jsx';
import WhyChooseUs from './pages/WhyChooseUs.jsx';
import FAQ from './pages/FAQ.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Contact from './pages/Contact.jsx';

import './App.css';

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  in:      { opacity: 1, y: 0 },
  out:     { opacity: 0, y: -24 }
};

const pageTransition = { duration: 0.5, ease: [0.16, 1, 0.3, 1] };

function PageWrap({ children }) {
  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page-wrap"
    >
      {children}
    </motion.main>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/"               element={<PageWrap><Home /></PageWrap>} />
          <Route path="/about"          element={<PageWrap><About /></PageWrap>} />
          <Route path="/services"       element={<PageWrap><Services /></PageWrap>} />
          <Route path="/gold-loan"      element={<PageWrap><GoldLoan /></PageWrap>} />
          <Route path="/calculator"     element={<PageWrap><LoanCalculator /></PageWrap>} />
          <Route path="/why-choose-us"  element={<PageWrap><WhyChooseUs /></PageWrap>} />
          <Route path="/faq"            element={<PageWrap><FAQ /></PageWrap>} />
          <Route path="/testimonials"   element={<PageWrap><Testimonials /></PageWrap>} />
          <Route path="/contact"        element={<PageWrap><Contact /></PageWrap>} />
        </Routes>
      </AnimatePresence>

      <FloatingButtons />
      <Footer />
    </div>
 );
}
