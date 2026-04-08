"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./page.css";

function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
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
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const previews = [
    { id: "p1", src: "/images/preview1.png", alt: "Preview 1", className: "preview-card p1" },
    { id: "p3", src: "/images/preview3.png", alt: "Preview 3", className: "preview-card p3" },
    { id: "p2", src: "/images/preview2.png", alt: "Preview 2", className: "preview-card p2" },
  ];

  return (
    <div className="layout-wrapper">
      
      {/* 
        ==============================
        LEFT SIDEBAR (Fixed on Desktop)
        ==============================
      */}
      <aside className="sidebar">
        <header className="header">
          <span className="logo-text">Mita Design</span>
          <Clock />
        </header>

        <section className="profile-section">
          <div className="avatar-wrapper">
            <Image src="/images/avatar.png" alt="Mita" width={64} height={64} className="avatar-img" />
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

        <div className="cta-box">
          <div className="cta-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 17V21M21 19H17M12 3C12 7.97053 7.97053 12 3 12C7.97053 12 12 16.0295 12 21C12 16.0295 16.0295 12 21 12C16.0295 12 12 7.97053 12 3ZM5 3C5 4.10456 4.10456 5 3 5C4.10456 5 5 5.89544 5 7C5 5.89544 5.89544 5 7 5C5.89544 5 5 4.10456 5 3Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
          <p>3 free templates in the works. Sign up to get them first.</p>
        </div>

        <div className="links-section">
          <hr className="divider" />
          <a href="mailto:itsmitadesign@gmail.com" className="link-item">
            <span className="link-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5 5.5L12 13L3.5 5.5M4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </span>
            <span className="link-text">itsmitadesign@gmail.com ↗</span>
          </a>
          <hr className="divider" />
          <a href="https://x.com/itsmitadesign" target="_blank" rel="noopener noreferrer" className="link-item">
            <span className="link-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.1111 13L3 21M19 3L13.0897 9.64914M3 3L16 21H21L8 3H3Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </span>
            <span className="link-text">@itsmitadesign ↗</span>
          </a>
          <hr className="divider" />
        </div>
      </aside>

      {/* 
        ==============================
        RIGHT CONTENT (Scrollable)
        ==============================
      */}
      <main className="content">
        <section className="sneak-peek-section">
          <h2 className="sneak-peek-title">Sneak a peek at<br/>what&apos;s coming.</h2>
          <p className="sneak-peek-desc">
            Designs done. Currently building in Framer.<br/>Check out the previews below.
          </p>

          <div className="portfolio-previews">
            {previews.map((item, index) => (
              <motion.div
                key={item.id}
                layoutId={`preview-container-${item.id}`}
                className={item.className}
                initial={{ opacity: 0, y: 30, rotate: index === 0 ? -5 : index === 2 ? 5 : 0 }}
                animate={{ opacity: 1, y: 0, rotate: index === 0 ? -5 : index === 2 ? 5 : 0 }}
                whileHover={{ scale: 1.05, zIndex: 10, rotate: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveImage(item.src)}
              >
                <div className="image-wrapper">
                  <Image src={item.src} alt={item.alt} fill className="preview-image" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

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
      </main>

      {/* 
        ==============================
        INTERACTIVE LIGHTBOX MODAL
        ==============================
      */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveImage(null)}
          >
            <div className="lightbox-content-wrapper">
              <motion.div
                drag
                dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                dragElastic={0.2}
                className="lightbox-image-container"
                layoutId={`preview-container-${previews.find(p => p.src === activeImage)?.id}`}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
              >
                <Image src={activeImage} alt="Expanded Preview" fill className="expanded-image" />
              </motion.div>
            </div>

            {/* CLOSE BUTTON */}
            <motion.button
              className="lightbox-close-btn"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => setActiveImage(null)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING MADE IN FRAMER BADGE */}
      <div className="made-in-framer">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0h12v12h-12v12h-12v-24z"></path></svg> Made in Framer
      </div>
    </div>
  );
}
