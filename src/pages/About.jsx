import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Trophy, Users, Gem } from 'lucide-react';
import logo from '../assets/logo.png';
import './About.css';

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } }
};

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
            About <span className="gold-text">Thangalatha Finance</span>
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
      <section className="about-story">
        <div className="container about-story__inner">
          <motion.div
            className="about-story__visual"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-story__halo" />
            <img src={logo} alt="Thangalatha Finance" />
          </motion.div>

          <motion.div
            className="about-story__content"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span variants={fadeUp} className="about-eyebrow">Our Story</motion.span>
            <motion.h2 variants={fadeUp}>
              Built for <span className="gold-text">Generations</span>, Trusted for Life
            </motion.h2>
            <motion.p variants={fadeUp}>
              Thangalatha Finance is a government-approved gold loan company serving the people of
              Nagercoil and surrounding areas. Founded with a vision to make gold loans simple,
              transparent and rewarding, we have grown by always putting our customers first.
            </motion.p>
            <motion.p variants={fadeUp}>
              Every loan we issue is backed by personal attention, accurate appraisal and the
              highest gold valuation rate in the region — ₹10,000 per gram. We believe your gold
              deserves more than just a number on paper, and that's the value we bring.
            </motion.p>

            <motion.div variants={fadeUp} className="about-story__stats">
              <div>
                <h3>2,000+</h3>
                <p>Happy customers</p>
              </div>
              <div>
                <h3>₹10.5K/g</h3>
                <p>Top valuation rate</p>
              </div>
              <div>
                <h3>15%</h3>
                <p>Low interest</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ---- Mission / Vision / Values ---- */}
      <section className="about-mv">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our <span className="gold-text">Purpose</span>
          </motion.h2>
          <div className="gold-divider" />

          <motion.div
            className="about-mv__grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Target,
                title: 'Mission',
                desc: 'To empower people through fair, accessible gold loans that respect customers\' time, trust, and treasures.'
              },
              {
                icon: Eye,
                title: 'Vision',
                desc: 'To become the most trusted and customer-friendly gold loan partner across Tamil Nadu.'
              },
              {
                icon: Heart,
                title: 'Values',
                desc: 'Honesty, transparency, safety and warmth — every customer is treated like family.'
              }
            ].map((item) => (
              <motion.div key={item.title} className="mv-card" variants={fadeUp}>
                <div className="mv-card__icon"><item.icon size={28} /></div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
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
                { icon: Trophy, title: 'Government Approved',     desc: 'Fully registered and regulated.' },
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
