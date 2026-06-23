import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './Testimonials.css';

const REVIEWS = [
  {
    name: 'Murugan S.',
    place: 'Nagercoil',
    initial: 'M',
    text: 'Got my loan approved in under 5 minutes! The team was extremely professional and gave me the best gold rate compared to other places. Highly recommended.',
    rating: 5
  },
  {
    name: 'Lakshmi R.',
    place: 'Kanyakumari',
    initial: 'L',
    text: 'Very transparent process. No hidden charges, no surprises. They explained everything in Tamil clearly and made me feel confident. Will come back again.',
    rating: 5
  },
  {
    name: 'Karthik V.',
    place: 'Nagercoil',
    initial: 'K',
    text: '₹10,000 per gram is the highest I have seen anywhere! Plus the staff is so friendly and patient. They even helped me on a holiday — incredible service.',
    rating: 5
  },
  {
    name: 'Priya M.',
    place: 'Marthandam',
    initial: 'P',
    text: 'Safe, secure and trustworthy. I got my gold back exactly as I gave it, with proper packing. The low 15% interest is unbeatable in this area.',
    rating: 5
  },
  {
    name: 'Ramesh K.',
    place: 'Nagercoil',
    initial: 'R',
    text: 'I have been a customer for over 2 years. Every time the experience has been excellent. The owners are very humble and treat you like family.',
    rating: 5
  },
  {
    name: 'Anitha J.',
    place: 'Thuckalay',
    initial: 'A',
    text: 'Excellent service! The renewal process was smooth and they even arranged my loan during emergency hours. Truly customer-focused finance.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="testimonials">
      {/* ---- Hero ---- */}
      <section className="t-hero">
        <div className="t-hero__glow" />
        <div className="container">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="t-eyebrow"
          >
            Customer Stories
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Loved by <span className="gold-text">Our Customers</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          >
            Real stories from real people who trust Thangalatha Finance with their gold.
          </motion.p>
        </div>
      </section>

      {/* ---- Swiper Slider ---- */}
      <section className="t-slider-section">
        <div className="container">
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            coverflowEffect={{ rotate: 0, stretch: -30, depth: 200, modifier: 1, slideShadows: false }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="t-swiper"
          >
            {REVIEWS.map((r) => (
              <SwiperSlide key={r.name} className="t-slide">
                <article className="t-card">
                  <div className="t-card__quote-icon"><Quote size={32} /></div>
                  <div className="t-card__stars">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="t-card__text">"{r.text}"</p>
                  <div className="t-card__author">
                    <div className="t-card__avatar">{r.initial}</div>
                    <div>
                      <h4>{r.name}</h4>
                      <span>{r.place}</span>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ---- Stats Row ---- */}
      <section className="t-stats">
        <div className="container t-stats__grid">
          {[
            { value: '5,000+', label: 'Happy Customers' },
            { value: '4.9 / 5', label: 'Average Rating' },
            { value: '98%',    label: 'Repeat Clients' },
            { value: '24+',    label: 'Years of Trust' }
          ].map((s, i) => (
            <motion.div
              key={s.label}
              className="t-stat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <h3>{s.value}</h3>
              <p>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
