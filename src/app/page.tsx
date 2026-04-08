"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./page.css";

function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Chuyển đổi sang GMT+7
      const gmt7 = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + (7 * 3600000));
      const hours = gmt7.getHours().toString().padStart(2, "0");
      const minutes = gmt7.getMinutes().toString().padStart(2, "0");
      const seconds = gmt7.getSeconds().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds} GMT+7`);
    };
    updateTime();
    const tick = setInterval(updateTime, 1000);
    return () => clearInterval(tick);
  }, []);

  return <div className="clock mono">{time || "--:--:-- GMT+7"}</div>;
}

export default function Home() {
  return (
    <div className="container">
      {/* HEADER */}
      <header className="header">
        <span className="logo-text">Mita Design</span>
        <Clock />
      </header>

      {/* PROFILE SECTION */}
      <section className="profile-section">
        <div className="avatar-wrapper">
          <Image src="/images/avatar.png" alt="Mita" width={80} height={80} className="avatar-img" />
          <div className="status-dot"></div>
        </div>
        <div className="profile-info">
          <h1 className="profile-name">
            Mita <Image src="/images/verified.svg" alt="Verified" width={20} height={20} className="verified-icon" />
          </h1>
          <p className="profile-title">Framer Web Designer</p>
          <p className="profile-bio">
            I build and share Framer templates - so you can <strong>skip the blank canvas</strong> and focus on what actually matters.
          </p>
        </div>
      </section>

      {/* CTA BOX */}
      <div className="cta-box">
        <div className="cta-icon">
          <Image src="/images/sparkle.svg" alt="Sparkle" width={20} height={20} />
        </div>
        <p>3 free templates in the works. Sign up to get them first.</p>
      </div>

      {/* SOCIAL LINKS */}
      <div className="links-section">
        <hr className="divider" />
        <a href="mailto:itsmitadesign@gmail.com" className="link-item">
          <span className="link-icon">✉️</span>
          <span className="link-text">itsmitadesign@gmail.com ↗</span>
        </a>
        <hr className="divider" />
        <a href="https://x.com/itsmitadesign" target="_blank" rel="noopener noreferrer" className="link-item">
          <span className="link-icon">𝕏</span>
          <span className="link-text">@itsmitadesign ↗</span>
        </a>
        <hr className="divider" />
      </div>

      {/* SNEAK PEEK */}
      <section className="sneak-peek-section">
        <h2 className="sneak-peek-title">Sneak a peek at<br/>what&apos;s coming.</h2>
        <p className="sneak-peek-desc">
          Designs done. Currently building in Framer. Check out the previews below.
        </p>

        <div className="portfolio-previews">
          <motion.div 
            className="preview-card p1"
            initial={{ opacity: 0, y: 30, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: -5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
          >
            <Image src="/images/preview1.png" alt="Preview 1" width={300} height={200} layout="responsive" />
          </motion.div>
          <motion.div 
            className="preview-card p2"
            initial={{ opacity: 0, y: 30, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
          >
            <Image src="/images/preview2.png" alt="Preview 2" width={300} height={200} layout="responsive" />
          </motion.div>
          <motion.div 
            className="preview-card p3"
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
          >
            <Image src="/images/preview3.png" alt="Preview 3" width={300} height={200} layout="responsive" />
          </motion.div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="form-section">
        <p className="form-meta mono">GET THEM FIRST</p>
        <p className="form-desc">Drop your email and I&apos;ll send you all 3 the moment they&apos;re live. <strong>Free, forever.</strong></p>
        
        <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            <span className="mono label-text">NAME</span>
            <input type="text" placeholder="Jane Smith" className="form-input" />
          </label>
          <label>
            <span className="mono label-text">EMAIL</span>
            <input type="email" placeholder="jane@framer.com" className="form-input" />
          </label>
          <button type="submit" className="form-btn">Send me the templates</button>
        </form>
      </section>

      {/* FOOTER WATERMARK */}
      <footer className="footer-watermark">
        Mita Design
      </footer>

      {/* FLOATING MADE IN FRAMER BADGE */}
      <div className="made-in-framer">
        <span className="mif-icon">⚑</span> Made in Framer
      </div>
    </div>
  );
}
