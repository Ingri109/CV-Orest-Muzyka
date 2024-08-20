'use client';

import MainComponent from "@/components/Main/main";
import HeaderComponent from "@/components/Header/header";
import AboutComponent from "@/components/About/about";
import FrameworkComponent from "@/components/Frameworks/frameworks";
import SkillsComponent from "@/components/Skills/skills";
import WorksComponet from "@/components/Works/works";
import ContactComponent from "@/components/Contakt/contact";
import FooterComponent from "@/components/Footer/footer";

export default function Home() {

  return (<>
    <MainComponent />
    <HeaderComponent />
    <AboutComponent />
    <FrameworkComponent />
    <SkillsComponent />
    <WorksComponet />
    <ContactComponent/>
    <FooterComponent/>
  </>
  );
}
