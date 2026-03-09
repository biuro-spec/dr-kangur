import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Services from '../components/Services';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Rental from '../components/Rental';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

const HomePage = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            lenis.destroy();
        };
    }, []);

    return (
        <div className="min-h-screen">
            <Navbar scrolled={scrolled} />
            <main>
                <Hero />
                <Stats />
                <About />
                <Services />
                <Team />
                <Testimonials />
                <Gallery />
                <Rental />
                <FAQ />
                <Contact />
            </main>
            <Footer />
            <FloatingButtons />
        </div>
    );
};

export default HomePage;
