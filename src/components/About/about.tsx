'use client';

import ModalComponent from "../Modal/modal";
import { useState, useRef, useEffect } from "react";
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

const AboutComponent = dynamic(() => import('./about'), {
    ssr: false,
});

const AboutLoadComponent = () => {
    const [openModal, setOpenModal] = useState(false);
    const [nameModal, setNameModal] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const t = useTranslations('Abaut');

    const onClose = () => {
        setOpenModal(false);
        setNameModal('');
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
            <div ref={ref} id="about" className="container mx-auto flex flex-col justify-center items-center space-y-12 py-10 mb-10 mt-16 md:mt-28">

                <div className={`about z-0 animate-slideIn ${isVisible && 'visibleL'}`}>
                    <h1 className="text-[24px] text-white font-bold tracking-wide ml-5 mt-1 md:text-[30px]">
                        {t('title1')}
                    </h1>
                    <p className="text-[16px] text-white font-medium text-balance tracking-normal indent-4 line-clamp-3 ml-4 mt-1">
                        {t('content1')}
                    </p>
                    <button className="btn-about ml-8" type="button" onClick={() => (setOpenModal(!openModal), setNameModal('about'))}>{t('ReadMore')}</button>
                </div>
                <div className={`flex flex-col justify-start items-end bg-color1_3 w-5/6 h-[180px] rounded-r-xl rounded-tl-[18px] rounded-bl-[40px] custom-shadow2 xl:w-1/2 lg:w-3/5 md:w-9/12 animate-slideIn ${isVisible && 'visibleR'} `}>
                    <h1 className="text-[24px] text-white font-bold tracking-wide mr-5 mt-1 md:text-[30px]">
                        {t('title2')}
                    </h1>
                    <p className="text-[16px] text-right text-white font-medium text-balance tracking-normal line-clamp-3 mr-6 mt-1">
                        {t('content2')}
                    </p>
                    <button className="btn-about mr-8" type="button" onClick={() => (setOpenModal(!openModal), setNameModal('experience'))}>{t('ReadMore')}</button>
                </div>
                <div className={`about animate-slideIn ${isVisible && 'visibleL2'}`}>
                    <h1 className="text-[24px] text-white font-bold tracking-wide ml-5 mt-1 md:text-[30px]">
                        {t('title3')}
                    </h1>
                    <p className="text-[16px]  text-white font-medium text-balance tracking-normal indent-4 line-clamp-3 ml-4 mt-1">
                        {t('content3')}
                    </p>
                    <button className="btn-about ml-8" type="button" onClick={() => (setOpenModal(!openModal), setNameModal('knowledge'))}>{t('ReadMore')}</button>
                </div>
            </div>
            <ModalComponent openModal={openModal} nameModal={nameModal} onClose={onClose} />
        </>

    )
}

export default AboutLoadComponent;