// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import {
//   ArrowRight, Phone, ShieldCheck, BadgeIndianRupee,
//   Clock4, Award, Sparkles, TrendingUp
// } from 'lucide-react';
// import owners from '../assets/owners.png';
// import './Home.css';

// const fadeUp = {
//   hidden:  { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
// };

// const stagger = {
//   visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
// };

// export default function Home() {
//   return (
//     <div className="home">
//       {/* ============ HERO ============ */}
//       <section className="hero">
//         <div className="hero__bg">
//           <div className="hero__grid" />
//           <div className="hero__glow hero__glow--1" />
//           <div className="hero__glow hero__glow--2" />
//           {Array.from({ length: 18 }).map((_, i) => (
//             <span key={i} className={`hero__particle hero__particle--${i % 6}`} />
//           ))}
//         </div>

//         <div className="container hero__inner">
//           <motion.div
//             className="hero__content"
//             variants={stagger}
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.div variants={fadeUp} className="hero__badge">
//               <Sparkles size={14} />
//               <span>Government Approved · Nagercoil</span>
//             </motion.div>

//             {/* Brand: smaller "Thangalatha", bigger "FINANCE" */}
//             <motion.h1 variants={fadeUp} className="hero__brand">
//               <span className="gold-text">THANGALATHA</span>
//               <span className="hero__brand-sub">Finance</span>
//             </motion.h1>

//             <motion.p variants={fadeUp} className="hero__tagline">
//               "உங்கள் பொன்னுக்கு புதிய மதிப்பு"
//             </motion.p>

//             <motion.h2 variants={fadeUp} className="hero__title">
//               Trusted <span className="gold-text">Gold Loan</span> Partner in Nagercoil
//             </motion.h2>

//             <motion.p variants={fadeUp} className="hero__desc">
//               Get the highest value for your gold with instant approval in just 5 minutes.
//               Loans up to ₹10,500 per gram at only 15% interest — with zero processing fee.
//             </motion.p>

//             {/* Apply Loan button removed; only Contact Now remains */}
//             <motion.div variants={fadeUp} className="hero__actions">
//               <Link to="/contact" className="btn btn-primary">
//                 <Phone size={16} /> Contact Now
//               </Link>
//             </motion.div>

//             <motion.div variants={fadeUp} className="hero__stats">
//               <div className="hero__stat">
//                 <h3>₹10,500</h3>
//                 <p>per gram</p>
//               </div>
//               <div className="hero__stat">
//                 <h3>15%</h3>
//                 <p>interest only</p>
//               </div>
//               <div className="hero__stat">
//                 <h3>5 Min</h3>
//                 <p>approval</p>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Owner photo — sits higher in its column */}
//           <motion.div
//             className="hero__visual"
//             initial={{ opacity: 0, scale: 0.85 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
//           >
//             <div className="hero__halo" />
//             <div className="hero__ring hero__ring--1" />
//             <div className="hero__ring hero__ring--2" />
//             <motion.img
//               src={owners}
//               alt="Founders of Thangalatha Finance"
//               className="hero__owner"
//               animate={{ y: [0, -16, 0] }}
//               transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
//             />
//           </motion.div>
//         </div>

//         <div className="hero__scroll">
//           <span />
//         </div>
//       </section>

//       {/* ============ HIGHLIGHTS ============ */}
//       <section className="highlights">
//         <div className="container">
//           <motion.h2
//             className="section-title"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//           >
//             Why People Choose <span className="gold-text">Thangalatha</span>
//           </motion.h2>
//           <div className="gold-divider" />
//           <p className="section-subtitle">
//             Premium gold loan service with safety, transparency and the best valuations in town.
//           </p>

//           <motion.div
//             className="highlights__grid"
//             variants={stagger}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {[
//               { icon: BadgeIndianRupee, title: 'Best Gold Value',   desc: '₹10,000 per gram — the highest in Nagercoil.' },
//               { icon: Clock4,           title: 'Approval in 5 Min', desc: 'Walk in, get evaluated, get cash. Fast.' },
//               { icon: ShieldCheck,      title: 'Safe Storage',      desc: 'Bank-grade security for every piece of gold.' },
//               { icon: Award,            title: 'Govt. Approved',    desc: 'Fully licensed and regulated finance company.' },
//               { icon: TrendingUp,       title: 'Low 15% Interest',  desc: 'Among the lowest rates with no hidden charges.' },
//               { icon: Sparkles,         title: 'Zero Fees',         desc: 'No processing, no appraisal, no surprises.' }
//             ].map((card) => (
//               <motion.div key={card.title} variants={fadeUp} className="highlight-card">
//                 <div className="highlight-card__icon">
//                   <card.icon size={26} />
//                 </div>
//                 <h3>{card.title}</h3>
//                 <p>{card.desc}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ============ CTA STRIP ============ */}
//       <section className="home-cta">
//         <div className="container home-cta__inner">
//           <div>
//             <h2>Ready to unlock your gold's true value?</h2>
//             <p>Visit us today or call to apply for your gold loan within minutes.</p>
//           </div>
//           <div className="home-cta__actions">
//             <Link to="/calculator" className="btn btn-primary">
//               Calculate Loan <ArrowRight size={16} />
//             </Link>
//             <Link to="/contact" className="btn btn-outline">Visit Us</Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


export default function App() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Vercel Test</h1>
      <p>If you can see this, deployment is working.</p>
    </div>
  );
}
