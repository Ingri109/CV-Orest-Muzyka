import { useState, useEffect } from "react";
import Image from "next/image";
import Arrow from "@/icons/arrow.svg";
import { useTranslations } from 'next-intl';





const SkillsComponent = () => {
    const t = useTranslations('Skills');
    const [visibleSkills, setVisibleSkills] = useState(0);
    const [colorIndex, setColorIndex] = useState('');
    const visibleCount = 5;

    const skills = [
        { name: t("Skill1"), level: "55%", width: 'w-[55%]' },
        { name: t("Skill2"), level: "70%", width: 'w-[70%]' },
        { name: t("Skill3"), level: "70%", width: 'w-[70%]' },
        { name: t("Skill4"), level: "60%", width: 'w-[60%]' },
        { name: t("Skill5"), level: "90%", width: 'w-[90%]' },
        { name: t("Skill6"), level: "80%", width: 'w-[80%]' },
        { name: t("Skill7"), level: "80%", width: 'w-[80%]' },
        { name: t("Skill8"), level: "90%", width: 'w-[90%]' },
    ];

    const scrollUp = () => {
        setVisibleSkills((prev) => (prev - 1 + skills.length) % skills.length);
    };

    const scrollDown = () => {
        setVisibleSkills((prev) => (prev + 1) % skills.length);

    };

    const scrollToSkill = (index: number) => {
        const middleIndex = Math.floor(visibleCount / 2);
        const startIndex = (index - middleIndex + skills.length) % skills.length;
        setColorIndex('bg-[#1F1F1F] rounded-xl');
        setTimeout(() => {
            setColorIndex('');
        }, 800)

        setVisibleSkills(startIndex);
    };


    const getVisibleSkills = () => {
        const start = visibleSkills;
        const end = visibleSkills + visibleCount;
        const wrappedSkills = [
            ...skills.slice(start, end),
            ...skills.slice(0, end % skills.length)
        ];

        return wrappedSkills.slice(0, visibleCount);
    };

    return (
        <section id="skills" className="flex flex-col justify-start items-center w-full h-auto bg-[#202020] mt-24">
            <div className=" text-[34px] font-bold text-color1 tracking-widest capitalize mt-8 select-none pointer-events-none">{t('My Skills')}</div>
            <div className="container mx-auto flex justify-evenly items-center space-x-0 mb-8 mt-10 lg:space-x-32 md:space-x-10">
                <div className="hidden flex-col justify-start items-center space-y-4 w-1/3 xl:w-1/5 lg:w-1/4 md:flex">
                    {skills.map((skill, index) => (
                        <div key={index} className="w-full cursor-pointer "
                            onClick={() => scrollToSkill(index)}>
                            <h1 className="text-[20px] font-semibold ml-3">{skill.name}</h1>
                            <div className="bg-color1_3 h-[2px] w-full "></div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-center items-center bg-black rounded-xl w-10/12 h-auto px-8 py-3 space-y-5 shadow-xl xl:w-5/12 lg:w-6/12 md:w-7/12">
                    <Image onClick={scrollUp} src={Arrow} alt="Arrow" className="w-full h-6 cursor-pointer">
                    </Image>
                    {getVisibleSkills().map((skill, index) => (
                        <div key={index} className={`flex flex-col justify-start items-stretch w-full px-4 py-2.5  ${index === 2 && colorIndex}`}>
                            <div className="flex flex-row items-center justify-between">
                                <h1 className="text-[20px] font-bold ml-3 lg:text-[22px] md:text-[18px]">{skill.name}</h1>
                                <h2 className="text-[18px] font-bold mr-3 lg:text-[20px] md:text-[16px]">{skill.level}</h2>
                            </div>
                            <div className=" bg-white w-full rounded-full h-[4px] felx items-start">
                                <div className={`bg-color1 ${skill.width} rounded-full h-[4px] felx items-start`}>
                                </div>
                            </div>

                        </div>
                    ))}
                    <Image onClick={scrollDown} src={Arrow} alt="Arrow" className="w-full h-6 cursor-pointer rotate-180">
                    </Image>
                </div>
            </div>
        </section>
    )
}

export default SkillsComponent