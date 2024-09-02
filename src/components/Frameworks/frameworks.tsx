'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import HTML from '@/imgs/HTML.svg';
import CSS from '@/imgs/CSS.svg';
import JS from '@/imgs/JS.svg';
import TS from '@/imgs/TS.svg';
import TailwindCSS from '@/imgs/Tailwind css.svg';
import ReactSVG from '@/imgs/React.svg';
import NextJS from '@/imgs/Next.js.svg';
import Cypress from '@/imgs/Cypress.svg';
import GraphQL from '@/imgs/GraphQL.svg';
import Jest from '@/imgs/Jest.svg';
import Git from '@/imgs/Git.svg';
import Github from '@/imgs/GitHub.svg';
import dynamic from 'next/dynamic';

const FrameworkComponent = dynamic(() => import('./frameworks'), {
    ssr: false,
});

const FrameworLoadkComponent = () => {
    const [nameInfo, setNameInfo] = useState<string>('');
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const t = useTranslations('Languages');

    const handleClick = (name: string) => {
        if (nameInfo === '') {
            setNameInfo(name);
        } else if (nameInfo != name) {
            setNameInfo(name);
        } else {
            setNameInfo('');
        }

    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.10,
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


    return (
        <>
            <div id='#language&framework' className="relative flex flex-row justify-start items-center space-x-1 md:space-x-3">
                <div className="bg-white text-[20px] font-bold text-black py-4 pl-4 pr-10 my-10 language-name md:text-[28px]">
                    Language & Frameworks
                </div>
                <div className='absolute left-[304px] bg-white h-[62px] w-[50px] language-bg md:left-[410px] md:h-[74px] md:w-[60px]'></div>
                <div className='absolute left-[288px] bg-white h-[62px] w-[50px] language-bg md:left-[384px] md:h-[74px] md:w-[60px]'></div>
                <div className='absolute left-[270px] bg-white h-[62px] w-[50px] language-bg md:left-[358px] md:h-[74px] md:w-[60px]'></div>
            </div>


            <div ref={ref} className='container mx-auto flex justify-center items-center my-5'>

                <div className='grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-x-14'>
                    <div onClick={() => handleClick('HTML')} className={`frameworksBlock border-[#EA6101] hover:shadow-[#EA6101] hover:shadow-[0_0_60px_4px_rgba(0,0,0,0.3)] animate-scaleOut ${isVisible && 'item-1'} `}>
                        <Image loading="lazy" unoptimized={true} className='absolute left-[39.5px] top-4 w-[156px] h-[225px] select-none pointer-events-none' src={HTML} alt='HTML' />
                        <h1 className={`frameworksText  uppercase left-7 text-[#EA6101] tracking-[1.00em] ${nameInfo === 'HTML' && '-translate-y-12'}`}>HTML</h1>
                        <div className={`frameworksBlockInfo border-t-[#EA6101] ${nameInfo === 'HTML' ? 'h-1/3 translate-y-0 opacity-100' : 'h-1/6 translate-y-1 opacity-0'}`}>
                            <h3 className='frameworksBlockInfoText1'>{t('Practicing')}</h3>
                            <h2 className='frameworksBlockInfoText2 text-[#EA6101]'>+1 {t('year')}</h2>
                        </div>
                    </div>
                    <div onClick={() => handleClick('CSS')} className={`frameworksBlock border-[#33A9DC] hover:shadow-[#33A9DC] hover:shadow-[0_0_40px_4px_rgba(0,0,0,0.3)] animate-scaleOut ${isVisible && 'item-2'}`}>
                        <Image loading="lazy" unoptimized={true} className='absolute left-[21.5px] top-2 w-[174px] h-[245px] select-none pointer-events-none' src={CSS} alt='CSS' />
                        <h1 className={`frameworksText uppercase left-[56px] text-[#33A9DC] tracking-[1.00em] ${nameInfo === 'CSS' && '-translate-y-12'}`}>CSS</h1>
                        <div className={`frameworksBlockInfo border-t-[#33A9DC] ${nameInfo === 'CSS' ? 'h-1/3 translate-y-0 opacity-100' : 'h-1/6 translate-y-1 opacity-0'}`}>
                            <h3 className='frameworksBlockInfoText1'>{t('Practicing')}</h3>
                            <h2 className='frameworksBlockInfoText2 text-[#33A9DC]'>+1 {t('year')}</h2>
                        </div>
                    </div>
                    <div onClick={() => handleClick('JS')} className={`frameworksBlock border-[#F5DE19] hover:shadow-[#F5DE19] hover:shadow-[0_0_40px_4px_rgba(0,0,0,0.3)] animate-scaleOut ${isVisible && 'item-3'}`}>
                        <Image loading="lazy" unoptimized={true} className='absolute left-[21.5px] top-2 w-[174px] h-[235px] select-none pointer-events-none' src={JS} alt='Java Script' />
                        <h1 className={`frameworksText uppercase left-[10px] text-[#F5DE19] tracking-[.10em] ${nameInfo === 'JS' && '-translate-y-12'}`}>Java Script</h1>
                        <div className={`frameworksBlockInfo border-t-[#F5DE19] ${nameInfo === 'JS' ? 'h-1/3 translate-y-0 opacity-100' : 'h-1/6 translate-y-1 opacity-0'}`}>
                            <h3 className='frameworksBlockInfoText1'>{t('Practicing')}</h3>
                            <h2 className='frameworksBlockInfoText2 text-[#F5DE19]'>+1 {t('year')}</h2>
                        </div>
                    </div>
                    <div onClick={() => handleClick('TS')} className={`frameworksBlock border-[#007ACC] hover:shadow-[#007ACC] hover:shadow-[0_0_40px_4px_rgba(0,0,0,0.3)] animate-scaleOut ${isVisible && 'item-4'}`}>
                        <Image loading="lazy" unoptimized={true} className='absolute left-[21.5px] top-2 w-[174px] h-[235px] select-none pointer-events-none' src={TS} alt='Type Script' />
                        <h1 className={`frameworksText uppercase left-[10px] text-[#007ACC] tracking-[.10em] ${nameInfo === 'TS' && '-translate-y-12'}`}>Type Script</h1>
                        <div className={`frameworksBlockInfo border-t-[#007ACC] ${nameInfo === 'TS' ? 'h-1/3 translate-y-0 opacity-100' : 'h-1/6 translate-y-1 opacity-0'}`}>
                            <h3 className='frameworksBlockInfoText1'>{t('Practicing')}</h3>
                            <h2 className='frameworksBlockInfoText2 text-[#007ACC]'>+6 {t('months')}</h2>
                        </div>
                    </div>
                    <div onClick={() => handleClick('TailwindCSS')} className={`frameworksBlock border-[#38BDF8] hover:shadow-[#38BDF8] hover:shadow-[0_0_40px_4px_rgba(0,0,0,0.3)] animate-scaleOut ${isVisible && 'item-5'}`}>
                        <Image loading="lazy" unoptimized={true} className='absolute left-[31.5px] top-2 w-[164px] h-[235px] select-none pointer-events-none' src={TailwindCSS} alt='Tailwind CSS' />
                        <h1 className={`frameworksText left-2 text-[#38BDF8] tracking-[.10em] ${nameInfo === 'TailwindCSS' && '-translate-y-12'}`}>Tailwind CSS</h1>
                        <div className={`frameworksBlockInfo border-t-[#38BDF8] ${nameInfo === 'TailwindCSS' ? 'h-1/3 translate-y-0 opacity-100' : 'h-1/6 translate-y-1 opacity-0'}`}>
                            <h3 className='frameworksBlockInfoText1'>{t('Practicing')}</h3>
                            <h2 className='frameworksBlockInfoText2 text-[#38BDF8]'>+1 {t('year')}</h2>
                        </div>
                    </div>
                    <div onClick={() => handleClick('React')} className={`frameworksBlock border-[#00D8FF] hover:shadow-[#00D8FF] hover:shadow-[0_0_40px_2px_rgba(0,0,0,0.3)] animate-scaleOut ${isVisible && 'item-6'}`}>
                        <Image loading="lazy" unoptimized={true} className='absolute left-[31.5px] top-2 w-[164px] h-[235px] select-none pointer-events-none' src={ReactSVG} alt='React' />
                        <h1 className={`frameworksText uppercase left-9 text-[#00D8FF] tracking-[.50em] ${nameInfo === 'React' && '-translate-y-12'}`}>React</h1>
                        <div className={`frameworksBlockInfo border-t-[#00D8FF] ${nameInfo === 'React' ? 'h-1/3 translate-y-0 opacity-100' : 'h-1/6 translate-y-1 opacity-0'}`}>
                            <h3 className='frameworksBlockInfoText1'>{t('Practicing')}</h3>
                            <h2 className='frameworksBlockInfoText2 text-[#00D8FF]'>+6 {t('months')}</h2>
                        </div>
                    </div>
                    <div onClick={() => handleClick('NextJS')} className={`frameworksBlock border-[#EFEFEF] hover:shadow-[#EFEFEF] hover:shadow-[0_0_40px_2px_rgba(0,0,0,0.3)] animate-scaleOut ${isVisible && 'item-7'}`}>
                        <Image loading="lazy" unoptimized={true} className='absolute left-[31.5px] top-2 w-[164px] h-[235px] select-none pointer-events-none' src={NextJS} alt='Next.js' />
                        <h1 className={`frameworksText left-7 text-[#EFEFEF] tracking-[.45em] ${nameInfo === 'NextJS' && '-translate-y-12'}`}>Next.js</h1>
                        <div className={`frameworksBlockInfo border-t-[#EFEFEF] ${nameInfo === 'NextJS' ? 'h-1/3 translate-y-0 opacity-100' : 'h-1/6 translate-y-1 opacity-0'}`}>
                            <h3 className='frameworksBlockInfoText1'>{t('Practicing')}</h3>
                            <h2 className='frameworksBlockInfoText2 text-[#EFEFEF]'>+6 {t('months')}</h2>
                        </div>
                    </div>
                    <div onClick={() => handleClick('Cypress')} className={`frameworksBlock border-[#4FB38D] hover:shadow-[#4FB38D] hover:shadow-[0_0_40px_2px_rgba(0,0,0,0.3)] animate-scaleOut ${isVisible && 'item-8'}`}>
                        <Image loading="lazy" unoptimized={true} className='absolute left-[33px] top-2 w-[164px] h-[235px] select-none pointer-events-none' src={Cypress} alt='Cypress' />
                        <h1 className={`frameworksText uppercase left-4 text-[#4FB38D] tracking-[.40em] ${nameInfo === 'Cypress' && '-translate-y-12'}`}>Cypress</h1>
                        <div className={`frameworksBlockInfo border-t-[#4FB38D] ${nameInfo === 'Cypress' ? 'h-1/3 translate-y-0 opacity-100' : 'h-1/6 translate-y-1 opacity-0'}`}>
                            <h3 className='frameworksBlockInfoText1'>{t('Practicing')}</h3>
                            <h2 className='frameworksBlockInfoText2 text-[#4FB38D]'>+3 {t('months')}</h2>
                        </div>
                    </div>
                    <div onClick={() => handleClick('GraphQL')} className={`frameworksBlock border-[#E535AB] hover:shadow-[#E535AB] hover:shadow-[0_0_40px_4px_rgba(0,0,0,0.3)] animate-scaleOut ${isVisible && 'item-9'}`}>
                        <Image loading="lazy" unoptimized={true} className='absolute left-[31.5px] top-2 w-[164px] h-[235px] select-none pointer-events-none' src={GraphQL} alt='GraphQL' />
                        <h1 className={`frameworksText left-7 text-[#E535AB] tracking-[.30em] ${nameInfo === 'GraphQL' && '-translate-y-12'}`}>GraphQL</h1>
                        <div className={`frameworksBlockInfo border-t-[#E535AB] ${nameInfo === 'GraphQL' ? 'h-1/3 translate-y-0 opacity-100' : 'h-1/6 translate-y-1 opacity-0'}`}>
                            <h3 className='frameworksBlockInfoText1'>{t('Practicing')}</h3>
                            <h2 className='frameworksBlockInfoText2 text-[#E535AB]'>+4 {t('months')}</h2>
                        </div>
                    </div>
                    <div onClick={() => handleClick('Jest')} className={`frameworksBlock border-[#99424F] hover:shadow-[#99424F] hover:shadow-[0_0_60px_4px_rgba(0,0,0,0.3)] animate-scaleOut ${isVisible && 'item-10'}`}>
                        <Image loading="lazy" unoptimized={true} className='absolute left-[31.5px] top-2 w-[164px] h-[235px] select-none pointer-events-none' src={Jest} alt='Jest' />
                        <h1 className={`frameworksText uppercase left-[60px] text-[#99424F] tracking-[.34em] ${nameInfo === 'Jest' && '-translate-y-12'}`}>JEST</h1>
                        <div className={`frameworksBlockInfo border-t-[#99424F] ${nameInfo === 'Jest' ? 'h-1/3 translate-y-0 opacity-100' : 'h-1/6 translate-y-1 opacity-0'}`}>
                            <h3 className='frameworksBlockInfoText1'>{t('Practicing')}</h3>
                            <h2 className='frameworksBlockInfoText2 text-[#99424F]'>+3 {t('months')}</h2>
                        </div>
                    </div>
                    <div onClick={() => handleClick('Git')} className={`frameworksBlock border-[#F34F29] hover:shadow-[#F34F29] hover:shadow-[0_0_40px_4px_rgba(0,0,0,0.3)] animate-scaleOut ${isVisible && 'item-11'}`}>
                        <Image loading="lazy" unoptimized={true} className='absolute left-[30.5px] top-[-3px] w-[164px] h-[235px] select-none pointer-events-none' src={Git} alt='Git' />
                        <h1 className={`frameworksText uppercase left-[74px] text-[#F34F29] tracking-[.30em] ${nameInfo === 'Git' && '-translate-y-12'}`}>GIT</h1>
                        <div className={`frameworksBlockInfo border-t-[#F34F29] ${nameInfo === 'Git' ? 'h-1/3 translate-y-0 opacity-100' : 'h-1/6 translate-y-1 opacity-0'}`}>
                            <h3 className='frameworksBlockInfoText1'>{t('Practicing')}</h3>
                            <h2 className='frameworksBlockInfoText2 text-[#F34F29]'>+3 {t('months')}</h2>
                        </div>
                    </div>
                    <div onClick={() => handleClick('Github')} className={`frameworksBlock border-[#D2D2D2] hover:shadow-[#D2D2D2] hover:shadow-[0_0_40px_2px_rgba(0,0,0,0.3)] animate-scaleOut ${isVisible && 'item-12'}`}>
                        <Image loading="lazy" unoptimized={true} className='absolute left-[31.5px] top-2 w-[164px] h-[235px] select-none pointer-events-none' src={Github} alt='Github' />
                        <h1 className={`frameworksText left-8 text-[#E4E4E4] tracking-[.50em] ${nameInfo === 'Github' && '-translate-y-12'}`}>GitHub</h1>
                        <div className={`frameworksBlockInfo border-t-[#D2D2D2] ${nameInfo === 'Github' ? 'h-1/3 translate-y-0 opacity-100' : 'h-1/6 translate-y-1 opacity-0'}`}>
                            <h3 className='frameworksBlockInfoText1'>{t('Practicing')}</h3>
                            <h2 className='frameworksBlockInfoText2 text-[#D2D2D2]'>+1 {t('year')}</h2>
                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}

export default FrameworLoadkComponent;