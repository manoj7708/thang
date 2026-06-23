
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, Zap, Lock, EyeOff, TrendingUp, Heart, ArrowRight
} from 'lucide-react';
import './WhyChooseUs.css';

import React from 'react';

import { Target, Eye, Trophy, Users, Gem } from 'lucide-react';
import logo from '../assets/logo.png';
import './About.css';

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
};

const FEATURES = [
  {
    tamil: 'உங்கள் தங்கத்திற்கு தங்கமான விலையை கொடுக்கும் சரியான நிறுவனம் தங்கலதா பைனான்ஸ்.',
    english: 'Thangalatha Finance — the right company that gives the best price for your gold.'
  },
  {
    tamil: 'தங்கத்திற்கு அதிக வெகுமதி தரும் ஒரே இடம்.',
    english: 'The only place that offers the highest valuation for your gold.'
  },
  {
    tamil: '5 நிமிடத்தில் அடகு வைக்கும் வசதி.',
    english: 'Pledge your gold and get a loan in just 5 minutes.'
  },
  {
    tamil: 'உங்கள் நகைகளை உயர் பாதுகாப்பு வசதியுடன் பாதுகாக்கப்படும்.',
    english: 'Your jewelry is protected with the highest level of security.'
  },
  {
    tamil: 'எளிதில் நகைகளை மீட்டெடுக்க கடன் தொகையை சிறிது சிறிதாக செலுத்தும் வசதி.',
    english: 'Easy installment options so you can comfortably redeem your jewelry.'
  },
  {
    tamil: 'அவசர தேவைக்காக இருந்தால் விடுமுறை நாட்களிலும் எங்கள் சேவை உங்களுக்காக செயல்படும்.',
    english: 'For urgent needs — our service is available even on Sundays and holidays.'
  },
  {
    tamil: 'தங்க நகை ஈட்டின் பேரில் மிக குறைந்த வட்டியில் கடன் வழங்கப்படும்.',
    english: 'Lowest interest rates on the market for gold jewelry loans.'
  },
  {
    tamil: 'கூட்டுவட்டி கிடையாது.',
    english: 'Zero compound interest. Ever.'
  },
  {
    tamil: 'அப்ரைசிங் கட்டணம் மற்றும் மறைமுக கட்டணம் எதுவும் இல்லை.',
    english: 'No appraisal fees. No hidden charges. Transparent pricing.'
  },
  {
    tamil: 'அடகு நகை மற்றும் ஏல நகைகளை மீட்டு மீண்டும் அதிக தொகைக்கு மிக குறைந்த வட்டியில் கடன் வழங்கப்படும்.',
    english: 'We help redeem pledged or auctioned jewelry and re-loan at higher value with lower interest.'
  },
  {
    tamil: 'வீட்டில் இருந்தபடி நகை கடன் பெற்றுக் கொள்ளும் வசதி உண்டு.',
    english: 'Doorstep gold loan service — get your loan from the comfort of your home.'
  },
  {
    tamil: 'தங்கம் வாங்க விற்க அணுகவும்.',
    english: 'Visit us to buy or sell gold at the best market rates.'
  }
];

export default function About() {
  return (
    <div className="about">
      {/* ---- Page Header ---- */}
      <section className="about-hero">
        <div className="about-hero__glow" />
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why <span className="gold-text">Thangalatha Finance</span>
          </motion.h1>
          <motion.p
            className="about-hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            A trusted name in gold financing — built on values, transparency and care.
          </motion.p>
        </div>
      </section>

      {/* ---- Story ---- */}
      

      {/* ---- Mission / Vision / Values ---- */}
     

      {/* ---- Emergency Service Banner ---- */}
      <section className="about-urgent">
        <div className="container">
          <motion.div
            className="urgent-banner"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="urgent-banner__pulse" />
            <div className="urgent-banner__icon">
              <span>24/7</span>
            </div>
            <div className="urgent-banner__content">
              <span className="urgent-banner__tag">EMERGENCY SERVICE</span>
              <h2>Need Gold Loan in an Emergency? <span className="gold-text">We're Available — Even on Sundays.</span></h2>
              <p>
                Financial emergencies don't wait for working days. If you need an urgent gold loan
                on a Sunday, public holiday, or after hours — <strong>just call us directly.</strong> Our
                team will personally attend to your need, anywhere in Nagercoil.
              </p>
              <p className="urgent-banner__tamil">
                அவசர தேவைக்காக இருந்தால் விடுமுறை நாட்களிலும் எங்கள் சேவை உங்களுக்காக செயல்படும்.
              </p>
              <div className="urgent-banner__actions">
                <a href="tel:+918015157070" className="btn btn-primary urgent-banner__cta">
                  📞 Call Now: +91 97892 20678 
                </a>
                <a href="tel:+97892 20678" className="btn btn-outline">
                  +91 80151 57070
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---- Bilingual Features ---- */}
      <section className="about-features">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Makes Us <span className="gold-text">Special</span>
          </motion.h2>
          <div className="gold-divider" />
          <p className="section-subtitle">எங்கள் சேவைகள் · Our Promises</p>

          <motion.div
            className="features-list"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {FEATURES.map((item, idx) => (
              <motion.div key={idx} className="feature-row" variants={fadeUp}>
                <div className="feature-row__number">{String(idx + 1).padStart(2, '0')}</div>
                <div className="feature-row__tamil">{item.tamil}</div>
                <div className="feature-row__english">{item.english}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---- Trust Section ---- */}
      <section className="about-trust">
        <div className="container">
          <motion.div
            className="about-trust__inner"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeUp}>
              Why Customers <span className="gold-text">Trust Us</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="about-trust__lead">
              At Thangalatha Finance, trust isn't a tagline — it's the foundation of every transaction.
            </motion.p>

            <motion.div variants={stagger} className="about-trust__grid">
              {[
                { icon: Trophy, title: 'Government Approved',    desc: 'Fully registered and regulated.' },
                { icon: Gem,    title: 'Accurate Gold Testing',  desc: 'Modern equipment for fair pricing.' },
                { icon: Users,  title: 'Family Run',              desc: 'Personal touch on every loan.' },
                { icon: Heart,  title: 'Customer First',          desc: 'Service over sales, always.' }
              ].map((p) => (
                <motion.div key={p.title} variants={fadeUp} className="trust-item">
                  <p.icon size={22} />
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}