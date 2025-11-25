/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'

import { Button } from '@/components/ui/button'

import {FiDownload} from 'react-icons/fi'
import {Download} from 'lucide-react';
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
import DownloadButton from '@/components/DownloadButton';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
return(
  <section className="h-ful">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-6 xl:pb-20">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl text-black/80 ">
            <TypeAnimation
              sequence={[
                'Software Developer',
                2000,
                'Full Stack Developer',
                2000,
                'React Native Developer',
                2000,
                'Odoo Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
          <h1 className="h1 text-black/80">Hello I'm <br />
           <span className="text-accent">
           Ismail Bouaichi
            </span>
            </h1>

          <p className="max-w-[500px] mb-9 text-black/80">
           And This is My Portfolio I've Do My Best to Represent My Self and My Skills in This Web App
          </p>
         <div className="flex flex-col xl:flex-row items-center gap-8">
         <DownloadButton />
          <div className="mb-8 xl:mb-0">
            <Social
            
            containerStyles="flex gap-6"

            iconStyles=" w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-[#E6D2C0] hover:text-accent hover:border-[#E6D2C0] hover:transition-all duration-500"
            />
          </div>
         </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
    </div>
   
  </section>
)
  
}

export default Home
