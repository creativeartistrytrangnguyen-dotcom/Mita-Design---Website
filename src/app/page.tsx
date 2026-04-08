"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X, ArrowUpRight } from "lucide-react";
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
  const constraintsRef = useRef<HTMLDivElement>(null);

  const previews = [
    { id: "p1", src: "/images/preview1.png", alt: "Preview 1", left: "10%", top: "15%", rotate: -5 },
    { id: "p3", src: "/images/preview3.png", alt: "Preview 3", left: "55%", top: "10%", rotate: 14 },
    { id: "p2", src: "/images/preview2.png", alt: "Preview 2", left: "35%", top: "45%", rotate: -7 },
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
        throw new Error();
      }
    } catch (err) {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
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
                3 free templates in the works. Sign up to get them first.
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

        <div className="relative z-10 flex flex-col">
          
          {/* Mobile Header/Profile */}
          <div className="md:hidden flex flex-col gap-8 p-6 bg-white border-b border-[rgba(125,125,125,0.1)]">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#7e7e7e]">Mita Design</span>
              <Clock />
            </div>
            <div className="flex flex-col gap-4">
               <div className="relative w-16 h-16 rounded-full overflow-hidden">
                 <Image src="/images/avatar.png" alt="Mita" fill className="object-cover" />
               </div>
               <div className="flex flex-col gap-1">
                 <h2 className="text-xl font-medium text-[#121212]">Mita</h2>
                 <p className="text-sm text-[#7e7e7e]">Framer Web Designer</p>
               </div>
               <p className="text-sm text-[#7e7e7e] leading-relaxed">
                 I build and share Framer templates - so you can <span className="font-medium text-[#1a1a1a]">skip the blank canvas</span> and focus on what actually matters.
               </p>
            </div>
          </div>

          {/* Title Section - Aligned with Sidebar Title */}
          <div className="p-6 lg:px-10 lg:pt-10"> 
            <div className="flex flex-col gap-6">
                <h1 className="text-[38px] md:text-[48px] lg:text-[64px] leading-[1em] font-normal tracking-[-0.05em] text-[#080808]">
                  Sneak a peek at<br />what&apos;s coming.
                </h1>
                <p className="text-base text-[#7e7e7e] max-w-lg leading-relaxed">
                  Designs done. Currently building in Framer.<br />Check out the previews below.
                </p>
            </div>
          </div>

          {/* Portfolio Wall - Fixed Drag & Size */}
          <div className="px-6 md:px-12 lg:px-10 py-8 lg:py-16">
            <div 
              ref={constraintsRef}
              className="relative w-full h-[320px] lg:h-[500px] overflow-visible"
            >
              {previews.map((item) => (
                <motion.div
                  key={item.id}
                  drag
                  dragConstraints={constraintsRef}
                  dragElastic={0.2}
                  dragMomentum={false}
                  dragTransition={{ bounceStiffness: 400, bounceDamping: 30 }}
                  initial={false}
                  whileHover={{ scale: 1.01, zIndex: 100, rotate: 0 }}
                  whileTap={{ cursor: "grabbing" }}
                  className="absolute w-[34%] max-w-[340px] aspect-[340/191] cursor-grab"
                  style={{
                    left: item.left,
                    top: item.top,
                    rotate: item.rotate
                  }}
                  onClick={() => setActiveImage(item.src)}
                >
                  <div className="w-full h-full bg-white rounded-[24px] p-2 shadow-2xl border border-[rgba(0,0,0,0.05)] overflow-hidden">
                    <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                      <Image src={item.src} alt={item.alt} fill className="object-cover" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="px-6 md:px-12 lg:px-16 py-12 lg:pt-0 lg:pb-24 flex justify-center relative">
            {/* White Gradient Container */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/100 pointer-events-none" />
            
            <div className="bg-white rounded-[24px] border border-dashed border-[rgba(0,0,0,0.1)] p-8 w-full max-w-[480px] relative z-10 transition-all hover:bg-gray-50/50">
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
                    {loading ? "Sending..." : "Send me the templates"}
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

          {/* Footer Logo Watermark - Aligned to Bottom Sidebar */}
          <div className="px-6 lg:px-10 pb-[24px] lg:pb-[40px] relative overflow-hidden mt-auto">
             <div className="relative w-full aspect-[5/1] select-none pointer-events-none overflow-hidden">
                <Image src="/images/mita-logo-watermark.png" alt="Mita Design" fill className="object-contain" />
                {/* 100% relative overlay to create gradient coverage */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-10" />
             </div>
          </div>
        </div>

        {/* Top/Bottom Fade Overlays */}
        <div className="fixed top-0 right-0 left-0 md:left-[300px] lg:left-[400px] h-20 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
        <div className="fixed bottom-0 right-0 left-0 md:left-[300px] lg:left-[400px] h-20 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
      </main>

      {/* LIGHTBOX MODAL - Enlarged */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/90 backdrop-blur-3xl transition-all"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              drag dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
              dragElastic={0.2}
              className="relative h-[85vh] w-[90vw] flex items-center justify-center bg-transparent p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
                <Image src={activeImage} alt="Preview" fill className="object-contain" />
              </div>
            </motion.div>
            <button className="absolute top-8 right-8 p-3 bg-white/80 hover:bg-white rounded-full transition-all shadow-md z-[110]" onClick={() => setActiveImage(null)}>
               <X className="w-6 h-6 text-gray-800" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
