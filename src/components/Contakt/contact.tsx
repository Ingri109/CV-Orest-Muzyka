import { useState } from "react";
import Image from "next/image";
import Phone from '@/icons/phone.svg';
import Email from '@/icons/email.svg';
import GitGub from '@/icons/github.svg';
import Telegram from '@/icons/telegram.svg';
import Copy from '@/icons/copy.svg';
import { useTranslations } from 'next-intl';
import { useForm, ValidationError } from '@formspree/react';


const ContactComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [state, handleSubmit] = useForm("manwdzjp");
    const [responseMessage, setResponseMessage] = useState('');
    const [copied, setCopied] = useState(false);
    const t = useTranslations('Contact');

    const handleCopy = () => {
        const email = "orest.muzyka.it@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 1000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };



    return (
        <section className="flex flex-row justify-center items-center w-full h-auto bg-[#202020] mt-5">
            <div id="contact" className="container mx-auto flex flex-col justify-around items-center md:flex-row">
                <form onSubmit={handleSubmit} className="w-10/12 flex flex-col justify-start items-center justify-items-stretch h-auto my-10 mt-10 xl:w-2/5 lg:w-2/4 md:w-3/6">
                    <div className="w-full flex flex-row justify-center items-center space-x-2">
                        <div className="w-1/5 h-[2px] bg-white mt-2"></div>
                        <h1 className="text-[30px] font-semibold select-none">{t('title1')}</h1>
                        <div className="w-1/5 h-[2px] bg-white mt-2"></div>
                    </div>
                    <div className="w-3/5 relative pt-4 mt-6 ">
                        <input
                            id='name'
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="from__field w-full border-0 outline-none text-white px-2 py-1.5 text-xl select-none" placeholder="Name"></input>
                        <label className='from__label text-color1_2 top-0 left-2 absolute block font-medium text-[18px] transition-all duration-500 delay-150 select-none'>{t('Name')}</label>
                        <div className='bg-color1_3 w-full h-[3px] rounded-full'></div>
                    </div>
                    <div className="w-3/5 relative pt-4 mt-3 ">
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="from__field w-full border-0 outline-none text-white px-2 py-1.5 text-xl select-none" placeholder="Email" required></input>
                        <label className='from__label text-color1_2 top-0 left-2 absolute block font-medium text-[18px] transition-all duration-500 delay-150 select-none'>Email</label>
                        <div className='bg-color1_3 w-full h-[3px] rounded-full'></div>
                    </div>
                    <div className="w-3/4 flex flex-col justify-start items-center justify-items-stretch mt-6">
                        <h3 className="w-full text-[20px] text-color1_2 font-semibold text-left select-none ml-10 z-10">{t('Your Message')}</h3>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full h-40 resize-none bg-[#202020] mt-1 px-4 py-1 rounded-md border-color1_3 border-[3px] outline-none shadow-[0_0px_30px_10px_rgba(0,0,0,0.3)] shadow-black select-none"></textarea>
                    </div>
                    {state.succeeded && <p className="text-[14px] text-white font-light mt-5 md:text-[16px]">{t('Message')}</p>}
                    <button type="submit" disabled={state.submitting} className={`bg-color1 rounded-md text-[16px] font-bold text-white select-none capitalize px-28 py-1.5 ${state.succeeded ? 'mt-2' : 'mt-10'} shadow-[0_0px_30px_2px_rgba(0,0,0,0.3)] shadow-color1 hover:scale-105 hover:bg-color1_3 hover:shadow-[0_0px_30px_4px_rgba(0,0,0,0.3)] hover:shadow-color1 focus:bg-color1_5 md:text-[18px]`}>{t('Button')}</button>
                </form>
                <div className="w-10/12 flex flex-col justify-start items-center justify-items-stretch h-auto my-10 lg:w-1/3 md:w-5/12">
                    <div className="w-full flex flex-row justify-center items-center space-x-2">
                        <div className="w-1/4 h-[2px] bg-white mt-2 md:w-1/5"></div>
                        <h1 className="text-[26px] font-semibold select-none lg:text-[30px]">{t('title2')}</h1>
                        <div className="w-1/4 h-[2px] bg-white mt-2 md:w-1/5"></div>
                    </div>
                    <div className="w-full flex flex-row justify-start items-center mt-8 space-x-4">
                        <Image loading="lazy" className="w-9 h-9 select-none" src={Phone} alt="Phone" />
                        <h3 className="text-[24px] text-white font-semibold tracking-wider">+48881641600</h3>
                    </div>
                    <div className="w-full flex flex-row justify-start items-center mt-8 space-x-4">
                        <Image loading="lazy" className="w-9 h-9 select-none" src={Email} alt="Email" />
                        <h3 title="Copy me!" onClick={handleCopy} className="text-[20px] text-white font-semibold tracking-normal cursor-pointer lg:text-[20px]">orest.muzyka.it@gmail.com</h3>
                        {copied ? <Image loading="lazy" className="size-5 select-none" src={Copy} alt="Copy" /> : <></>}
                    </div>
                    <div className="w-full flex flex-row justify-start items-center mt-8 space-x-4">
                        <Image loading="lazy" className="w-9 h-9 select-none" src={GitGub} alt="GitHub" />
                        <a target="blank" href="https://github.com/Ingri109" className="text-[20px] text-white font-semibold tracking-wider hover:underline hover:underline-offset-[6px] hover:text-color1_2">{t('GitHub')}</a>
                    </div>
                    <div className="w-full flex flex-row justify-start items-center mt-8 space-x-4">
                        <Image loading="lazy" className="w-9 h-9 select-none" src={Telegram} alt="Telegram" />
                        <h3 className="text-[20px] text-white font-semibold tracking-wider">@Ingri109</h3>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ContactComponent;