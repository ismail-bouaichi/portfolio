"use client";

import { Tabs , TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs";
import {
  FaCss3,FaReact,FaLaravel,FaJs,FaHtml5
} from "react-icons/fa"

import {SiTailwindcss,SiCsharp,SiMysql} from "react-icons/si"

import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { color, motion } from "framer-motion";

const about={
  title:"About me",
  description:"I am Ismail Bouaichi, 22 years old. I am a specialized technician in software development. Although I don't have extensive experience, I am passionate about the field of technology and I am ready to learn and fully invest myself in all the opportunities that come my way.",
  info:[
    {
      fieldName:"Name",
      fieldValue:"Ismail Bouaichi"

    },
    {
      fieldName:"Nationality",
      fieldValue:"Moroccan"

    },
    {
      fieldName:"Email",
      fieldValue:"Ismailbouaichi10@gmail.com"

    },
    {
      fieldName:"Phone",
      fieldValue:"(+212)-631-19-23-23"

    },

  ]
}

const exp={
  icon:'/assets/resume/badge.svg',
  title:'My experience',
  description:"This is My Experience That Ive Collect Around The Years",
  items:[
    {
      company:"solution dev",
      position:"full stack",
      duration:"1 month"
    },
    {
      company:"smart influencer",
      position:"full stack",
      duration:"40 days"
    },
      {
      company:"mandi Tech Info",
      position:"full stack",
      duration:"6 months"
    },

  ]
}

const education={
  icon:'/public/assets/resume/cap.svg',
  title:'My education',
  description:"This Is My Education Path",
  items:[
    {
      isntitution:"OFPPT",
      degree:"specialized technician in software development",
      duration:" 2020-2023"
    },

    {
      isntitution:"Bac Pc",
      degree:"Sahnone High School",
      duration:" 2020"
    },
  

  ]
}

const skills={
  title:"My skills",
  description:"This My Skills that ive Earned Around The Years",
  skillList:[
    {
      icon: <FaHtml5/>,
      name:'html 5',
      color:'#e44d26'
    },
    {
      icon: <FaCss3/>,
      name:'css 3',
      color:'#264de4'
    },
    {
      icon: <FaJs/>,
      name:'javascript',
      color:'#f7df1e'
    },
    {
      icon: <FaReact/>,
      name:'react.js',
      color:'#61dafb'
    },
    {
      icon: <FaLaravel/>,
      name:'laravel',
      color:'#ff2d20'
    },
    {
      icon: <SiMysql/>,
      name:'sql',
      color:'#00618a'
    },
    {
      icon: <SiTailwindcss/>,
      name:'tailwind.css',
      color:'#43a8b2'
    },

    {
      icon: <SiCsharp/>,
      name:'csharp',
      color:'#a179dc'
    },
  
  ]
}
const Resume = () => {
  return (
    <motion.div 
    initial={{opacity:0}} 
    animate={{opacity:1,
      transition:{
        delay:2.4,duration:0.4,ease:"easeIn"
      }
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-12"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">

              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-accent">{exp.title}</h3>
                <p className="max-w-[600px] text-accent mx-auto xl:mx-0">{exp.description}</p>
                <ScrollArea className="h-[400px]">
               <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
               {exp.items.map((item,index)=>{
                  return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                    <span className="text-white/90">{item.duration}</span>
                    <h3 className="text-xl text-white max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                    <div className="flex items-center gap-3">
                      <span className="w-[6px] h-[6px] rounded-full bg-white/60"></span>
                      <p className="text-white/60">{item.company}</p>
                    </div>
                  </li>
                })}
               </ul>
                </ScrollArea>
              </div>

            
             
              </TabsContent>
              <TabsContent value="education" className="w-full">

              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-accent">{education.title}</h3>
                <p className="max-w-[600px] mx-auto xl:mx-0 text-accent">{education.description}</p>
                <ScrollArea className="h-[400px]">
               <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
               {education.items.map((item,index)=>{
                  return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                    <span className="text-white/90">{item.duration}</span>
                    <h3 className="text-lg text-white max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                    <div className="flex items-center gap-3">
                      <span className="w-[6px] h-[6px] rounded-full bg-white/60"></span>
                      <p className="text-white/60">{item.isntitution}</p>
                    </div>
                  </li>
                })}
               </ul>
                </ScrollArea>
              </div>

            
             
              </TabsContent>
             <TabsContent value="skills" className="w-full h-full">
             <div className="flex flex-col gap-[30px]">
              <div className="">
                <h3 className="text-4xl font-bold text-accent">{skills.title}</h3>
                <p className="max-w-[600px]  mx-auto xl:mx-0 text-accent">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skill,index)=>{
                  return <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                      <TooltipTrigger
                    className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group"
                    style={{
                      '--hover-color': skill.color,
                    }}
                  >
          <div className="text-6xl duration-300 group-hover:text-[var(--hover-color)]">
            {skill.icon}
                          </div>
                        </TooltipTrigger>

                        <TooltipContent>
                          <div className="capitalize">
                          {skill.name}

                          </div>
                        </TooltipContent>
            
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                })}
              </ul>
             </div>
              </TabsContent>
             <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-accent">{about.title}</h3>
                <p className="max-w-[600px]  mx-auto xl:mx-0 text-accent">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item,index)=>{
                    return<li key={index} className="flex items-center justify-center xl:justify-start gap-4" >
                      <span className="text-accent">
                        {item.fieldName}
                      </span>
                      <span className="text-sm text-accent ">
                        {item.fieldValue}
                      </span>
                    </li>
                  })}
                </ul>
              </div>
              </TabsContent>
          </div>
        </Tabs>
      </div>

    </motion.div>
  )
}

export default Resume
