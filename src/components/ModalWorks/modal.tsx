import { useRef } from "react";
import { useTranslations } from 'next-intl';

const ModalWorksComponent = ({ openModal, nameModal, onClose }: { openModal: boolean, nameModal: string, onClose: () => void }) => {
    const backdrop = useRef<HTMLDivElement>(null);
    const t = useTranslations('Works');

    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (backdrop.current === e.target) {
            onClose();
        }
    };

    if (!openModal) {
        return null;
    }


    return (
        <>
            <div ref={backdrop} onClick={onClick} className="fixed bg-black bg-opacity-70 backdrop-blur-sm top-0 left-0 flex items-center justify-center h-full w-full z-50">
                {nameModal === 'Your Love' &&
                    <div className="boxModalWorks animate-scaleIn border-[#BF2489] shadow-[#BF2489]">
                        <div className="basis-1/2 flex flex-col justify-start items-center justify-items-stretch mx-4">
                            <a target="blank" href="https://your-love-0-0-1.vercel.app/en" className="Sait bg-no-repeat bg-contain bg-center rounded-md w-[380px] h-[237px] mt-7 transition delay-200 duration-100 hover:scale-105"></a>
                            <h3 className="text-[16px] font-normal text-white mt-3 ml-2 text-left text-wrap ">{t('FrameworkContent')} <a target="blank" href="https://supabase.com/" className="text-[18px] font-bold text-color1 cursor-pointer">Supabase</a>, <a target="blank" href="https://nextjs.org/" className="text-[18px] font-bold text-color1 cursor-pointer">Next.js</a>, <a target="blank" href="https://tailwindcss.com/" className="text-[18px] font-bold text-color1 cursor-pointer">Tailwind CSS</a>, <a target="blank" href="https://www.typescriptlang.org" className="text-[18px] font-bold text-color1 cursor-pointer"> TypeScript</a> .</h3>
                            <a target="blank" onClick={onClose} href='https://your-love-0-0-1.vercel.app/en' className="text-white text-[18px] font-semibold border border-white rounded-md bg-black mt-10 px-24 py-1 shadow-[0_0_60px_-6px_rgba(0,0,0,0.3)] shadow-white transition-all delay-100 duration-150 hover:bg-[#161616] hover:scale-105 hover:shadow-[0_0_50px_6px_rgba(0,0,0,0.3)] hover:shadow-white">
                                {t('Button')}
                            </a>
                        </div>
                        <div className="basis-1/2 flex flex-col justify-start items-center mx-4">
                            <h1 className="text-[38px] font-bold text-[#BF2489] tracking-wide mt-2">Your Love</h1>
                            <p className="text-[16px] font-normal text-white text-wrap text-left mt-3">
                                {t('Content1')}
                            </p>
                        </div>
                    </div>}
                {nameModal === 'Coffee' &&
                    <div className="boxModalWorks shadow-[0_0_40px_-10px_rgba(0, 0, 0, 0.3)] border-white shadow-color2_1">
                        <div className="basis-1/2 flex flex-col justify-start items-center justify-items-stretch mx-4">
                            <a target="blank" href="https://ingri109.github.io/Coffe_Zhenich/" className="Sait_Coffee bg-no-repeat bg-contain bg-center rounded-md w-[380px] h-[237px] mt-7 transition delay-200 duration-100 hover:scale-105"></a>
                            <h3 className="text-[16px] font-normal text-white mt-3 ml-2 text-left text-wrap ">{t('FrameworkContent')} <label className="text-[18px] font-bold text-color1">HTML</label>, <label className="text-[18px] font-bold text-color1">CSS</label>, <label className="text-[18px] font-bold text-color1">JS</label> .</h3>
                            <a target="blank" onClick={onClose} href='https://ingri109.github.io/Coffe_Zhenich/' className="text-white text-[18px] font-semibold border border-white rounded-md bg-black mt-14 px-24 py-1 shadow-[0_0_60px_-6px_rgba(0,0,0,0.3)] shadow-white transition-all delay-100 duration-150 hover:bg-[#161616] hover:scale-105 hover:shadow-[0_0_50px_6px_rgba(0,0,0,0.3)] hover:shadow-white">
                                {t('Button')}
                            </a>
                        </div>
                        <div className="basis-1/2 flex flex-col justify-start items-center mx-4">
                            <h1 className="text-[38px] font-bold text-white tracking-wide mt-2">Coffee Menu</h1>
                            <p className="text-[16px] font-normal text-white text-wrap text-left mt-3">
                                {t('Content2')}
                            </p>
                        </div>
                    </div>}
                {nameModal === 'CS' &&
                    <div className="boxModalWorks shadow-[0_0_40px_-10px_rgba(0, 0, 0, 0.3)] animate-scaleIn border-[#FBAC18] shadow-[#FBAC18]">
                        <div className="basis-1/2 flex flex-col justify-start items-center justify-items-stretch mx-4">
                            <a target="blank" href="https://ingri109.github.io/CS-First-Project/" className="Sait_CS bg-no-repeat bg-contain bg-center rounded-md w-[380px] h-[237px] mt-7 transition delay-200 duration-100 hover:scale-105"></a>
                            <h3 className="text-[16px] font-normal text-white mt-3 ml-2 text-left text-wrap ">{t('FrameworkContent')} <a target="blank" href="https://nextjs.org/" className="text-[18px] font-bold text-color1 cursor-pointer">Next.js</a>, <a target="blank" href="https://tailwindcss.com/" className="text-[18px] font-bold text-color1 cursor-pointer">Tailwind CSS</a>, <a target="blank" href="https://www.typescriptlang.org" className="text-[18px] font-bold text-color1 cursor-pointer"> TypeScript</a> .</h3>
                            <a target="blank" onClick={onClose} href='https://ingri109.github.io/CS-First-Project/' className="text-white text-[18px] font-semibold border border-white rounded-md bg-black mt-10 px-24 py-1 shadow-[0_0_60px_-6px_rgba(0,0,0,0.3)] shadow-white transition-all delay-100 duration-150 hover:bg-[#161616] hover:scale-105 hover:shadow-[0_0_50px_6px_rgba(0,0,0,0.3)] hover:shadow-white">
                                {t('Button')}
                            </a>
                        </div>
                        <div className="basis-1/2 flex flex-col justify-start items-center mx-4">
                            <h1 className="text-[38px] font-bold text-[#FBAC18] tracking-wide mt-2">{t('FirstJob')}</h1>
                            <p className="text-[18px] font-normal text-white text-wrap text-left mt-3">
                                {t('Content3')}
                            </p>
                        </div>
                    </div>}
            </div>
        </>
    )
}

export default ModalWorksComponent;