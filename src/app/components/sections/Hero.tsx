import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero({ t, lang }: { t: any; lang: string }) {
  const isArabic = lang === "ar";

  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#FAFAFA]">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-main/10 via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-main/5 via-transparent to-transparent opacity-80" />
      
      {/* Decorative Grid Overlay (Optional Subtle Texture) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 pt-32 pb-20">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`flex flex-col justify-center ${isArabic ? 'lg:pl-12 text-right' : 'lg:pr-12 text-left'}`}
          dir={isArabic ? 'rtl' : 'ltr'}
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-fit"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-main/5 border border-main/10 text-main font-semibold text-xs md:text-sm tracking-wide mb-8 shadow-sm">
              <Sparkles size={16} className="text-main" />
              {isArabic ? "عناية فائقة وتطوير مستمر" : "Premium & Advanced Haircare"}
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-extrabold mb-6 text-gray-900 tracking-tight leading-[1.15]">
            {t.heroTitle}
          </h1>

          <p className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed font-medium max-w-lg">
            {t.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="#products"
              className="group relative overflow-hidden flex items-center justify-center gap-3 bg-main text-white px-8 py-4 rounded-full font-medium tracking-wide text-lg transition-all duration-500 hover:shadow-[0_10px_40px_rgba(216,31,37,0.3)] hover:-translate-y-1 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              <span className="relative z-10">{t.ctaBtn}</span>
              {isArabic ? (
                <ArrowLeft size={20} className="relative z-10 group-hover:-translate-x-1 transition-transform duration-500 stroke-[1.5]" />
              ) : (
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-500 stroke-[1.5]" />
              )}
            </Link>
            
            <Link
              href="#contact-us"
              className="flex items-center justify-center gap-3 text-gray-700 bg-white hover:text-main px-8 py-4 rounded-full font-medium tracking-wide text-lg transition-all duration-500 w-full sm:w-auto border border-gray-200 hover:border-main/30 hover:bg-main/5 hover:shadow-lg"
            >
              {isArabic ? "تواصل معنا" : "Contact Us"}
            </Link>
          </div>
        </motion.div>

        {/* Image / Visuals */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="relative h-[450px] md:h-[600px] w-full hidden lg:flex justify-center items-center lg:mt-0 mt-8"
        >
          {/* Elegant Minimalist Frame */}
          <div className="relative w-full max-w-[500px] h-full p-2 rounded-[2.5rem] border border-gray-100 bg-white shadow-2xl group">
            <div className="relative w-full h-full rounded-[2.25rem] overflow-hidden">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-1000 z-20 pointer-events-none" />
              <Image
                src="/images/bgHero3.jpg"
                alt="Hevera Premium Haircare"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-[2s] ease-out"
                priority
                quality={100}
              />
              {/* Soft overlay for luxury feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none mix-blend-multiply"></div>
            </div>
            
            {/* Elegant corner accents */}
            <div className="absolute top-0 left-12 w-px h-6 bg-gray-200 -translate-y-1/2" />
            <div className="absolute top-12 left-0 w-6 h-px bg-gray-200 -translate-x-1/2" />
            <div className="absolute bottom-0 right-12 w-px h-6 bg-gray-200 translate-y-1/2" />
            <div className="absolute bottom-12 right-0 w-6 h-px bg-gray-200 translate-x-1/2" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
