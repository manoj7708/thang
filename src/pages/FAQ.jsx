import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import './FAQ.css';

const FAQS = [
  {
    q: 'How does a gold loan work at Thangalatha Finance?',
    a: 'Visit our office with your gold and ID proof. Our experts assess your gold\'s purity and weight, then offer up to ₹10,500 per gram. Once you accept, you sign a simple loan agreement and receive cash or a bank transfer — usually within 5 minutes. Your gold is then safely stored in our secure vault.'
  },
  {
    q: 'What documents are required for a gold loan?',
    a: 'You need onlya government-issued photo ID (Aadhaar or PAN Card).'
  },
  {
    q: 'Is my gold safe with Thangalatha Finance?',
    a: 'Absolutely. Your gold is stored in bank-grade, CCTV-monitored vaults with full insurance coverage. We use tamper-proof packaging and follow strict weighing protocols, so you receive exactly the same gold back, in the same condition.'
  },
  {
    q: 'What are the interest rates and tenure?',
    a: 'We offer a transparent 15% per annum interest rate with a standard 12 month tenure. No hidden charges, no processing fees, no surprise costs. You can also choose to pay only the interest monthly and renew the loan as needed.'
  },
  {
    q: 'How can I repay my loan?',
    a: 'Multiple convenient options: pay monthly interest only, make partial payments anytime, or repay the full amount in one go. You can pay by cash, bank transfer, UPI, or any other method comfortable for you.'
  },
  {
    q: 'Who is eligible for a gold loan?',
    a: 'Any Indian citizen aged 18+. There are no income requirements, no credit score checks, and no employment proof needed.'
  },
  {
    q: 'Can I get my gold back early?',
    a: 'Yes, you can repay your loan and collect your gold at any time within the tenure. There are no prepayment penalties or extra charges.'
  },
  {
    q: 'Do you accept all types of gold?',
    a: 'We accept gold ornaments and jewelry of 18 carats or higher. Gold coins and bars are also accepted. Each piece is carefully assessed for purity using modern testing equipment.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq">
      {/* ---- Hero ---- */}
      <section className="faq-hero">
        <div className="faq-hero__glow" />
        <div className="container">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="faq-eyebrow"
          >
            Got Questions?
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Frequently Asked <span className="gold-text">Questions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          >
            Everything you need to know about gold loans at Thangalatha Finance.
          </motion.p>
        </div>
      </section>

      {/* ---- FAQ List ---- */}
      <section className="faq-section">
        <div className="container faq-section__inner">
          <div className="faq-list">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={faq.q}
                  className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                >
                  <button
                    className="faq-item__trigger"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <div className="faq-item__q">
                      <HelpCircle size={20} />
                      <span>{faq.q}</span>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="faq-item__chev"
                    >
                      <ChevronDown size={22} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="faq-item__body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="faq-item__answer">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Side help card */}
          <motion.aside
            className="faq-help"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="faq-help__icon"><MessageCircle size={26} /></div>
            <h3>Still have questions?</h3>
            <p>
              We're happy to walk you through everything in person or over the phone. Our team
              speaks Tamil and English, and is available 7 days a week.
            </p>
            <div className="faq-help__actions">
              <a href="tel:+918015157070" className="btn btn-primary">Call Us</a>
              <Link to="/contact" className="btn btn-outline">Contact</Link>
            </div>
            <div className="faq-help__contact">
              <p>+91 97892 20678</p>
              <p>+91 80151 57070</p>
              
              <p>thangalathafinance@gmail.com</p>
            </div>
          </motion.aside>
        </div>
      </section>
    </div>
  );
}
