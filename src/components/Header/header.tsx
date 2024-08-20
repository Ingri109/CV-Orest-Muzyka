import { useState, useEffect } from "react";
import { useTranslations } from 'next-intl';
import Link from "next/link";
import Image from "next/image";
import Nav from '@/icons/nav.svg';
import ModalNavBar from "@/components/modalNavBar/modalNavBar";
import LocalSwitcher from "@/components/LocalSwitcher/LocalSwitcher";

const HeaderComponent = () => {
    const t = useTranslations('Header');
    const [openNavBar, setOpenNavBar] = useState<boolean>(false);
    const [isSticky, setIsSticky] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 750) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const onClose = () => {
        setOpenNavBar(!openNavBar);
    }

    return (<>
        <header className={`flex flex-row justify-between items-center w-full h-[42px] transition-all duration-300 z-50 md:h-[50px] bg-color1 ${isSticky ? 'fixed top-0 left-0 shadow-md' : 'relative'}`}>
            <div className="bg-color1_5 flex justify-center items-center h-[42px] px-10 md:h-[50px] select-none pointer-events-none">
                <h1 className="text-[36px] font-bold text-white tracking-widest lg:text-[38px]">OREST</h1>
            </div>
            <nav className="hidden w-auto h-full items-center justify-end justify-items-stretch space-x-8 mr-12 lg:space-x-12 md:flex">
                <Link className="headerText" href="#about" scroll={true}>{t('about')}</Link>
                <Link className="headerText" href="#skills" scroll={true}>{t('skills')}</Link>
                <Link className="headerText" href="#works" scroll={true}>{t('projects')}</Link>
                <Link className="headerText" href="#contact" scroll={true}>{t('contact')}</Link>
                <LocalSwitcher modal={'header'}/>
            </nav>
            <Image onClick={() => setOpenNavBar(!openNavBar)} src={Nav} alt="Navbar" className="block mr-4 md:hidden"></Image>
        </header>
        <ModalNavBar openNavBar={openNavBar} onClose={onClose} />
    </>
    )

}

export default HeaderComponent;