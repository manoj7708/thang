import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react';
import logo from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__glow" />

      <div className="container footer__inner">
        <div className="footer__col footer__col--brand">
          <div className="footer__brand">
            <img src={logo} alt="Thangalatha Finance" className="footer__logo" />
            <div>
              <h3 className="footer__title">Thangalatha Finance</h3>
              <p className="footer__tag">"உங்கள் பொன்னுக்கு புதிய மதிப்பு"</p>
            </div>
          </div>
          <p className="footer__about">
            A government-approved gold loan finance company in Nagercoil offering instant approval,
            secure storage, and the best value for your gold.
          </p>
          <div className="footer__socials">
            <a href="https://www.instagram.com/thangalatha_finance?igsh=dGEwdnU1Zzcyczc2" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gold-loan">Gold Loan</Link></li>
            <li><Link to="/calculator">Loan Calculator</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">More</h4>
          <ul className="footer__list">
            <li><Link to="/why-choose-us">Why Choose Us</Link></li>
            
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Get In Touch</h4>
          <ul className="footer__contact">
            <li>
              <MapPin size={16} />
              <span>No.3 Mead Street, Near Old Municipality, Nagercoil — 629001</span>
            </li>
            <li>
              <Phone size={16} />
               <a href="tel:+919789220678">+91 97892 20678</a>
              
            </li>
            <li>
              <Phone size={16} />
              
              <a href="tel:+918015157070">+91 80151 57070</a>
            </li>
            <li>
              <Mail size={16} />
              <a href="mailto:thangalathafinance@gmail.com">thangalathafinance@gmail.com</a>
            </li>
            <li>
              <Clock size={16} />
              <span>Open 6 days ·Sunday Holiday</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} Thangalatha Finance. All rights reserved.</p>
          <p className="footer__credit">Government Approved · Trusted in Nagercoil</p>
        </div>
      </div>
    </footer>
  );
}
