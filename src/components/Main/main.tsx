import { useTranslations } from 'next-intl';

const MainComponent = () => {
  const t = useTranslations('Main');
  
  return (
    <main id="main" className="bg-contain bg-fixed bg-top bg-no-repeat fonMain w-full h-[220px] m-0 md:bg-center sm:h-[354px] md:h-screen md:bg-cover">
      <div className="bg-black bg-opacity-60 w-full h-full flex flex-col items-center justify-center">
        <div className="container mx-auto p-4 flex flex-col items-center justify-center justify-items-center mb-12">
          <h1 className="text-white text-[24px] font-bold text-nowrap uppercase tracking-wider mb-5 md:text-[42px] sm:text-[36px]">{t('title')}</h1>
          <h2 className="text-white text-[12px] font-medium text-nowrap uppercase tracking-wide underline underline-offset-8 decoration-from-font mb-3 md:text-[16px] sm:text-[14px]">{t('text1')}</h2>
          <h2 className="text-color1 text-[12px] font-medium text-nowrap uppercase tracking-wide md:text-[16px] sm:text-[14px]">{t('text2')}</h2>
        </div>
      </div>
    </main>
  )
}

export default MainComponent;