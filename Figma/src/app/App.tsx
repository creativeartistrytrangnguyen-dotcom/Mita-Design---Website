import svgPaths1200 from "../imports/svg-b4gz359txo";
import svgPaths744 from "../imports/svg-6caim7c31f";
import svgPaths375 from "../imports/svg-kfccjqghb8";
import imgLayout from "figma:asset/3f05a2df57352de96b7d07f8f1e1d5d45a144b18.png";
import imgNonwxt6FboNj3VohkdVcwBFihWkPng from "figma:asset/e0df9340fc472c7fdb7f8b25965241a78fc961e3.png";
import imgRkolROtjr7Y7I4WEh7OhM2IWlVqPng from "figma:asset/edda7bce57eab3f45dd3bd76fd87ddc46d7b0c19.png";
import imgAdUwRavIurbGew1Qb1M0N0H8Png from "figma:asset/c952534cfa46c32b08ac09241dd02ea5b304577b.png";
import imgMitaDesign2 from "figma:asset/cb17912e8cff45947f704720ba23cd73e9ef1396.png";
import imgIhDnDzeC30GCzjqHbLsgDs4ZuQuPng1 from "figma:asset/3ddaef180505b542a05eacbe7347ca0a71a9b196.png";
import { imgIhDnDzeC30GCzjqHbLsgDs4ZuQuPng, imgShimmer } from "../imports/svg-qvl6q";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";

// Use the svgPaths from the 1200px import for consistency
const svgPaths = svgPaths1200;

function App() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex min-h-screen bg-white overflow-x-hidden">
      {/* Sidebar - Fixed on desktop/tablet, hidden on mobile */}
      <aside className="hidden min-[744px]:flex fixed left-0 top-0 h-screen w-[300px] lg:w-[400px] flex-col border-r border-dashed border-[rgba(125,125,125,0.2)] flex-shrink-0 overflow-y-auto">
        <div className="flex flex-col justify-between min-h-full p-6 md:pt-9 lg:pt-9">
          {/* Top Section */}
          <div className="flex flex-col gap-12">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="font-['Geist:Regular',sans-serif] text-sm text-[#7e7e7e] tracking-[-0.98px]">
                Mita Design
              </div>
              <div className="flex items-center gap-2 text-xs font-['Geist_Mono:Regular',sans-serif] text-[#7e7e7e] tracking-[0.48px]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p4cb1e00} stroke="#7E7E7E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                </svg>
                17:17:41 GMT
              </div>
            </div>

            {/* Profile */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                {/* Avatar with status */}
                <div className="relative w-[78px] h-[78px]">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <img
                      src={imgIhDnDzeC30GCzjqHbLsgDs4ZuQuPng1}
                      alt="Mita"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-[3px] right-[3px] w-[15px] h-[15px] bg-white rounded-full">
                    <div className="absolute left-[2.34px] top-[2.34px] w-[10px] h-[10px] bg-[#16bf5e] rounded-full shadow-[0px_0px_0px_3.62px_white]" />
                  </div>
                </div>

                {/* Name and badge */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-2xl font-['Geist:Regular',sans-serif] text-[#121212] tracking-[0.24px]">
                      Mita
                    </span>
                    <svg className="w-[19px] h-[19px]" fill="none" viewBox="0 0 19 17.8824">
                      <path
                        clipRule="evenodd"
                        d={svgPaths.p5064a00}
                        fill="#1DB7F9"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-base font-['Geist:Regular',sans-serif] text-[#7e7e7e] tracking-[0.16px]">
                    Framer Web Designer
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="text-base font-['Geist:Regular',sans-serif] text-[#7e7e7e] tracking-[0.16px] leading-6">
                <span className="md:hidden lg:inline">I build and share Framer templates - so you can </span>
                <span className="hidden md:inline lg:hidden">I build and share Framer templates - so you can </span>
                <span className="font-['Geist:Bold',sans-serif] font-bold">skip the blank canvas</span>
                <span className="md:hidden lg:inline"> and focus on what actually matters.</span>
                <span className="hidden md:inline lg:hidden"> and focus on what actually matters.</span>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-[rgba(125,125,125,0.07)] rounded-xl p-5 flex items-center gap-3">
              <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                <ExternalLink className="w-5 h-5 text-[#080808]" />
              </div>
              <div className="text-sm font-['Geist:Regular',sans-serif] text-[#7e7e7e] tracking-[0.14px] leading-5">
                3 free templates in the works. Sign up to get them first.
              </div>
            </div>
          </div>

          {/* Contact Links - Always at bottom */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between py-3 border-t border-b border-dashed border-[rgba(125,125,125,0.2)]">
              <svg width="17" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5 5.5L12 13L3.5 5.5M4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19Z" stroke="#7E7E7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="flex items-center gap-2 text-sm font-['Geist:Regular',sans-serif] text-[#7e7e7e] tracking-[0.14px]">
                itsmitadesign@gmail.com
                <ExternalLink className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-dashed border-[rgba(125,125,125,0.2)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.1111 13L3 21M19 3L13.0897 9.64914M3 3L16 21H21L8 3H3Z" stroke="#7E7E7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="flex items-center gap-2 text-sm font-['Geist:Regular',sans-serif] text-[#7e7e7e] tracking-[0.14px]">
                @itsmitadesign
                <ExternalLink className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content - Scrollable with left margin for sidebar */}
      <main className="flex-1 min-[744px]:ml-[300px] lg:ml-[400px] flex flex-col relative overflow-hidden h-screen overflow-y-auto">
        {/* Background pattern */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src={imgLayout}
            alt=""
            className="absolute h-full w-[134.8%] left-[-17.4%] md:left-0 md:w-full top-0 object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-col">
          {/* Mobile Header */}
          <div className="min-[744px]:hidden flex items-center justify-between p-6 bg-white">
            <div className="font-['Geist:Regular',sans-serif] text-sm text-[#7e7e7e] tracking-[-0.98px]">
              Mita Design
            </div>
            <div className="flex items-center gap-2 text-xs font-['Geist_Mono:Regular',sans-serif] text-[#7e7e7e] tracking-[0.48px]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.p4cb1e00} stroke="#7E7E7E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
              </svg>
              17:17:41 GMT
            </div>
          </div>

          {/* Mobile Profile */}
          <div className="min-[744px]:hidden p-6 bg-white flex flex-col gap-[68px]">
            <div className="flex flex-col gap-[18px]">
              {/* Avatar with status */}
              <div className="relative w-[78px] h-[78px]">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <img
                    src={imgIhDnDzeC30GCzjqHbLsgDs4ZuQuPng1}
                    alt="Mita"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-[3px] right-[3px] w-[15px] h-[15px] bg-white rounded-full">
                  <div className="absolute left-[2.34px] top-[2.34px] w-[10px] h-[10px] bg-[#16bf5e] rounded-full shadow-[0px_0px_0px_3.62px_white]" />
                </div>
              </div>

              {/* Name and badge */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-['Geist:Regular',sans-serif] text-[#121212] tracking-[0.24px]">
                    Mita
                  </span>
                  <svg className="w-[19px] h-[19px]" fill="none" viewBox="0 0 19 17.8824">
                    <path
                      clipRule="evenodd"
                      d={svgPaths.p5064a00}
                      fill="#1DB7F9"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-base font-['Geist:Regular',sans-serif] text-[#7e7e7e] tracking-[0.16px]">
                  Framer Web Designer
                </div>
              </div>

              {/* Bio */}
              <div className="text-base font-['Geist:Regular',sans-serif] text-[#7e7e7e] tracking-[0.16px] leading-6">
                I build and share Framer templates - so you can{' '}
                <span className="font-['Geist:Bold',sans-serif] font-bold">skip the blank canvas</span> and focus on
                what actually matters.
              </div>

              {/* CTA Box */}
              <div className="bg-[rgba(125,125,125,0.07)] rounded-xl p-5 flex items-center gap-3">
                <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="w-5 h-5 text-[#080808]" />
                </div>
                <div className="text-sm font-['Geist:Regular',sans-serif] text-[#7e7e7e] tracking-[0.14px] leading-5">
                  3 free templates in the works. Sign up to get them first.
                </div>
              </div>
            </div>

            {/* Contact Links */}
            <div className="flex flex-col -mx-6">
              <div className="flex items-center justify-between py-3 px-6 border-t border-b border-dashed border-[rgba(125,125,125,0.2)]">
                <svg width="17" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5 5.5L12 13L3.5 5.5M4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19Z" stroke="#7E7E7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="flex items-center gap-2 text-sm font-['Geist:Regular',sans-serif] text-[#7e7e7e] tracking-[0.14px]">
                  itsmitadesign@gmail.com
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-center justify-between py-3 px-6 border-b border-dashed border-[rgba(125,125,125,0.2)]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.1111 13L3 21M19 3L13.0897 9.64914M3 3L16 21H21L8 3H3Z" stroke="#7E7E7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="flex items-center gap-2 text-sm font-['Geist:Regular',sans-serif] text-[#7e7e7e] tracking-[0.14px]">
                  @itsmitadesign
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Title Section */}
          <div className="bg-gradient-to-b from-white to-transparent p-6 md:p-6 lg:px-12 lg:pt-7 lg:pb-10">
            <div className="flex flex-col gap-2">
              <h1 className="font-['Geist:Regular',sans-serif] text-[38px] md:text-[38px] lg:text-[60px] leading-[40px] md:leading-[40px] lg:leading-[60px] tracking-[-3px] text-[#080808]">
                Sneak a peek at<br />what's coming.
              </h1>
              <p className="font-['Geist:Regular',sans-serif] text-base text-[#7e7e7e] tracking-[0.16px] leading-6">
                Designs done. Currently building in Framer.<br />Check out the previews below.
              </p>
            </div>
          </div>

          {/* Work Preview Cards */}
          <div className="relative w-full h-[315px] md:h-[315px] lg:h-[496px] px-6">
            {/* Transparent container with border - fills the height */}
            <div 
              ref={constraintsRef}
              className="relative w-full h-full border-2 border-dashed border-[rgba(125,125,125,0.3)] rounded-lg"
            >
              {/* Card 1 */}
              <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.1}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px_0px_0px_1px_rgba(0,0,0,0.18),0px_12px_24px_0px_rgba(0,0,0,0.12)",
                  zIndex: 10
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ x: 20, y: 20, rotate: -5 }}
                className="absolute w-[161px] h-[115px] cursor-grab active:cursor-grabbing"
              >
                <div className="bg-white rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.12),0px_6px_12px_0px_rgba(0,0,0,0.04)] w-full h-full relative overflow-hidden border-[5px] border-white">
                  <img
                    src={imgNonwxt6FboNj3VohkdVcwBFihWkPng}
                    alt="Work preview 1"
                    className="absolute inset-[5px] w-[calc(100%-10px)] h-[103.26%] object-cover rounded-md pointer-events-none"
                  />
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.1}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px_0px_0px_1px_rgba(0,0,0,0.18),0px_12px_24px_0px_rgba(0,0,0,0.12)",
                  zIndex: 10
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ x: 80, y: 60, rotate: -7 }}
                className="absolute w-[161px] h-[115px] cursor-grab active:cursor-grabbing"
              >
                <div className="bg-white rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.12),0px_6px_12px_0px_rgba(0,0,0,0.04)] w-full h-full relative overflow-hidden border-[5px] border-white">
                  <img
                    src={imgRkolROtjr7Y7I4WEh7OhM2IWlVqPng}
                    alt="Work preview 2"
                    className="absolute inset-[5px] w-[calc(100%-10px)] h-[108.83%] object-cover rounded-md pointer-events-none"
                  />
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.1}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px_0px_0px_1px_rgba(0,0,0,0.18),0px_12px_24px_0px_rgba(0,0,0,0.12)",
                  zIndex: 10
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ x: 140, y: 15, rotate: 14 }}
                className="absolute w-[161px] h-[115px] cursor-grab active:cursor-grabbing"
              >
                <div className="bg-white rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.12),0px_6px_12px_0px_rgba(0,0,0,0.04)] w-full h-full relative overflow-hidden border-[5px] border-white">
                  <img
                    src={imgAdUwRavIurbGew1Qb1M0N0H8Png}
                    alt="Work preview 3"
                    className="absolute inset-[5px] w-[calc(100%-10px)] h-[136.95%] object-cover rounded-md pointer-events-none"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-gradient-to-b from-transparent to-white flex justify-center pt-9 pb-24 px-6">
            <div className="bg-white rounded-[20px] border border-dashed border-[rgba(125,125,125,0.2)] p-7 w-full min-[744px]:w-[388px] lg:w-auto lg:min-w-[388px] lg:max-w-[450px]">
              <div className="flex flex-col gap-7">
                <div className="font-['Geist_Mono:Regular',sans-serif] text-xs text-[#7e7e7e] tracking-[0.48px] uppercase opacity-70">
                  GET THEM FIRST
                </div>
                <div className="font-['Geist:Regular',sans-serif] text-base text-[#7e7e7e] tracking-[0.16px] leading-6">
                  Drop your email and I'll send you all 3 the moment they're live.{' '}
                  <span className="font-['Geist:Bold',sans-serif] font-bold">Free</span>,{' '}
                  <span className="font-['Geist:Bold',sans-serif] font-bold">forever</span>.
                </div>
                <div className="flex flex-col gap-5">
                  {/* Name Field */}
                  <div className="flex flex-col gap-2">
                    <label className="font-['Geist_Mono:Regular',sans-serif] text-xs text-[#7e7e7e] tracking-[0.48px] uppercase">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Smith"
                      className="h-10 px-3 bg-[rgba(125,125,125,0.06)] rounded-[10px] font-['Geist:Regular',sans-serif] text-sm text-[#999] placeholder:text-[#999] border-none outline-none"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col gap-2">
                    <label className="font-['Geist_Mono:Regular',sans-serif] text-xs text-[#7e7e7e] tracking-[0.48px] uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="jane@framer.com"
                      className="h-10 px-3 bg-[rgba(125,125,125,0.06)] rounded-[10px] font-['Geist:Regular',sans-serif] text-sm text-[#999] placeholder:text-[#999] border-none outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button className="h-10 bg-[#333] text-white rounded-[10px] font-['Geist:Regular',sans-serif] text-sm tracking-[0.14px] hover:bg-[#444] transition-colors">
                    Send me the templates
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Section */}
          <div className="bg-white relative px-6 md:px-6 lg:px-12">
            <div className="relative">
              <img
                src={imgMitaDesign2}
                alt="Mita Design"
                className="w-full opacity-10"
              />
              <div className="absolute -bottom-0 left-0 right-0 h-[190px] bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;