import { useState } from "react";
import ModalWorksComponent from "../ModalWorks/modal";
import { useTranslations } from 'next-intl';

const WorksComponet = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [nameModal, setNameModal] = useState<string>('');
    const t = useTranslations('Works');

    const onClose = () => {
        setOpenModal(false);
        setNameModal('');
    }

    return (
        <>
            <section id="works" className="flex justify-center items-center bg-black w-full h-auto">
                <div className="container mx-auto w-full flex justify-center items-stretch justify-items-stretch lg:mx-auto md:mx-10">
                    <div className="relative flex flex-col justify-evenly items-center w-10/12 h-auto bg-color2 my-20 rounded-xl border-color1_1 border-[2px] shadow-[0_0_30px_1px_rgba(0,0,0,0.40)] shadow-color1_1 lg:w-8/12 md:w-full md:flex-row ">
                        <h1 className="absolute left-0 top-0 bg-color1_1 text-white text-[28px] font-bold uppercase tracking-widest rounded-tl-lg rounded-br-3xl px-7 py-2">{t('Name')}</h1>
                        <div onClick={() => { setOpenModal(!openModal), setNameModal('Your Love') }} className="WorksBox foto-YourLove mt-20 border-[#BF2489] shadow-[#BF2489] hover:shadow-[#BF2489]">
                            <div className="absolute -left-[73px] -bottom-[220px] bg-color2 rounded-full w-[400px] h-[400px] blur-2xl"></div>
                            <h2 className="z-10  text-[16px] font-medium text-white ml-3 mb-1">{t('SubtitleSait1')}</h2>
                            <h1 className="z-10 text-[34px] font-bold text-[#BF2489] ml-3 mb-1 lg:text-[34px] md:text-[28px]">Your Love</h1>
                        </div>
                        <div onClick={() => { setOpenModal(!openModal), setNameModal('Coffee') }} className="WorksBox foto-Coffee mt-0 border-white shadow-white hover:shadow-[0_0_40px_-4px_rgba(0,0,0,0.35)] hover:shadow-white md:mt-20">
                            <div className="absolute -left-[73px] -bottom-[220px] bg-color2 rounded-full w-[400px] h-[400px] blur-2xl"></div>
                            <h2 className="z-10  text-[16px] font-medium text-white ml-3 mb-1">{t('SubtitleSait2')}</h2>
                            <h1 className="z-10 text-[34px] font-bold text-white ml-3 mb-1 xl:text-[34px] lg:text-[28px] md:text-[28px]">Coffee Menu</h1>
                        </div>
                        <div onClick={() => { setOpenModal(!openModal), setNameModal('CS') }} className="WorksBox foto-CS mt-0 border-[#FBAC18] hover:shadow-[0_0_40px_-4px_rgba(0,0,0,0.35)] hover:shadow-[#FBAC18] md:mt-20">
                            <div className="absolute -left-[73px] -bottom-[220px] bg-color2 rounded-full w-[400px] h-[400px] blur-2xl"></div>
                            <h2 className="z-10  text-[16px] font-medium text-wite ml-3 mb-1">{t('SubtitleSait3')}</h2>
                            <h1 className="z-10 text-[30px] font-bold text-[#FBAC18] ml-3 mb-1 xl:text-[30px] lg:text-[24px] md:text-[24px]">{t('FirstJob')}</h1>
                        </div>
                    </div>
                </div>
            </section>
            <ModalWorksComponent openModal={openModal} nameModal={nameModal} onClose={onClose} />
        </>
    )
}

export default WorksComponet;