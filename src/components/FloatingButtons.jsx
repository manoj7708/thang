import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import './FloatingButtons.css';

export default function FloatingButtons() {
  return (
    <div className="floating-btns">
      <motion.a
        href="https://wa.me/919789220678?text=Hello%20Thangalatha%20Finance,%20I%20would%20like%20to%20know%20more%20about%20a%20gold%20loan."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn--whatsapp"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="floating-btn__pulse" />
        <MessageCircle size={26} strokeWidth={2} />
      </motion.a>

      <motion.a
        href="tel:+919789220678"
        className="floating-btn floating-btn--call"
        aria-label="Call us"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.4, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="floating-btn__pulse floating-btn__pulse--gold" />
        <Phone size={24} strokeWidth={2.2} />
      </motion.a>
    </div>
  );
}
