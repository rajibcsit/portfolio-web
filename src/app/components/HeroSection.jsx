"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-16 hero-section h-screen" id="home">
      <div className="container mt-24 mx-auto px-12 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              <span>Hello, I&apos;m</span>
              <br />
              <TypeAnimation
                sequence={["Al-Hasan Sarkar", 1000, "SEO Analyst", 1000, "Digital Marketer", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-lg sm:text-xl mb-6 lg:text-2xl leading-relaxed">
              I&apos;m Al-Hasan Sarkar, Former SEO Analysis at Finch Data Soft. Currently, I&apos;m
              working at IOVISIONBD as an SEO Analyst. I&apos;m a Professional SEO Expert With
              Digital Marketing experience.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              <Link
                href="/#contact"
                className="px-6 py-3 flex items-center gap-2 w-full sm:w-auto rounded-full font-bold transition-all duration-300"
                style={{
                  background: "linear-gradient(to right, #f7971e, #ffd200)",
                  color: "#fff",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12H8m0 0l4-4m-4 4l4 4m8-12a2 2 0 00-2-2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4z"
                  />
                </svg>
                Hire Me
              </Link>
              <Link
                href="/"
                className="px-6 py-3 flex items-center gap-2 w-full sm:w-auto rounded-full font-bold transition-all duration-300"
                style={{
                  background: "linear-gradient(to right, #42a5f5, #007bff)",
                  color: "#fff",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
                </svg>
                Download CV
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
              <Image
                src="/images/profile.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={250}
                height={250}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
