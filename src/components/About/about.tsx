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
            threshold: 0.2,
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
            <div ref={ref} id="about" className="container mx-auto flex flex-col justify-center items-center space-x-0 space-y-4 py-10 my-10 lg:flex-row lg:space-x-12 lg:space-y-0">

                <div className={`about animate-scaleOut ${isVisible && "item-1"}`}>
                    <h1 className="text-[24px] text-white font-bold tracking-wide md:text-[30px]">
                        {t('title1')}
                    </h1>
                    <p className="text-[16px] text-white font-medium text-balance tracking-normal indent-4 line-clamp-[7] md:line-clamp-[11]">
                        {t('content1')}
                    </p>
                    <button className="btn-about" type="button" onClick={() => (setOpenModal(!openModal), setNameModal('about'))}>{t('ReadMore')}</button>
                </div>
                <div className={`about animate-scaleOut ${isVisible && "item-1"}`}>
                    <h1 className="text-[24px] text-white font-bold tracking-wide md:text-[30px]">
                        {t('title2')}
                    </h1>
                    <p className="text-[16px] text-white font-medium text-balance tracking-normal indent-4 line-clamp-[7] md:line-clamp-[11]">
                        {t('content2')}
                    </p>
                    <button className="btn-about" type="button" onClick={() => (setOpenModal(!openModal), setNameModal('experience'))}>{t('ReadMore')}</button>
                </div>
                <div className={`about animate-scaleOut ${isVisible && "item-1"}`}>
                    <h1 className="text-[24px] text-white font-bold tracking-wide md:text-[30px]">
                        {t('title3')}
                    </h1>
                    <p className="text-[16px] text-white font-medium text-balance tracking-normal indent-4 line-clamp-[7] md:line-clamp-[11]">
                        {t('content3')}
                    </p>
                    <button className="btn-about" type="button" onClick={() => (setOpenModal(!openModal), setNameModal('knowledge'))}>{t('ReadMore')}</button>
                </div>
            </div>
            <ModalComponent openModal={openModal} nameModal={nameModal} onClose={onClose} />
        </>

    )
}

export default AboutLoadComponent;