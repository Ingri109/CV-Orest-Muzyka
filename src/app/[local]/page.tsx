'use client';

import { Suspense } from "react";
import dynamic from 'next/dynamic';
import MainComponent from "@/components/Main/main";
import HeaderComponent from "@/components/Header/header";
import AboutComponent from "@/components/About/about";
import Loading from "./loading";

// Динамічне завантаження з next/dynamic
const FrameworkComponent = dynamic(() => import('@/components/Frameworks/frameworks'), {
  loading: () => <Loading />
});
const SkillsComponent = dynamic(() => import('@/components/Skills/skills'), {
  loading: () => <Loading />
});
const WorksComponent = dynamic(() => import('@/components/Works/works'), {
  loading: () => <Loading />
});
const ContactComponent = dynamic(() => import('@/components/Contakt/contact'), {
  loading: () => <Loading />
});
const FooterComponent = dynamic(() => import('@/components/Footer/footer'), {
  loading: () => <Loading />
});

export default function Page() {
  return (
    <>
      <MainComponent />
      <HeaderComponent />
      <AboutComponent />

      <FrameworkComponent />
      <SkillsComponent />
      <WorksComponent />
      <ContactComponent />
      <FooterComponent />
    </>
  );
}
