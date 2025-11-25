"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: '01',
    title: 'Full Stack Development',
    description: 'End-to-end web application development, from database design to user interface implementation.',
    href: "#"
  },
  {
    num: '02',
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces using React.js and Tailwind CSS.',
    href: ""
  },
  {
    num: '03',
    title: 'Backend Development',
    description: 'Building robust server-side applications with Laravel and SQL databases.',
    href: ""
  },
  {
    num: '04',
    title: 'Mobile Development',
    description: 'Developing cross-platform mobile applications using Flutter and React Native.',
    href: ""
  }
]

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const isActive = activeService === index;
            return (
              <motion.div
               initial={{opacity:0}} 
            animate={{opacity:1,
              transition:{
                delay:1.4,duration:0.4,ease:"easeIn"
              }}}
                key={index}
                onClick={() => setActiveService(isActive ? null : index)}
                className={`relative flex flex-col cursor-pointer overflow-hidden transition-all duration-500 p-10 rounded-[32px] border min-h-[280px]
                  ${isActive 
                    ? 'bg-accent shadow-2xl border-transparent justify-start' 
                    : 'bg-white hover:bg-gray-50 border-black/10 hover:shadow-xl hover:border-transparent justify-center items-center'
                  }`}
              >
                {/* Background Decoration for Active State */}
                {isActive && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.05, scale: 1 }}
                        className="absolute -right-4 -bottom-10 text-[200px] font-extrabold text-white leading-none pointer-events-none select-none z-0"
                    >
                        {service.num}
                    </motion.div>
                )}

                {/* Number - Always visible, centered when inactive */}
                <div 
                  className={`font-extrabold leading-none transition-all duration-500 z-10 ${isActive ? 'text-white text-5xl mb-6' : 'text-transparent text-8xl'}`}
                  style={{
                    WebkitTextStroke: isActive ? 'none' : '1px #000000'
                  }}
                >
                  {service.num}
                </div>

                {/* Content - Only visible when active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="w-full flex flex-col gap-6 z-10"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <h2 className="text-[32px] xl:text-[42px] font-bold leading-tight text-white">
                          {service.title}
                        </h2>
                        <Link 
                          href={service.href} 
                          className="w-[60px] h-[60px] rounded-full bg-white text-black flex justify-center items-center hover:bg-[#E6D2C0] transition-all duration-300 flex-shrink-0"
                        >
                          <BsArrowDownRight className="text-2xl" />
                        </Link>
                      </div>
                      
                      <p className="text-white/80 text-base xl:text-lg leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="w-full h-[1px] bg-white/20"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Services