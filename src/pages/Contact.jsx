import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone, Mail, MapPin, Clock, Send, User, MessageSquare, CheckCircle2
} from 'lucide-react';
import './Contact.css';

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build a WhatsApp message and open in a new tab
    const text = encodeURIComponent(
      `Hello Thangalatha Finance,\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(`https://wa.me/919789220678 ?text=${text}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      {/* ---- Hero ---- */}
      <section className="contact-hero">
        <div className="contact-hero__glow" />
        <div className="container">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="contact-eyebrow"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Let's <span className="gold-text">Connect</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          >
            Visit our Nagercoil branch, call us, or drop a message — we're here to help.
          </motion.p>
        </div>
      </section>

      {/* ---- Contact Section ---- */}
      <section className="contact-main">
        <div className="container contact-main__grid">
          {/* Info cards */}
          <motion.div
            className="contact-info"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} className="info-card">
              <div className="info-card__icon"><MapPin size={22} /></div>
              <div>
                <h4>Visit Us</h4>
                <p>No.3 Mead Street,<br />Near Old Municipality,<br />Nagercoil — 629001</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="info-card">
              <div className="info-card__icon"><Phone size={22} /></div>
              <div>
                <h4>Call Us</h4>
                <p>
                  <a href="tel:+919789220678 ">+91  97892 20678</a><br />
                  <a href="tel:+918015157070">+91 80151 57070</a>
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="info-card">
              <div className="info-card__icon"><Mail size={22} /></div>
              <div>
                <h4>Email Us</h4>
                <p><a href="mailto:thangalathafinance@gmail.com">thangalathafinance@gmail.com</a></p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="info-card">
              <div className="info-card__icon"><Clock size={22} /></div>
              <div>
                <h4>Business Hours</h4>
                <p>Mon — Sat · 10:00 AM — 4:00 PM<br />Sunday  Holiday</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <p>Fill the form and we'll respond via WhatsApp instantly.</p>

              <form onSubmit={handleSubmit}>
                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label><User size={14} /> Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Eg. Ramesh K."
                    />
                  </div>
                  <div className="contact-form__group">
                    <label><Phone size={14} /> Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div className="contact-form__group">
                  <label><Mail size={14} /> Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="contact-form__group">
                  <label><MessageSquare size={14} /> Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help you with your gold loan?"
                  />
                </div>

                <button type="submit" className="btn btn-primary contact-form__submit">
                  {submitted ? (<><CheckCircle2 size={18} /> Sent!</>) : (<>Send Message <Send size={16} /></>)}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---- Google Map ---- */}
      <section className="contact-map">
        <div className="container">
          <h2 className="section-title">Find Us on <span className="gold-text">the Map</span></h2>
          <div className="gold-divider" />
          <motion.div
            className="contact-map__frame"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <iframe
              src="https://www.google.com/maps?q=Mead+Street,+Nagercoil,+629001&output=embed"
              title="Thangalatha Finance Location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
