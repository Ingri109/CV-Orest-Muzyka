'use client';

import { useRouter, usePathname } from "next/navigation";
import { useTransition, useState, useRef, useEffect } from "react";
import { useLocale } from "use-intl";
import Image from 'next/image';
import World from "@/icons/World.svg";
import Tick from "@/icons/Tick.svg";

export default function LocalSwitcher({ modal }: { modal: string }) {
    const modalRootRef = useRef<HTMLDivElement | null>(null);
    const [isPending, startTransition] = useTransition();
    const [language, setLanguage] = useState('')
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const locale = useLocale();
    const pathname = usePathname();

    const onSelectChange = (nextLocale: string) => {
        const segments = pathname.split('/').filter(Boolean);
        segments[0] = nextLocale;

        const nextPathname = `/${segments.join('/')}`;

        startTransition(() => {
            router.replace(nextPathname);
        });
    };

    useEffect(() => {
        const rootElement = document.getElementById('modal-root');
        if (rootElement instanceof HTMLDivElement) {
            modalRootRef.current = rootElement;
        }

        if (locale === 'en') {
            setLanguage('English')
        } else if (locale === 'pl') {
            setLanguage('Polski')
        } else if (locale === 'ua') {
            setLanguage('Українська')
        }
    }, []);

    const backdrop = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: MouseEvent) => {
        if (backdrop.current && !backdrop.current.contains(e.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (modal === 'header') {
        return (
            <>
                <div className="cursor-pointer mr-[10px] md:mr-[28px]" onClick={() => setOpen(!open)}>
                    <Image src={World} alt={'world'} className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
                </div>
                <div ref={backdrop} className={` ${open ? 'block' : 'hidden'} z-30 absolute top-14 right-2 text-white bg-black border-[2px] border-color1 px-1.5 py-1.5 rounded-lg md:right-4`}>
                    <div className="cursor-pointer w-full flex justify-start items-center bg-transparent rounded-md px-3 py-1 hover:bg-[#393937]" onClick={() => onSelectChange('en')}>
                        {locale == 'en' ? <Image src={Tick} alt="tick" className="w-[16px] h-[16px] mr-2"></Image> : <div className="w-[16px] h-[16px] mr-2"></div>}
                        <p className="text-[14px] font-light md:text-[16px]">English</p>
                    </div>
                    <div className="cursor-pointer w-full flex justify-start items-center bg-transparent rounded-md px-3 py-1 hover:bg-[#393937]" onClick={() => onSelectChange('pl')}>
                        {locale == 'pl' ? <Image src={Tick} alt="tick" className="w-[16px] h-[16px] mr-2"></Image> : <div className="w-[16px] h-[16px] mr-2"></div>}
                        <p className="text-[14px] font-light md:text-[16px]">Polski</p>
                    </div>
                    <div className="cursor-pointer w-full flex justify-start items-center bg-transparent rounded-md px-3 py-1 hover:bg-[#393937]" onClick={() => onSelectChange('ua')}>
                        {locale == 'ua' ? <Image src={Tick} alt="tick" className="w-[16px] h-[16px] mr-2"></Image> : <div className="w-[16px] h-[16px] mr-2"></div>}
                        <p className="text-[14px] font-light md:text-[16px]">Українська</p>
                    </div>
                </div>

            </>
        );
    }

    if (modal === 'NavBar') {
        return (
            <>
                <div className="flex flex-col h-[160px] relative items-center justify-end justify-items-stretch mt-28">
                    <div className={` ${open ? 'block' : 'hidden'} w-1/2 text-white mb-2 bg-black border-[2px] border-color1 px-2.5 py-1.5 rounded-lg `}>
                        <div className="cursor-pointer w-full flex justify-start items-center bg-transparent rounded-md px-3 py-1 hover:bg-[#393937]" onClick={() => onSelectChange('en')}>
                            {locale == 'en' ? <Image src={Tick} alt="tick" className="w-[20px] h-[20px] mr-2"></Image> : <div className="w-[16px] h-[16px] mr-2"></div>}
                            <p className="text-[16px] font-light">English</p>
                        </div>
                        <div className="cursor-pointer w-full flex justify-start items-center bg-transparent rounded-md px-3 py-1 hover:bg-[#393937]" onClick={() => onSelectChange('pl')}>
                            {locale == 'pl' ? <Image src={Tick} alt="tick" className="w-[20px] h-[20px] mr-2"></Image> : <div className="w-[16px] h-[16px] mr-2"></div>}
                            <p className="text-[16px] font-light">Polski</p>
                        </div>
                        <div className="cursor-pointer w-full flex justify-start items-center bg-transparent rounded-md px-3 py-1 hover:bg-[#393937]" onClick={() => onSelectChange('ua')}>
                            {locale == 'ua' ? <Image src={Tick} alt="tick" className="w-[20px] h-[20px] mr-2"></Image> : <div className="w-[16px] h-[16px] mr-2"></div>}
                            <p className="text-[16px] font-light">Українська</p>
                        </div>
                    </div>
                    <button className="bg-[#202020] w-1/2 rounded-lg border border-color1 px-2.5 py-1.5 text-white text-[18px] font-semibold " onClick={() => setOpen(!open)} type="button">{language}</button>
                </div>
            </>
        )
    }


}
