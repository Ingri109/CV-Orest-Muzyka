"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useMemo } from "react";
import { useTranslations } from "next-intl";
import HTML from "@/imgs/HTML.svg";
import CSS from "@/imgs/CSS.svg";
import JS from "@/imgs/JS.svg";
import TS from "@/imgs/TS.svg";
import TailwindCSS from "@/imgs/Tailwind css.svg";
import ReactSVG from "@/imgs/React.svg";
import NextJS from "@/imgs/Next.js.svg";
import Cypress from "@/imgs/Cypress.svg";
import GraphQL from "@/imgs/GraphQL.svg";
import Jest from "@/imgs/Jest.svg";
import Git from "@/imgs/Git.svg";
import Github from "@/imgs/GitHub.svg";

const experienceLevels = [
  { months: 6, label: "+6" },
  { months: 12, label: "+1" },
  { months: 24, label: "+2" },
  { months: 36, label: "+3" },
  { months: 48, label: "+4" },
  { months: 60, label: "+5" },
  { months: Infinity, label: "+6" },
];

const FrameworLoadkComponent = () => {
  const [nameInfo, setNameInfo] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const t = useTranslations("Languages");

  const handleClick = (name: string) => {
    if (nameInfo === "") {
      setNameInfo(name);
    } else if (nameInfo != name) {
      setNameInfo(name);
    } else {
      setNameInfo("");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getExperienceLabel = (
    startDate: string,
    t: (key: string) => string
  ) => {
    const diffMonths = Math.max(
      0,
      (new Date().getFullYear() - new Date(startDate).getFullYear()) * 12 +
        new Date().getMonth() -
        new Date(startDate).getMonth()
    );

    const experience = experienceLevels.find(
      ({ months }) => diffMonths < months
    );

    debugger;
    if (experience?.months === 6) {
      return `${experience?.label} ${t("months")}`;
    }

    return `${experience?.label} ${t("year")}`;
  };

  return (
    <>
      <div
        id="language&framework"
        className="relative flex flex-row justify-start items-center space-x-1 md:space-x-3"
      >
        <div className="bg-white text-[20px] font-bold text-black py-4 pl-4 pr-10 my-10 language-name md:text-[28px]">
          Language & Frameworks
        </div>
        <div className="absolute left-[304px] bg-white h-[62px] w-[50px] language-bg md:left-[410px] md:h-[74px] md:w-[60px]"></div>
        <div className="absolute left-[288px] bg-white h-[62px] w-[50px] language-bg md:left-[384px] md:h-[74px] md:w-[60px]"></div>
        <div className="absolute left-[270px] bg-white h-[62px] w-[50px] language-bg md:left-[358px] md:h-[74px] md:w-[60px]"></div>
      </div>

      <div
        ref={ref}
        className="container mx-auto flex justify-center items-center my-5"
      >
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-x-14">
          <div
            onClick={() => handleClick("HTML")}
            className={`frameworksBlock border-[#EA6101] hover:shadow-[#EA6101] hover:shadow-[0_0_60px_4px_rgba(0,0,0,0.3)] animate-scaleOut ${
              isVisible && "item-1"
            } `}
          >
            <Image
              loading="lazy"
              unoptimized={true}
              className="absolute left-[39.5px] top-4 w-[156px] h-[225px] select-none pointer-events-none"
              src={HTML}
              alt="HTML"
            />
            <h1
              className={`frameworksText  uppercase left-7 text-[#EA6101] tracking-[1.00em] ${
                nameInfo === "HTML" && "-translate-y-[72px]"
              }`}
            >
              HTML
            </h1>
            <div
              className={`frameworksBlockInfo border-t-[#EA6101] ${
                nameInfo === "HTML"
                  ? "h-2/5 translate-y-0 opacity-100"
                  : "h-1/6 translate-y-1 opacity-0"
              }`}
            >
              <p className="frameworksBlockInfoDescription">
                {t("discriptionHTML")}
              </p>
              <div className="FrameworksBlockInfoTexts">
                <h3 className="frameworksBlockInfoText1">{t("Practicing")}</h3>
                <h2 className="frameworksBlockInfoText2 text-[#EA6101]">
                  {useMemo(() => getExperienceLabel("2023-06-01", t), [t])}
                </h2>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleClick("CSS")}
            className={`frameworksBlock border-[#33A9DC] hover:shadow-[#33A9DC] hover:shadow-[0_0_40px_4px_rgba(0,0,0,0.3)] animate-scaleOut ${
              isVisible && "item-2"
            }`}
          >
            <Image
              loading="lazy"
              unoptimized={true}
              className="absolute left-[21.5px] top-2 w-[174px] h-[245px] select-none pointer-events-none"
              src={CSS}
              alt="CSS"
            />
            <h1
              className={`frameworksText uppercase left-[56px] text-[#33A9DC] tracking-[1.00em] ${
                nameInfo === "CSS" && "-translate-y-[72px]"
              }`}
            >
              CSS
            </h1>

            <div
              className={`frameworksBlockInfo border-t-[#33A9DC] ${
                nameInfo === "CSS"
                  ? "h-2/5 translate-y-0 opacity-100"
                  : "h-1/6 translate-y-1 opacity-0"
              }`}
            >
              <p className="frameworksBlockInfoDescription">
                {t("discriptionCSS")}
              </p>
              <div className="FrameworksBlockInfoTexts">
                <h3 className="frameworksBlockInfoText1">{t("Practicing")}</h3>
                <h2 className="frameworksBlockInfoText2 text-[#33A9DC]">
                  {useMemo(() => getExperienceLabel("2023-06-01", t), [t])}
                </h2>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleClick("JS")}
            className={`frameworksBlock border-[#F5DE19] hover:shadow-[#F5DE19] hover:shadow-[0_0_40px_4px_rgba(0,0,0,0.3)] animate-scaleOut ${
              isVisible && "item-3"
            }`}
          >
            <Image
              loading="lazy"
              unoptimized={true}
              className="absolute left-[21.5px] top-2 w-[174px] h-[235px] select-none pointer-events-none"
              src={JS}
              alt="Java Script"
            />
            <h1
              className={`frameworksText uppercase left-[10px] text-[#F5DE19] tracking-[.10em] ${
                nameInfo === "JS" && "-translate-y-[70px]"
              }`}
            >
              Java Script
            </h1>
            <div
              className={`frameworksBlockInfo border-t-[#F5DE19] ${
                nameInfo === "JS"
                  ? "h-2/5 translate-y-0 opacity-100"
                  : "h-1/6 translate-y-1 opacity-0"
              }`}
            >
              <p className="frameworksBlockInfoDescription">
                {t("discriptionJS")}
              </p>
              <div className="FrameworksBlockInfoTexts">
                <h3 className="frameworksBlockInfoText1">{t("Practicing")}</h3>
                <h2 className="frameworksBlockInfoText2 text-[#F5DE19]">
                  {useMemo(() => getExperienceLabel("2023-06-01", t), [t])}
                </h2>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleClick("TS")}
            className={`frameworksBlock border-[#007ACC] hover:shadow-[#007ACC] hover:shadow-[0_0_40px_4px_rgba(0,0,0,0.3)] animate-scaleOut ${
              isVisible && "item-4"
            }`}
          >
            <Image
              loading="lazy"
              unoptimized={true}
              className="absolute left-[21.5px] top-2 w-[174px] h-[235px] select-none pointer-events-none"
              src={TS}
              alt="Type Script"
            />
            <h1
              className={`frameworksText uppercase left-[10px] text-[#007ACC] tracking-[.10em] ${
                nameInfo === "TS" && "-translate-y-[114px]"
              }`}
            >
              Type Script
              
  
            </h1>
            <div
              className={`frameworksBlockInfo border-t-[#007ACC] ${
                nameInfo === "TS"
                  ? "h-[55%] translate-y-0 opacity-100"
                  : "h-1/6 translate-y-1 opacity-0"
              }`}
            >
              <p className="frameworksBlockInfoDescription">
                {t("discriptionTS")}
              </p>
              <div className="flex flex-row justify-start items-center mx-2 mt-1">
                <svg
                  className="w-1/6"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
                  ></path>
                </svg>
                <p className="text-[12px] text-[#007ACC] font-light text-start w-5/6 mx-1 underline underline-offset-4 decoration-[#007ACC]">
                  {t("discriptionPlus1")}
                </p>
              </div>
              <div className="FrameworksBlockInfoTexts">
                <h3 className="frameworksBlockInfoText1">{t("Practicing")}</h3>
                <h2 className="frameworksBlockInfoText2 text-[#007ACC]">
                  {useMemo(() => getExperienceLabel("2024-01-01", t), [t])}
                </h2>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleClick("TailwindCSS")}
            className={`frameworksBlock border-[#38BDF8] hover:shadow-[#38BDF8] hover:shadow-[0_0_40px_4px_rgba(0,0,0,0.3)] animate-scaleOut ${
              isVisible && "item-5"
            }`}
          >
            <Image
              loading="lazy"
              unoptimized={true}
              className="absolute left-[31.5px] top-2 w-[164px] h-[235px] select-none pointer-events-none"
              src={TailwindCSS}
              alt="Tailwind CSS"
            />
            <h1
              className={`frameworksText left-2 text-[#38BDF8] tracking-[.10em] ${
                nameInfo === "TailwindCSS" && "-translate-y-[114px]"
              }`}
            >
              Tailwind CSS
            </h1>
            <div
              className={`frameworksBlockInfo border-t-[#38BDF8] ${
                nameInfo === "TailwindCSS"
                  ? "h-[55%] translate-y-0 opacity-100"
                  : "h-1/6 translate-y-1 opacity-0"
              }`}
            >
              <p className="frameworksBlockInfoDescription">
                {t("discriptionTcss")}
              </p>
              <div className="flex flex-row justify-start items-center mx-2 mt-1">
                <svg
                  className="w-1/6"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
                  ></path>
                </svg>
                <p className="text-[12px] text-[#38BDF8] font-light text-start w-5/6 mx-1 underline underline-offset-4 decoration-[#38BDF8]">
                  {t("discriptionPlus2")}
                </p>
              </div>
              <div className="FrameworksBlockInfoTexts">
                <h3 className="frameworksBlockInfoText1">{t("Practicing")}</h3>
                <h2 className="frameworksBlockInfoText2 text-[#38BDF8]">
                  {useMemo(() => getExperienceLabel("2023-08-01", t), [t])}
                </h2>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleClick("React")}
            className={`frameworksBlock border-[#00D8FF] hover:shadow-[#00D8FF] hover:shadow-[0_0_40px_2px_rgba(0,0,0,0.3)] animate-scaleOut ${
              isVisible && "item-6"
            }`}
          >
            <Image
              loading="lazy"
              unoptimized={true}
              className="absolute left-[31.5px] top-2 w-[164px] h-[235px] select-none pointer-events-none"
              src={ReactSVG}
              alt="React"
            />
            <h1
              className={`frameworksText uppercase left-9 text-[#00D8FF] tracking-[.50em] ${
                nameInfo === "React" && "-translate-y-[114px]"
              }`}
            >
              React
            </h1>
            <div
              className={`frameworksBlockInfo  border-t-[#00D8FF] ${
                nameInfo === "React"
                  ? "h-[55%] translate-y-0 opacity-100"
                  : "h-2/5 translate-y-1 opacity-0"
              }`}
            >
              <p className="frameworksBlockInfoDescription">
                {t("discriptionReact")}
              </p>
              <div className="flex flex-row justify-start items-center mx-2 mt-1">
                <svg
                  className="w-1/6"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
                  ></path>
                </svg>
                <p className="text-[12px] text-[#00D8FF] font-light text-start w-5/6 mx-1 underline underline-offset-4 decoration-[#00D8FF]">
                  {t("discriptionPlus3")}
                </p>
              </div>
              <div className="FrameworksBlockInfoTexts">
                <h3 className="frameworksBlockInfoText1">{t("Practicing")}</h3>
                <h2 className="frameworksBlockInfoText2 text-[#00D8FF]">
                  {useMemo(() => getExperienceLabel("2024-01-01", t), [t])}
                </h2>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleClick("NextJS")}
            className={`frameworksBlock border-[#EFEFEF] hover:shadow-[#EFEFEF] hover:shadow-[0_0_40px_2px_rgba(0,0,0,0.3)] animate-scaleOut ${
              isVisible && "item-7"
            }`}
          >
            <Image
              loading="lazy"
              unoptimized={true}
              className="absolute left-[31.5px] top-2 w-[164px] h-[235px] select-none pointer-events-none"
              src={NextJS}
              alt="Next.js"
            />
            <h1
              className={`frameworksText left-7 text-[#EFEFEF] tracking-[.45em] ${
                nameInfo === "NextJS" && "-translate-y-[114px]"
              }`}
            >
              Next.js
            </h1>
            <div
              className={`frameworksBlockInfo border-t-[#EFEFEF] ${
                nameInfo === "NextJS"
                  ? "h-[55%] translate-y-0 opacity-100"
                  : "h-1/6 translate-y-1 opacity-0"
              }`}
            >
              <p className="frameworksBlockInfoDescription">
                {t("discriptionNextJs")}
              </p>
              <div className="flex flex-row justify-start items-center mx-2 mt-1">
                <svg
                  className="w-1/6"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
                  ></path>
                </svg>
                <p className="text-[12px] text-[#EFEFEF] font-light text-start w-5/6 mx-1 underline underline-offset-4 decoration-[#EFEFEF]">
                  {t("discriptionPlus4")}
                </p>
              </div>
              <div className="FrameworksBlockInfoTexts">
                <h3 className="frameworksBlockInfoText1">{t("Practicing")}</h3>
                <h2 className="frameworksBlockInfoText2 text-[#EFEFEF]">
                  {useMemo(() => getExperienceLabel("2024-03-01", t), [t])}
                </h2>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleClick("Cypress")}
            className={`frameworksBlock border-[#4FB38D] hover:shadow-[#4FB38D] hover:shadow-[0_0_40px_2px_rgba(0,0,0,0.3)] animate-scaleOut ${
              isVisible && "item-8"
            }`}
          >
            <Image
              loading="lazy"
              unoptimized={true}
              className="absolute left-[33px] top-2 w-[164px] h-[235px] select-none pointer-events-none"
              src={Cypress}
              alt="Cypress"
            />
            <h1
              className={`frameworksText uppercase left-4 text-[#4FB38D] tracking-[.40em] ${
                nameInfo === "Cypress" && "-translate-y-[72px]"
              }`}
            >
              Cypress
            </h1>
            <div
              className={`frameworksBlockInfo border-t-[#4FB38D] ${
                nameInfo === "Cypress"
                  ? "h-2/5 translate-y-0 opacity-100"
                  : "h-1/6 translate-y-1 opacity-0"
              }`}
            >
              <p className="frameworksBlockInfoDescription">
                {t("discriptionCypress")}
              </p>

              <div className="FrameworksBlockInfoTexts">
                <h3 className="frameworksBlockInfoText1">{t("Practicing")}</h3>
                <h2 className="frameworksBlockInfoText2 text-[#4FB38D]">
                  {useMemo(() => getExperienceLabel("2024-10-01", t), [t])}
                </h2>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleClick("GraphQL")}
            className={`frameworksBlock border-[#E535AB] hover:shadow-[#E535AB] hover:shadow-[0_0_40px_4px_rgba(0,0,0,0.3)] animate-scaleOut ${
              isVisible && "item-9"
            }`}
          >
            <Image
              loading="lazy"
              unoptimized={true}
              className="absolute left-[31.5px] top-2 w-[164px] h-[235px] select-none pointer-events-none"
              src={GraphQL}
              alt="GraphQL"
            />
            <h1
              className={`frameworksText left-7 text-[#E535AB] tracking-[.30em] ${
                nameInfo === "GraphQL" && "-translate-y-[72px]"
              }`}
            >
              GraphQL
            </h1>
            <div
              className={`frameworksBlockInfo border-t-[#E535AB] ${
                nameInfo === "GraphQL"
                  ? "h-2/5 translate-y-0 opacity-100"
                  : "h-1/6 translate-y-1 opacity-0"
              }`}
            >
              <p className="frameworksBlockInfoDescription">
                {t("discriptionGraphQL")}
              </p>
              <div className="FrameworksBlockInfoTexts">
                <h3 className="frameworksBlockInfoText1">{t("Practicing")}</h3>
                <h2 className="frameworksBlockInfoText2 text-[#E535AB]">
                  {useMemo(() => getExperienceLabel("2024-10-01", t), [t])}
                </h2>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleClick("Jest")}
            className={`frameworksBlock border-[#99424F] hover:shadow-[#99424F] hover:shadow-[0_0_60px_4px_rgba(0,0,0,0.3)] animate-scaleOut ${
              isVisible && "item-10"
            }`}
          >
            <Image
              loading="lazy"
              unoptimized={true}
              className="absolute left-[31.5px] top-2 w-[164px] h-[235px] select-none pointer-events-none"
              src={Jest}
              alt="Jest"
            />
            <h1
              className={`frameworksText uppercase left-[60px] text-[#99424F] tracking-[.34em] ${
                nameInfo === "Jest" && "-translate-y-[72px]"
              }`}
            >
              JEST
            </h1>
            <div
              className={`frameworksBlockInfo border-t-[#99424F] ${
                nameInfo === "Jest"
                  ? "h-2/5 translate-y-0 opacity-100"
                  : "h-1/6 translate-y-1 opacity-0"
              }`}
            >
              <p className="frameworksBlockInfoDescription">
                {t("discriptionJest")}
              </p>
              <div className="FrameworksBlockInfoTexts">
                <h3 className="frameworksBlockInfoText1">{t("Practicing")}</h3>
                <h2 className="frameworksBlockInfoText2 text-[#99424F]">
                  {useMemo(() => getExperienceLabel("2024-10-01", t), [t])}
                </h2>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleClick("Git")}
            className={`frameworksBlock border-[#F34F29] hover:shadow-[#F34F29] hover:shadow-[0_0_40px_4px_rgba(0,0,0,0.3)] animate-scaleOut ${
              isVisible && "item-11"
            }`}
          >
            <Image
              loading="lazy"
              unoptimized={true}
              className="absolute left-[30.5px] top-[-3px] w-[164px] h-[235px] select-none pointer-events-none"
              src={Git}
              alt="Git"
            />
            <h1
              className={`frameworksText uppercase left-[74px] text-[#F34F29] tracking-[.30em] ${
                nameInfo === "Git" && "-translate-y-[72px]"
              }`}
            >
              GIT
            </h1>
            <div
              className={`frameworksBlockInfo border-t-[#F34F29] ${
                nameInfo === "Git"
                  ? "h-2/5 translate-y-0 opacity-100"
                  : "h-1/6 translate-y-1 opacity-0"
              }`}
            >
              <p className="frameworksBlockInfoDescription">
                {t("discriptionGit")}
              </p>
              <div className="FrameworksBlockInfoTexts">
                <h3 className="frameworksBlockInfoText1">{t("Practicing")}</h3>
                <h2 className="frameworksBlockInfoText2 text-[#F34F29]">
                  {useMemo(() => getExperienceLabel("2024-08-01", t), [t])}
                </h2>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleClick("Github")}
            className={`frameworksBlock border-[#D2D2D2] hover:shadow-[#D2D2D2] hover:shadow-[0_0_40px_2px_rgba(0,0,0,0.3)] animate-scaleOut ${
              isVisible && "item-12"
            }`}
          >
            <Image
              loading="lazy"
              unoptimized={true}
              className="absolute left-[31.5px] top-2 w-[164px] h-[235px] select-none pointer-events-none"
              src={Github}
              alt="Github"
            />
            <h1
              className={`frameworksText left-8 text-[#E4E4E4] tracking-[.50em] ${
                nameInfo === "Github" && "-translate-y-[72px]"
              }`}
            >
              GitHub
            </h1>
            <div
              className={`frameworksBlockInfo border-t-[#D2D2D2] ${
                nameInfo === "Github"
                  ? "h-2/5 -translate-y-1 opacity-100"
                  : "h-1/6 translate-y-1 opacity-0"
              }`}
            >
              <p className="frameworksBlockInfoDescription">
                {t("discriptionGitHub")}
              </p>
              <div className="FrameworksBlockInfoTexts">
                <h3 className="frameworksBlockInfoText1">{t("Practicing")}</h3>
                <h2 className="frameworksBlockInfoText2 text-[#D2D2D2]">
                  {useMemo(() => getExperienceLabel("2024-08-01", t), [t])}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameworLoadkComponent;
