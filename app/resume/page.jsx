"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FaCss3, FaReact, FaLaravel, FaJs, FaHtml5, FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiDotnet, SiOdoo, SiSupabase, SiNextdotjs, SiDocker, SiPhp } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// Newest first; positions and durations are in translations/*.js (same order).
const expCompanies = [
  "YOMAX (LCD Innovation)",
  "Freelance - Bricollano",
  "Freelance - Naqiago",
  "Association Des Diabétiques Du Haouz",
  "Mandi Tech Info",
  "Smart Influencer",
  "Solution Dev",
];

const educationInstitutions = [
  "Certiport (Pearson VUE) - code w948m-H9sk",
  "Certiport (Pearson VUE) - code MQ4y-s4NX",
  "FST Beni Mellal",
  "OFPPT",
  "Sahnone High School",
];

const skillList = [
  { icon: <FaHtml5 />, name: "html 5", color: "#e44d26" },
  { icon: <FaCss3 />, name: "css 3", color: "#264de4" },
  { icon: <FaJs />, name: "javascript", color: "#f7df1e" },
  { icon: <FaReact />, name: "react.js", color: "#61dafb" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "#000000" },
  { icon: <FaLaravel />, name: "laravel", color: "#ff2d20" },
  { icon: <SiPhp />, name: "php", color: "#777BB4" },
  { icon: <SiDocker />, name: "docker", color: "#2496ED" },
  { icon: <SiMysql />, name: "sql", color: "#00618a" },
  { icon: <SiTailwindcss />, name: "tailwind.css", color: "#43a8b2" },
  { icon: <SiDotnet />, name: "C#", color: "#512BD4" },
  { icon: <FaReact />, name: "React Native", color: "#61dafb" },
  { icon: <SiOdoo />, name: "Odoo", color: "#714B67" },
  { icon: <SiSupabase />, name: "Supabase", color: "#3ECF8E" },
  { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
];

const Resume = () => {
  const { t, tr } = useLanguage();

  const aboutInfo = [
    { fieldName: t("resume.about.nameLabel"), fieldValue: "Ismail Bouaichi" },
    { fieldName: t("resume.about.nationalityLabel"), fieldValue: t("resume.about.nationalityValue") },
    { fieldName: t("resume.about.emailLabel"), fieldValue: "Ismailbouaichi10@gmail.com" },
    { fieldName: t("resume.about.phoneLabel"), fieldValue: "(+212)-631-19-23-23" },
  ];

  const expItems = expCompanies.map((company, i) => ({
    company,
    position: tr.resume.experience.items[i].position,
    duration: tr.resume.experience.items[i].duration,
  }));

  const educationItems = educationInstitutions.map((institution, i) => ({
    isntitution: institution,
    degree: tr.resume.education.items[i].degree,
    duration: tr.resume.education.items[i].duration,
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-12"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">{t("resume.tabs.experience")}</TabsTrigger>
            <TabsTrigger value="education">{t("resume.tabs.education")}</TabsTrigger>
            <TabsTrigger value="skills">{t("resume.tabs.skills")}</TabsTrigger>
            <TabsTrigger value="about">{t("resume.tabs.about")}</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-accent">{t("resume.experience.title")}</h3>
                <p className="max-w-[600px] text-accent mx-auto xl:mx-0">{t("resume.experience.description")}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {expItems.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-white/90">{item.duration}</span>
                        <h3 className="text-xl text-white max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-white/60"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-accent">{t("resume.education.title")}</h3>
                <p className="max-w-[600px] mx-auto xl:mx-0 text-accent">{t("resume.education.description")}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {educationItems.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-white/90">{item.duration}</span>
                        <h3 className="text-lg text-white max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-white/60"></span>
                          <p className="text-white/60">{item.isntitution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div>
                  <h3 className="text-4xl font-bold text-accent">{t("resume.skills.title")}</h3>
                  <p className="max-w-[600px] mx-auto xl:mx-0 text-accent">{t("resume.skills.description")}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger
                            className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group"
                            style={{ "--hover-color": skill.color }}
                          >
                            <div className="text-6xl duration-300 group-hover:text-[var(--hover-color)]">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <div className="capitalize">{skill.name}</div>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-accent">{t("resume.about.title")}</h3>
                <p className="max-w-[600px] mx-auto xl:mx-0 text-accent">{t("resume.about.description")}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {aboutInfo.map((item, index) => (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-accent">{item.fieldName}</span>
                      <span className="text-sm text-accent">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
