"use client";
import { AuroraBackground } from '@/components/ui/aurora-background';
// import React from 'react';
import { motion } from "framer-motion";
import Link from "next/link";

export function AuroraBackgroundDemo() {
  return (

    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-4xl md:text-7xl font-bold dark:text-white text-center text-purple-500 sm:text-9xl">
          Miss Rent Sta arrivando
        </div>
        <div className="font-extralight text-2xl md:text-6xl dark:text-neutral-200 py-4 text-purple-900">
          E sarà tutto diverso.
        </div>
        <Link href="https://instagram.com/missrent.it" className="bg-violet-500 dark:bg-white rounded-full border-2 border-white w-fit text-white dark:text-black px-4 py-2 hover:bg-violet-600 hover:border-violet-600" target="_blank">
          Seguici
        </Link>
      </motion.div>
    </AuroraBackground>
  );
}

const Aurora = () => {
  return (
    <>
      <div className="w-full h-screen">
        <AuroraBackgroundDemo />
      </div>
      {/* <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Miss Rent Sta arrivando
        </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            And this, is chemical burn.
          </div>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Debug now
          </button>
        </motion.div>
      </AuroraBackground> */}
    </>
  );
}
export default Aurora;