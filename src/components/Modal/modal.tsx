import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import ukraine from "@/icons/ukraine.svg";
import poland from "@/icons/poland.svg";
import russia from "@/icons/russia.svg";
import united_kingdom from "@/icons/united-kingdom.svg";
import { useTranslations } from 'next-intl';

interface ModalProps {
    openModal: boolean;
    nameModal: string;
    onClose: () => void;
}


const ModalComponent: React.FC<ModalProps> = ({ openModal, nameModal, onClose }) => {
    const backdrop = useRef<HTMLDivElement>(null);
    const t = useTranslations('Abaut');

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
            <div ref={backdrop} onClick={onClick} className="fixed bg-black bg-opacity-45 backdrop-blur-sm top-0 left-0 flex items-center justify-center h-full w-full z-50">
                <div className="w-11/12 h-auto max-h-[90vh] overflow-y-auto flex flex-col justify-start items-center justify-items-stretch px-4 py-2 rounded-lg bg-black shadow-[inset_0_0_60px_-20px_rgba(0,0,0,0.3)] shadow-color1_3 animate-scaleIn xl:w-8/12 lg:w-10/12 md:w-11/12 md:flex-row md:h-[468px] md:items-start md:justify-center">
                    {nameModal == 'about' &&
                        <>
                            <div className="modal-separation order-last lg:basis-1/2 md:basis-2/5 md:order-none">
                                <div className="Myfoto bg-contain bg-center rounded-full border-2 border-color1_4 shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)] shadow-color1_5 w-[240px] h-[240px] md:w-[300px] md:h-[300px]"></div>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ingri109" className="text-white text-[18px] font-semibold border-[1.5px] border-white rounded-md bg-color2 mt-[64px] px-24 py-1  shadow-[0_0_60px_-10px_rgba(0,0,0,0.3)] shadow-white transition-all delay-200 duration-150 hover:scale-105 hover:shadow-[0_0_60px_-8px_rgba(0,0,0,0.3)] hover:shadow-white">
                                    {t('GitHub')}
                                </a>
                            </div>
                            <div className="modal-separation mx-3 lg:basis-1/2 md:basis-3/5">
                                <h1 className="text-[28px] text-white font-bold tracking-wide uppercase md:text-[32px]">
                                    {t('title1')}
                                </h1>
                                <p className="text-[15px] modal-text tracking-normal lg:text-[15px] md:text-[14px]">
                                    {t('content1')}
                                </p>
                            </div>
                        </>
                    }

                    {nameModal == 'experience' &&
                        <>
                            <div className="modal-separation order-last lg:basis-1/2 md:basis-2/5 md:order-none">
                                <a href="https://your-love-0-0-1.vercel.app/en" className="Sait bg-no-repeat bg-contain bg-center rounded-md shadow-[0_0_30px_-10px_rgba(0,0,0,0.3)] shadow-color2_1 w-[300px] h-[187px] mt-4 lg:w-[380px] lg:h-[237px] md:w-[300px] md:h-[187px] sm:w-[380px] sm:h-[237px] "></a>
                                <Link onClick={onClose} href={'#work'} className="text-white text-[18px] font-semibold border-[2px] border-color3 rounded-md bg-color1_3 mb-4 mt-[40px] px-12 py-1 shadow-[0_0_40px_2px_rgba(0,0,0,0.3)] shadow-color3_3 transition-all delay-200 duration-150 hover:scale-105 hover:shadow-[0_0_60px_-4px_rgba(0,0,0,0.3)] hover:shadow-color3_3 md:md-0 md:mt-[84px] lg:px-24 md:px-16 sm:px-20">
                                    {t('buttonWorks')}
                                </Link>
                            </div>
                            <div className="modal-separation mx-3 lg:basis-1/2 md:basis-3/5">
                                <h1 className="modal-title">
                                    {t('title2')}
                                </h1>
                                <p className="text-[15px] modal-text tracking-wider">
                                    {t('content2')}
                                </p>
                            </div>
                        </>
                    }

                    {nameModal == 'knowledge' &&
                        <>
                            <div className="basis-1/2 h-full flex flex-col justify-center items-start space-y-5 ml-8 order-last lg:basis-1/2 md:basis-2/5 md:order-none">
                                <div className="modal-language ">
                                    <Image loading="lazy" className="w-[64px] h-[64px]" src={ukraine} alt="ukraine" />
                                    <h2 className="modal-language-text">{t('Ukraine')} - <label className="text-color1_2">native</label></h2>
                                </div>
                                <div className="modal-language">
                                    <Image loading="lazy" className="w-[64px] h-[64px]" src={poland} alt="poland" />
                                    <h2 className="modal-language-text">{t('Poland')} - <label className="text-color1_2">B1</label></h2>
                                </div>
                                <div className="modal-language">
                                    <Image loading="lazy" className="w-[64px] h-[64px]" src={united_kingdom} alt="united_kingdom" />
                                    <h2 className="modal-language-text">{t('English')} - <label className="text-color1_2">A2</label></h2>
                                </div>
                                <div className="modal-language">
                                    <Image loading="lazy" className="w-[64px] h-[64px]" src={russia} alt="russia" />
                                    <h2 className="modal-language-text">{t('Russia')} - <label className="text-color1_2">B2</label></h2>
                                </div>
                            </div>
                            <div className="modal-separation mx-3 lg:basis-1/2 md:basis-3/5">
                                <h1 className="modal-title">
                                    {t('title3')}
                                </h1>
                                <p className="text-[15px] modal-text">
                                    {t('content3')}
                                </p>
                                <Link onClick={onClose} href={'#language&framework'} className="text-white text-[16px] font-semibold rounded-md bg-color1_2 mb-8 mt-8 px-8 py-1 shadow-[0_0_30px_8px_rgba(0,0,0,0.3)] shadow-color1_2 transition-all delay-200 duration-150 hover:bg-color1_3 hover:scale-105 hover:shadow-[0_0_40px_10px_rgba(0,0,0,0.3)] hover:shadow-color1_2 focus:bg-color1_4 md:mt-[64px] md:mb-0 sm:text-[18px]">{t('buttonlanguage')}</Link>
                            </div>
                        </>
                    }
                </div>
            </div >
        </>
    )
}

export default ModalComponent;