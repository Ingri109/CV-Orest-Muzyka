import Link from "next/link";
import { useRef } from "react";
import { useTranslations } from 'next-intl';
import LocalSwitcher from "@/components/LocalSwitcher/LocalSwitcher";

const modalNavBar = ({ openNavBar, onClose }: { openNavBar: boolean, onClose: () => void }) => {
    const backdrop = useRef<HTMLDivElement>(null);
    const t = useTranslations('Header');

    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (backdrop.current === e.target) {
            onClose();
        }
    };

    if (!openNavBar) {
        return null;
    }

    return (
        <>
            <div ref={backdrop} onClick={onClick} className="fixed inset-0 bg-black/40 z-50">
                <div className="absolute felx flex-col justify-start items-center right-0 top-0 h-full w-auto px-10 bg-black border-l-2 border-l-color1_1 animate-modal modalR">
                    <h1 className="text-[28px] font-semibold text-white uppercase mt-3">Orest Muzyka</h1>
                    <div className="flex flex-col justify-center items-center space-y-6 mt-44">
                        <Link className=" headerTextModal" href="#about" scroll={true}>{t('about')}</Link>
                        <Link className="headerTextModal" href="#skills" scroll={true}>{t('skills')}</Link>
                        <Link className="headerTextModal" href="#works" scroll={true}>{t('projects')}</Link>
                        <Link className="headerTextModal" href="#contact" scroll={true}>{t('contact')}</Link>
                    </div>
                    <LocalSwitcher modal={'NavBar'}/>
                </div>
            </div>
        </>
    )
}

export default modalNavBar;