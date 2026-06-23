import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Coins, Zap, Lock, Clock, Percent, ShieldCheck, ArrowRight
} from 'lucide-react';
import './Services.css';

const SERVICES = [
  {
    icon: Coins,
    title: 'Gold Loan',
    desc: 'Premium gold loans at ₹10,500 per gram — the highest valuation rate in Nagercoil.',
    points: ['Up to ₹10,500/g', '12 month tenure', 'Renewal supported']
  },
  {
    icon: Zap,
    title: 'Instant Approval',
    desc: 'Get your loan approved and disbursed within 5 minutes of visiting our office.',
    points: ['5 min approval', 'On-spot cash', 'Minimal paperwork']
  },
  {
    icon: Lock,
    title: 'Secure Gold Storage',
    desc: 'Your gold is stored in bank-grade vaults with multi-layer security and insurance.',
    points: ['CCTV monitored', 'Insured vault', 'Tamper-proof packing']
  },
  {
    icon: Clock,
    title: 'Quick Processing',
    desc: 'Streamlined process from gold testing to cash disbursement — no waiting in queues.',
    points: ['Same-day release', 'No long waits', 'Holiday service']
  },
  {
    icon: Percent,
    title: 'Low 15% Interest',
    desc: 'Transparent low interest rate of 15% per annum — no hidden or compound charges.',
    points: ['15% flat rate', 'No compounding', 'Nil processing fee']
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Service',
    desc: 'Government-approved, regulated and customer-trusted for years of reliable service.',
    points: ['Govt approved', '2,000+ customers', 'Family business']
  }
];

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function Services() {
  return (
    <div className="services">
      {/* ---- Header ---- */}
      <section className="services-hero">
        <div className="services-hero__glow" />
        <div className="container">
          <motion.span
            className="services-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            What We Offer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Our <span className="gold-text">Premium</span> Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Every service designed to make your gold loan experience effortless, secure and rewarding.
          </motion.p>
        </div>
      </section>

      {/* ---- Service Cards ---- */}
      <section className="services-grid-section">
        <div className="container">
          <motion.div
            className="services-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {SERVICES.map((svc) => (
              <motion.div key={svc.title} className="service-card" variants={fadeUp}>
                <div className="service-card__inner">
                  <div className="service-card__icon">
                    <svc.icon size={28} />
                  </div>
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <ul>
                    {svc.points.map((p) => (
                      <li key={p}>
                        <span className="service-card__bullet" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="services-cta">
        <div className="container services-cta__inner">
          <div>
            <h2>Need help choosing the right loan?</h2>
            <p>Our team is happy to guide you through the best option for your gold.</p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            Talk to Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
