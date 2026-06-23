import React from 'react';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Coins, Percent, Calendar, Calculator, IndianRupee, TrendingUp, Wallet, Sparkles, BadgeIndianRupee } from 'lucide-react';
import './LoanCalculator.css';

// ---- FIXED VALUES (these never change) ----
const PER_GRAM = 10500;          // ₹10,000 per gram
const RATE = 15;                 // 15% per annum
const TENURE = 12;               // 12 months
const PROCESSING_FEE = 'NIL';    // Zero processing fee

const formatRupees = (n) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(Math.round(n || 0));

export default function LoanCalculator() {
  // Only Gold Weight is user-editable
  const [goldWeight, setGoldWeight] = useState(10);

  // Calculations
  const { eligibleLoan, monthlyInterest, totalInterest, totalRepayment } = useMemo(() => {
    const principal = goldWeight * PER_GRAM;
    const monthly = (principal * RATE / 100) / 12;
    const totalInt = monthly * TENURE;
    return {
      eligibleLoan: principal,
      monthlyInterest: monthly,
      totalInterest: totalInt,
      totalRepayment: principal + totalInt
    };
  }, [goldWeight]);

  return (
    <div className="calculator">
      {/* ---- Hero ---- */}
      <section className="calc-hero">
        <div className="calc-hero__glow" />
        <div className="container">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="calc-eyebrow"
          >
            Plan Your Loan
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Gold Loan <span className="gold-text">Calculator</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          >
            Just enter your gold weight — we'll calculate everything else instantly.
          </motion.p>
        </div>
      </section>

      {/* ---- Calculator Card ---- */}
      <section className="calc-section">
        <div className="container">
          <motion.div
            className="calc-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Inputs */}
            <div className="calc-card__inputs">
              <h3><Calculator size={20} /> Your Loan Details</h3>

              {/* GOLD WEIGHT — only editable field */}
              <div className="calc-input">
                <label>
                  <span><Coins size={16} /> Gold Weight</span>
                  <span className="calc-input__value">{goldWeight} g</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="500"
                  value={goldWeight}
                  onChange={(e) => setGoldWeight(Number(e.target.value))}
                />
                <input
                  type="number"
                  min="1"
                  value={goldWeight}
                  onChange={(e) => setGoldWeight(Number(e.target.value))}
                  className="calc-input__number"
                />
              </div>

              {/* STATIC FIELDS (display-only) */}
              <div className="calc-input calc-input--static">
                <label>
                  <span><BadgeIndianRupee size={16} /> Loan Amount per Gram</span>
                  <span className="calc-input__value calc-input__value--fixed">₹10,500 / g</span>
                </label>
              </div>

              <div className="calc-input calc-input--static">
                <label>
                  <span><Percent size={16} /> Interest Rate</span>
                  <span className="calc-input__value calc-input__value--fixed">15% p.a.</span>
                </label>
              </div>

              <div className="calc-input calc-input--static">
                <label>
                  <span><Calendar size={16} /> Loan Duration</span>
                  <span className="calc-input__value calc-input__value--fixed">12 Months</span>
                </label>
              </div>

              <div className="calc-input calc-input--static">
                <label>
                  <span><Sparkles size={16} /> Processing Fee</span>
                  <span className="calc-input__value calc-input__value--fixed">{PROCESSING_FEE}</span>
                </label>
              </div>
            </div>

            {/* Results */}
            <div className="calc-card__results">
              <h3>Loan Summary</h3>

              <motion.div
                className="result-tile result-tile--hero"
                key={eligibleLoan}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <span className="result-tile__label">Eligible Loan Amount</span>
                <span className="result-tile__value">{formatRupees(eligibleLoan)}</span>
                <span className="result-tile__note">For {goldWeight}g of gold @ ₹{PER_GRAM.toLocaleString('en-IN')}/g</span>
              </motion.div>

              <div className="result-grid">
                <motion.div
                  className="result-tile"
                  key={`monthly-${monthlyInterest}`}
                  initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                >
                  <div className="result-tile__icon"><TrendingUp size={20} /></div>
                  <span className="result-tile__label">Monthly Interest</span>
                  <span className="result-tile__value">{formatRupees(monthlyInterest)}</span>
                </motion.div>

                <motion.div
                  className="result-tile"
                  key={`total-${totalInterest}`}
                  initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05 }}
                >
                  <div className="result-tile__icon"><Percent size={20} /></div>
                  <span className="result-tile__label">Total Interest (12 mo)</span>
                  <span className="result-tile__value">{formatRupees(totalInterest)}</span>
                </motion.div>

                <motion.div
                  className="result-tile result-tile--accent"
                  key={`repay-${totalRepayment}`}
                  initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
                >
                  <div className="result-tile__icon"><Wallet size={20} /></div>
                  <span className="result-tile__label">Total Repayment</span>
                  <span className="result-tile__value">{formatRupees(totalRepayment)}</span>
                </motion.div>
              </div>

              <p className="calc-disclaimer">
                * Calculated at the fixed Thangalatha Finance rate of 15% per annum, with ₹10,500 per gram valuation,
                12-month tenure, and zero processing fee. Final amount confirmed after gold purity assessment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}