'use client';

import Hero from '@/components/Hero/Hero';
import Navbar from '@/components/Navbar/Navbar';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner from '@/components/Banners/Banner';
import Services from '@/components/Services/Services';
import WhyUs from '@/components/Banners/WhyUs';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';

const page = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Hero />
      <Banner />
      <Services />
      <WhyUs />
      <Projects />
      <Contact />
    </div>
  );
};

export default page;
