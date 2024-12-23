"use client";
import { TextEffect } from "./ui/text-effect";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div className="w-full h-svh p-5 pt-20">
      <motion.div className="w-full h-full bg-white rounded-3xl relative">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover rounded-3xl absolute z-0 top-0 left-0"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="gradient z-10 absolute w-full h-1/2 bg-gradient-to-b from-[#0000] to-[#000] bottom-0 rounded-b-3xl opacity-60"
        ></motion.div>
        <motion.div
          className="flex flex-col h-full w-full bg-slate-200 justify-end pb-12 gap-10 rounded-3xl z-10"
        >
          <TextEffect
            per="line"
            as="h3"
            preset="slide"
            delay={2}
            className="lg:text-7xl md:text-7xl sm:text-7xl text-4xl mx-3 text-center text-white z-10 break-all"
          >
            Ihr Erfolg, unsere Kreativität – gemeinsam sichtbar wachsen.
          </TextEffect>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="z-10"
          >
            <div className="flex justify-center gap-3 flex-col sm:flex-row sm:w-full px-20">
              <button className="group relative inline-flex h-[calc(48px+8px)] items-center justify-start rounded-full bg-red-500 py-1 pl-6 pr-28 font-medium text-neutral-50">
                <span className="z-10 pr-2">Kontakt aufnehmen</span>
                <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-red-400 transition-[width] group-hover:w-[calc(100%-8px)]">
                  <div className="mr-3.5 flex items-center justify-center">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-neutral-50"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
              <button className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center overflow-hidden rounded-full bg-gray-100 px-6 font-medium text-neutral-800">
                <span>Mehr erfahren</span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20"></div>
                </div>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
