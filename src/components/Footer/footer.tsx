import Link from "next/link";
import Image from "next/image";
import DoubleArrow from "@/icons/Double_Up_Arrow.svg";
import { useTranslations } from 'next-intl';

const FooterComponent = () => {
    const t = useTranslations('Header');
    return (
        <footer className="bg-black w-full flex flex-col justify-start items-center">
            <nav className=" flex flex-row justify-start items-center space-x-5 my-4">
                <Link className="footerNavText" href="#about" scroll={true}>{t('about')}</Link>
                <Link className="footerNavText" href="#skills" scroll={true}>{t('skills')}</Link>
                <Link className="footerNavText" href="#works" scroll={true}>{t('projects')}</Link>
                <Link className="footerNavText" href="#contact" scroll={true}>{t('contact')}</Link>
            </nav>
            <div className="bg-white flex items-center justify-center w-full h-[2px] mt-10 mb-8 select-none">
                <Link href="#main" className=" relative bg-black size-12 border-2 rotate-45 border-white">
                    <Image className=" absolute top-[5.7px] left-[6px] w-[28px] h-[30px] rotate-[315deg]" src={DoubleArrow} alt="Double Up Arrow"/>
                </Link>
            </div>
            <h1 className="text-[18px] font-light text-white mt-6 tracking-wider">©Orest  Muzyka - 2024</h1>

        </footer>
    )
}

export default FooterComponent;