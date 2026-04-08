"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Mail, X } from "lucide-react";
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

  if (!mounted) return <div className="text-xs font-mono text-[#7e7e7e] tracking-[0.48px] opacity-0">00:00:00 GMT+7</div>;

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
    { id: "p1", src: "/images/preview1.png", alt: "Preview 1", initialPos: { x: 20, y: 20, rotate: -5 } },
    { id: "p3", src: "/images/preview3.png", alt: "Preview 3", initialPos: { x: 80, y: 60, rotate: -7 } },
    { id: "p2", src: "/images/preview2.png", alt: "Preview 2", initialPos: { x: 140, y: 15, rotate: 14 } },
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
    <div className="flex min-h-screen bg-white overflow-x-hidden font-sans">
      
      {/* SIDEBAR - Fixed on desktop/tablet */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-[300px] lg:w-[400px] flex-col border-r border-dashed border-[rgba(125,125,125,0.2)] bg-[#F7F7F7] z-20 overflow-y-auto">
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
                    <span className="text-2xl font-semibold text-[#121212] tracking-[0.24px]">Mita</span>
                    <svg className="w-[19px] h-[19px]" fill="none" viewBox="0 0 19 17.8824">
                      <path clipRule="evenodd" d={svgPaths.p5064a00} fill="#1DB7F9" fillRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-base text-[#7e7e7e] tracking-[0.16px]">Framer Web Designer</span>
                </div>
              </div>
              <p className="text-base text-[#7e7e7e] tracking-[0.16px] leading-6">
                I build and share Framer templates - so you can <span className="font-bold text-[#1a1a1a]">skip the blank canvas</span> and focus on what actually matters.
              </p>
            </div>

            {/* CTA Box */}
            <div className="bg-[rgba(125,125,125,0.07)] rounded-xl p-5 flex items-center gap-3">
              <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                <ExternalLink className="w-5 h-5 text-[#080808]" />
              </div>
              <p className="text-sm text-[#7e7e7e] tracking-[0.14px] leading-5">
                3 free templates in the works. Sign up to get them first.
              </p>
            </div>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col">
            <a href="mailto:itsmitadesign@gmail.com" className="flex items-center justify-between py-3 border-t border-dashed border-[rgba(125,125,125,0.2)] hover:opacity-70 transition-opacity">
              <Mail className="w-5 h-5 text-[#7e7e7e]" />
              <div className="flex items-center gap-2 text-sm text-[#7e7e7e]">
                itsmitadesign@gmail.com <ExternalLink className="w-4 h-4" />
              </div>
            </a>
            <a href="https://x.com/itsmitadesign" target="_blank" className="flex items-center justify-between py-3 border-t border-b border-dashed border-[rgba(125,125,125,0.2)] hover:opacity-70 transition-opacity">
              <X className="w-5 h-5 text-[#7e7e7e]" />
              <div className="flex items-center gap-2 text-sm text-[#7e7e7e]">
                @itsmitadesign <ExternalLink className="w-4 h-4" />
              </div>
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
          <div className="md:hidden flex flex-col gap-8 p-6 bg-white border-b border-dashed border-[rgba(125,125,125,0.1)]">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#7e7e7e]">Mita Design</span>
              <Clock />
            </div>
            <div className="flex flex-col gap-4">
               <div className="relative w-16 h-16 rounded-full overflow-hidden">
                 <Image src="/images/avatar.png" alt="Mita" fill className="object-cover" />
               </div>
               <div className="flex flex-col gap-1">
                 <h2 className="text-xl font-bold">Mita</h2>
                 <p className="text-sm text-[#7e7e7e]">Framer Web Designer</p>
               </div>
               <p className="text-sm text-[#7e7e7e] leading-relaxed">
                 I build and share Framer templates - so you can <span className="font-bold text-[#1a1a1a]">skip the blank canvas</span> and focus on what actually matters.
               </p>
            </div>
          </div>

          {/* Title Section */}
          <div className="p-6 md:p-12 lg:px-16 lg:pt-20">
            <h1 className="text-[38px] md:text-[48px] lg:text-[64px] leading-tight font-bold tracking-tight text-[#080808] mb-4">
              Sneak a peek at<br />what&apos;s coming.
            </h1>
            <p className="text-base text-[#7e7e7e] max-w-lg leading-relaxed">
              Designs done. Currently building in Framer. Check out the previews below.
            </p>
          </div>

          {/* Portfolio Wall */}
          <div className="px-6 md:px-12 lg:px-16 py-8">
            <div 
              ref={constraintsRef}
              className="relative w-full h-[320px] lg:h-[500px] border-2 border-dashed border-[rgba(125,125,125,0.2)] rounded-2xl overflow-hidden bg-white/30 backdrop-blur-sm"
            >
              {previews.map((item) => (
                <motion.div
                  key={item.id}
                  drag
                  dragConstraints={constraintsRef}
                  dragElastic={0.1}
                  initial={item.initialPos}
                  whileHover={{ scale: 1.05, zIndex: 50 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute w-[180px] lg:w-[280px] aspect-[4/3] cursor-grab active:cursor-grabbing"
                  onClick={() => setActiveImage(item.src)}
                >
                  <div className="w-full h-full bg-white rounded-xl p-1.5 shadow-xl border border-gray-100">
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <Image src={item.src} alt={item.alt} fill className="object-cover" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="px-6 md:px-12 lg:px-16 py-12 lg:py-24 flex justify-start">
            <div className="bg-white rounded-[24px] border border-dashed border-[rgba(125,125,125,0.2)] p-8 w-full max-w-[480px] shadow-sm">
              <div className="flex flex-col gap-6">
                <span className="text-[10px] font-mono font-bold tracking-[2px] uppercase text-[#7e7e7e]">GET THEM FIRST</span>
                <p className="text-[#7e7e7e] leading-relaxed">
                  Drop your email and I&apos;ll send you all 3 the moment they&apos;re live. <span className="font-bold text-[#1a1a1a]">Free, forever.</span>
                </p>
                
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-mono font-bold text-[#7e7e7e] uppercase">Name</label>
                    <input type="text" name="name" required placeholder="Jane Smith" className="h-12 px-4 bg-[#f2f2f2] rounded-xl outline-none focus:ring-2 focus:ring-[#1a1a1a]/10 transition-all font-medium" disabled={loading} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-mono font-bold text-[#7e7e7e] uppercase">Email</label>
                    <input type="email" name="email" required placeholder="jane@framer.com" className="h-12 px-4 bg-[#f2f2f2] rounded-xl outline-none focus:ring-2 focus:ring-[#1a1a1a]/10 transition-all font-medium" disabled={loading} />
                  </div>
                  <button type="submit" className="h-12 bg-[#1a1a1a] text-white rounded-xl font-bold hover:opacity-90 transition-opacity disabled:opacity-50 mt-2" disabled={loading}>
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

          {/* Footer Logo */}
          <div className="px-6 md:px-12 lg:px-16 pb-20">
             <div className="relative select-none pointer-events-none">
                <h2 className="text-[15vw] font-bold text-[#1a1a1a] opacity-5 text-center leading-none tracking-tighter whitespace-nowrap">
                  Mita Design
                </h2>
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white to-transparent" />
             </div>
          </div>
        </div>

        {/* Top/Bottom Fade Overlays */}
        <div className="fixed top-0 right-0 left-0 md:left-[300px] lg:left-[400px] h-20 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
        <div className="fixed bottom-0 right-0 left-0 md:left-[300px] lg:left-[400px] h-20 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
      </main>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 backdrop-blur-xl transition-all"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              drag dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
              dragElastic={0.2}
              className="relative w-[90vw] md:w-[70vw] aspect-[4/3] shadow-2xl rounded-2xl overflow-hidden bg-white border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={activeImage} alt="Preview" fill className="object-cover" />
            </motion.div>
            <button className="absolute top-8 right-8 p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
               <X className="w-6 h-6 text-gray-600" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
