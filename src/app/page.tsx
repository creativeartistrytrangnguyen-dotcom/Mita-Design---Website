"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X, ArrowUpRight, Maximize2 } from "lucide-react";
import svgPaths from "@/imports/svg-b4gz359txo"; // Defaulting to 1200px paths
import "./globals.css";

// ==============================
// CUSTOM COMPONENTS
// ==============================

function Clock() {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  if (!mounted) return <div className="flex items-center gap-2 text-xs font-mono text-[#7e7e7e] tracking-[0.48px] opacity-0">00:00:00 GMT+7</div>;

  return (
    <div className="flex items-center gap-2 text-xs font-mono text-[#7e7e7e] tracking-[0.48px]">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
        <path d={svgPaths.p4cb1e00} stroke="#7E7E7E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
      </svg>
      {time}
    </div>
  );
}

export default function Home() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [windowWidth, setWindowWidth] = useState(1200);
  const constraintsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isTouchDevice = windowWidth < 1024;
  const hoverScale = isTouchDevice ? 1 : 1.1;

  const isLarge = windowWidth >= 1440;
  const cardWidth = isLarge ? 340 : 268;
  const halfWidth = cardWidth / 2;
  const spacing = windowWidth < 768 ? 30 : windowWidth < 1024 ? 60 : 130;

  const getResponsiveLeft = (cardIndex: number) => {
    if (cardIndex === 1) return `calc(50% - ${halfWidth + spacing}px)`;
    if (cardIndex === 2) return `calc(50% - ${halfWidth}px)`;
    return `calc(50% - ${halfWidth - spacing}px)`;
  };

  const previews = [
    { id: "p1", src: "/images/preview1.png", alt: "Preview 1", left: getResponsiveLeft(1), top: "18%", rotate: -5 },
    { id: "p2", src: "/images/preview2.png", alt: "Preview 2", left: getResponsiveLeft(2), top: "42%", rotate: -7 },
    { id: "p3", src: "/images/preview3.png", alt: "Preview 3", left: getResponsiveLeft(3), top: "12%", rotate: 7 },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus({ type: "success", message: "Success! You're on the list." });
        (e.target as HTMLFormElement).reset();
      } else {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to subscribe");
      }
    } catch (err: any) {
      setStatus({ type: "error", message: err.message || "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white overflow-x-hidden font-sans font-normal text-[#7E7E7E]">
      
      {/* SIDEBAR - Fixed on desktop/tablet */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-[300px] lg:w-[400px] flex-col border-r border-[rgba(125,125,125,0.15)] bg-white z-20 overflow-y-auto">
        <div className="flex flex-col justify-between min-h-full p-6 lg:p-10">
          <div className="flex flex-col gap-12">
            
            {/* Header */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#7e7e7e] tracking-[-0.98px]">Mita Design</span>
              <Clock />
            </div>

            {/* Profile */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <div className="relative w-[78px] h-[78px]">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <Image src="/images/avatar.png" alt="Mita" fill className="object-cover" />
                  </div>
                  <div className="absolute bottom-[3px] right-[3px] w-[15px] h-[15px] bg-white rounded-full">
                    <div className="absolute left-[2.34px] top-[2.34px] w-[10px] h-[10px] bg-[#16bf5e] rounded-full shadow-[0px_0px_0px_3.62px_white]" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-2xl font-medium text-[#121212] tracking-[0.24px]">Mita</span>
                    <svg className="w-[19px] h-[19px]" fill="none" viewBox="0 0 19 17.8824">
                      <path clipRule="evenodd" d={svgPaths.p5064a00} fill="#1DB7F9" fillRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-base text-[#7e7e7e] tracking-[0.16px]">Framer Web Designer</span>
                </div>
              </div>
              <p className="text-base text-[#7e7e7e] tracking-[0.16px] leading-6">
                I build and share Framer templates - so you can <span className="font-medium text-[#1a1a1a]">skip the blank canvas</span> and focus on what actually matters.
              </p>
            </div>

            {/* CTA Box */}
            <div className="bg-[rgba(125,125,125,0.06)] rounded-xl p-5 flex items-center gap-3 -mt-8">
              <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 17V21M21 19H17M12 3C12 7.97053 7.97053 12 3 12C7.97053 12 12 16.0295 12 21C12 16.0295 16.0295 12 21 12C16.0295 12 12 7.97053 12 3ZM5 3C5 4.10456 4.10456 5 3 5C4.10456 5 5 5.89544 5 7C5 5.89544 5.89544 5 7 5C5.89544 5 5 4.10456 5 3Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <p className="text-sm text-[#7e7e7e] tracking-[0.14px] leading-5">
                3 free templates in the works.<br />Sign up to get them first.
              </p>
            </div>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col">
            <a href="mailto:itsmitadesign@gmail.com" className="flex items-center justify-between py-3 border-t border-[rgba(125,125,125,0.15)] hover:opacity-70 transition-opacity group">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#7e7e7e]" />
                <span className="text-sm text-[#7e7e7e]">itsmitadesign@gmail.com</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#7e7e7e] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://x.com/itsmitadesign" target="_blank" className="flex items-center justify-between py-3 border-t border-b border-[rgba(125,125,125,0.15)] hover:opacity-70 transition-opacity group">
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.1111 13L3 21M19 3L13.0897 9.64914M3 3L16 21H21L8 3H3Z" stroke="#7e7e7e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span className="text-sm text-[#7e7e7e]">@itsmitadesign</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#7e7e7e] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 md:ml-[300px] lg:ml-[400px] flex flex-col relative h-screen overflow-y-auto">
        
        {/* Background Dots */}
        <div className="absolute inset-0 pointer-events-none z-0" 
             style={{ 
               backgroundImage: "radial-gradient(#EBEBEB 1.5px, transparent 1.5px)", 
               backgroundSize: "24px 24px" 
             }}>
        </div>

        <div className="relative z-10 flex flex-col min-h-full">
          
          {/* Mobile Header/Profile - No border as requested */}
          <div className="md:hidden flex flex-col gap-8 p-6 bg-white">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#7e7e7e]">Mita Design</span>
              <Clock />
            </div>
            <div className="flex flex-col gap-6">
               <div className="flex flex-col gap-4">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <Image src="/images/avatar.png" alt="Mita" fill className="object-cover" />
                    </div>
                    <div className="absolute bottom-[2px] right-[2px] w-[18px] h-[18px] bg-white rounded-full">
                      <div className="absolute left-[2.5px] top-[2.5px] w-[13px] h-[13px] bg-[#16bf5e] rounded-full shadow-[0px_0px_0px_4px_white]" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <h2 className="text-2xl font-medium text-[#121212]">Mita</h2>
                      <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 19 17.8824">
                        <path clipRule="evenodd" d={svgPaths.p5064a00} fill="#1DB7F9" fillRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base text-[#7e7e7e]">Framer Web Designer</p>
                  </div>
                  <p className="text-base text-[#7e7e7e] leading-relaxed">
                    I build and share Framer templates - so you can <span className="font-medium text-[#1a1a1a]">skip the blank canvas</span> and focus on what actually matters.
                  </p>
               </div>

                {/* Mobile Contact Links */}
                <div className="flex flex-col border-t border-[rgba(125,125,125,0.1)] pt-2">
                  <a href="mailto:itsmitadesign@gmail.com" className="flex items-center justify-between py-4 border-b border-[rgba(125,125,125,0.1)]">
                    <div className="flex items-center gap-3 text-sm text-[#7e7e7e]">
                      <Mail className="w-5 h-5" /> itsmitadesign@gmail.com
                    </div>
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a href="https://x.com/itsmitadesign" target="_blank" className="flex items-center justify-between py-4 border-b border-[rgba(125,125,125,0.1)]">
                    <div className="flex items-center gap-3 text-sm text-[#7e7e7e]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.1111 13L3 21M19 3L13.0897 9.64914M3 3L16 21H21L8 3H3Z" stroke="#7e7e7e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg> @itsmitadesign
                    </div>
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
            </div>
          </div>

          {/* Title Section - Gradient Background */}
          <div className="p-6 lg:px-10 lg:pt-10 bg-gradient-to-b from-white/100 to-white/0"> 
            <div className="flex flex-col gap-6">
                <h1 className="text-[38px] md:text-[48px] lg:text-[64px] leading-[1em] font-normal tracking-[-0.05em] text-[#080808]">
                  Sneak a peek at<br />what&apos;s coming.
                </h1>
                <p className="text-base text-[#7e7e7e] max-w-lg leading-relaxed">
                  Designs done. Currently building in Framer.<br />Check out the previews below.
                </p>
            </div>
          </div>

          {/* Portfolio Wall - Clustered */}
          <div className="px-6 md:px-12 lg:px-10 py-8 lg:py-16">
            <div 
              ref={constraintsRef}
              className="relative w-full h-[416px] lg:h-[500px] overflow-visible"
            >
              {previews.map((item) => (
                  <motion.div
                    key={item.id}
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.1}
                    dragMomentum={false}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    layoutId={item.id}
                    className={`absolute cursor-grab select-none ${windowWidth >= 1440 ? "w-[340px] h-[242px]" : "w-[268px] h-[191px]"}`}
                    style={{
                      left: item.left,
                      top: item.top,
                    }}
                    variants={{
                      rest: { zIndex: 1 },
                      hover: { zIndex: 50 },
                    }}
                  >
                    <motion.div 
                      variants={{
                        rest: { scale: 1, rotate: item.rotate },
                        hover: { scale: hoverScale, rotate: isTouchDevice ? item.rotate : 0 }
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`w-full h-full bg-white rounded-[12px] p-[5px] shadow-2xl border border-[rgba(0,0,0,0.05)] overflow-hidden relative ${isTouchDevice ? "cursor-pointer" : ""}`}
                      onClick={() => {
                        if (isTouchDevice) setActiveImage(item.src);
                      }}
                    >
                    <div className="relative w-full h-full rounded-[8px] overflow-hidden pointer-events-none">
                      <Image src={item.src} alt={item.alt} fill className="object-cover" />
                    </div>

                    {/* Zoom Icon */}
                    <motion.button
                      variants={{
                        rest: { opacity: 0, scale: 0.8 },
                        hover: { opacity: isTouchDevice ? 0 : 1, scale: isTouchDevice ? 0.8 : 1 }
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImage(item.src);
                      }}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-xl shadow-lg flex items-center justify-center cursor-pointer z-20 border border-gray-100/50 hover:bg-white transition-colors"
                    >
                      <Maximize2 className="w-5 h-5 text-gray-800" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="px-6 md:px-12 lg:px-16 py-12 lg:pt-0 lg:pb-24 flex justify-center relative mt-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/100 pointer-events-none" />
            
            <div className="bg-gradient-to-b from-white/0 to-white rounded-[24px] border border-dashed border-[rgba(0,0,0,0.1)] p-8 w-full max-w-[480px] relative z-10 transition-all">
              <div className="flex flex-col gap-6">
                <span className="text-[10px] font-mono font-medium tracking-[2px] uppercase text-[#7e7e7e]">GET THEM FIRST</span>
                <p className="text-[#7e7e7e] leading-relaxed">
                  Drop your email and I&apos;ll send you all 3 the moment they&apos;re live. <span className="font-medium text-[#1a1a1a]">Free, forever.</span>
                </p>
                
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-mono font-medium text-[#7e7e7e] uppercase">Name</label>
                    <input type="text" name="name" required placeholder="Jane Smith" className="h-12 px-4 bg-[#f2f2f2] rounded-xl outline-none focus:ring-1 focus:ring-[#1a1a1a]/20 transition-all font-medium text-[#7E7E7E]" disabled={loading} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-mono font-medium text-[#7e7e7e] uppercase">Email</label>
                    <input type="email" name="email" required placeholder="jane@framer.com" className="h-12 px-4 bg-[#f2f2f2] rounded-xl outline-none focus:ring-1 focus:ring-[#1a1a1a]/20 transition-all font-medium text-[#7E7E7E]" disabled={loading} />
                  </div>
                  <button type="submit" className="h-12 bg-[#1a1a1a] text-white rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50 mt-2" disabled={loading}>
                    {loading ? "Sending..." : "Notify me when it's live"}
                  </button>
                  
                  {status && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`text-center text-sm font-medium ${status.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                      {status.message}
                    </motion.p>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* Footer Logo Watermark - Spacing +30px */}
          <div className="px-6 lg:px-10 pb-[24px] lg:pb-[40px] relative mt-[30px] lg:mt-[50px]">
             <div className="relative w-full select-none pointer-events-none overflow-visible flex items-end">
                <Image src="/images/mita-logo-watermark.png" alt="Mita Design" width={1200} height={400} className="w-full h-auto object-contain object-bottom opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-10" />
             </div>
          </div>
        </div>

        {/* Top Fade Overlay Removed as requested */}
        <div className="fixed bottom-0 right-0 left-0 md:left-[300px] lg:left-[400px] h-20 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
      </main>

      {/* LIGHTBOX MODAL - Hug Content Style + Reduced Border Opacity */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/60 backdrop-blur-xl transition-all"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              layoutId="lightbox"
              className="relative p-[5px] flex items-center justify-center bg-white rounded-[12px] border border-black/[0.035] shadow-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-[8px] overflow-hidden max-w-[90vw] max-h-[70vh]">
                <Image src={activeImage} alt="Preview" width={1200} height={800} className="w-auto h-auto object-contain rounded-[8px]" />
              </div>
            </motion.div>
            
            {/* Close Button - Bottom Center */}
            <motion.button 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mt-8 p-4 bg-white hover:bg-gray-50 rounded-full transition-all shadow-xl z-[110] border border-gray-100" 
              onClick={() => setActiveImage(null)}
            >
               <X className="w-6 h-6 text-gray-800" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
