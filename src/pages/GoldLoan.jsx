import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ScrollText, Search, Coins, BadgeCheck, FileText, ShieldCheck,
  CircleCheck, ArrowRight, Calculator
} from 'lucide-react';
import './GoldLoan.css';

const STEPS = [
  { icon: ScrollText, title: 'Visit Our Office',  desc: 'Walk in to our Nagercoil branch with your gold and ID.' },
  { icon: Search,     title: 'Gold Assessment',   desc: 'Our experts test the purity and weight of your gold.' },
  { icon: Coins,      title: 'Loan Valuation',    desc: 'Get up to ₹10,000 per gram — instantly calculated.' },
  { icon: FileText,   title: 'Simple Paperwork',  desc: 'Sign a short, transparent loan agreement.' },
  { icon: BadgeCheck, title: 'Receive Your Cash', desc: 'Cash or transfer to your account within minutes.' },
  { icon: ShieldCheck,title: 'Safe Storage',      desc: 'Your gold goes into our insured, secure vault.' }
];

const DOCS = [
  'PAN Card or Aadhaar Card',
];

const ELIGIBILITY = [
  'Indian citizen, 18 years or older',
 
  
];

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function GoldLoan() {
  return (
    <div className="goldloan">
      {/* ---- Hero ---- */}
      <section className="goldloan-hero">
        <div className="goldloan-hero__glow" />
        <div className="container">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="goldloan-eyebrow"
          >
            Gold Loan Made Easy
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Get a <span className="gold-text">Gold Loan</span> in Minutes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          >
            ₹10,500 per gram · 15% interest · 12 month tenure · Zero processing fee.
          </motion.p>
         <motion.div
  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
  className="goldloan-hero__actions"
>
  <Link to="/calculator" className="btn btn-primary"><Calculator size={16} /> Calculate Loan</Link>
</motion.div>
        </div>
      </section>

      {/* ---- Loan Process Timeline ---- */}
      <section className="goldloan-process">
        <div className="container">
          <h2 className="section-title">The <span className="gold-text">Loan Process</span></h2>
          <div className="gold-divider" />
          <p className="section-subtitle">From walking in to walking out with cash — here's how easy we make it.</p>

          <div className="timeline">
            <div className="timeline__line" />
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                className={`timeline__item ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              >
                <div className="timeline__dot">
                  <span>{i + 1}</span>
                </div>
                <div className="timeline__card">
                  <div className="timeline__icon"><step.icon size={22} /></div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Documents & Eligibility ---- */}
      <section className="goldloan-docs">
        <div className="container goldloan-docs__grid">
          <motion.div
            className="docs-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3><FileText size={22} /> Required Documents</h3>
            <ul>
              {DOCS.map((d) => (
                <li key={d}><CircleCheck size={18} /> {d}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="docs-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3><BadgeCheck size={22} /> Eligibility</h3>
            <ul>
              {ELIGIBILITY.map((e) => (
                <li key={e}><CircleCheck size={18} /> {e}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ---- Safety ---- */}
      <section className="goldloan-safety">
        <div className="container">
          <motion.div
            className="safety-banner"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="safety-banner__icon">
              <ShieldCheck size={42} />
            </div>
            <div>
              <h2>Your Gold is <span className="gold-text">100% Safe</span></h2>
              <p>
                Every piece of gold pledged with us is stored in bank-grade, CCTV-monitored
                vaults with full insurance coverage. We follow strict tamper-proof packaging
                and weighing protocols, so when you return for it — it's the exact same gold,
                in the same condition.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
