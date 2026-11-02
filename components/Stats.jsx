"use client";

import CountUp from "react-countup";
import { useLanguage } from "@/context/LanguageContext";

const statKeys = [
  { num: 2, textKey: "stats.experience" },
  { num: 26, textKey: "stats.projects" },
  { num: 8, textKey: "stats.technologies" },
  { num: 500, textKey: "stats.commits" },
];

const Stats = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {statKeys.map((item, index) => {
            const text = t(item.textKey);
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
