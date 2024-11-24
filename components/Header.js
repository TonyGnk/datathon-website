import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    const menuItems = [
        { id: 'whatIsDatathon', text: 'Τι περιλαμβάνει' },
        { id: 'prizes', text: 'Βραβεία' },
        { id: 'registration', text: 'Eγγραφή' },
        { id: 'faq', text: 'FAQ' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const sections = menuItems.map(item =>
            document.getElementById(item.id)
        ).filter(Boolean);

        sections.forEach(section => observer.observe(section));

        return () => sections.forEach(section => observer.unobserve(section));
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            setIsOpen(false);
        }
    };

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-gray-900/75 backdrop-blur-md'
            : 'bg-transparent'
            }`}>
            <div className="relative">


                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0">
                            <img
                                src="/logo2.png"
                                alt="Logo"
                                className="h-12 w-auto"
                            />
                        </div>

                        <nav className="hidden md:flex space-x-4">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="group relative px-4 py-2 text-gray-300 hover:text-yellow-300 transition-colors duration-300"
                                >
                                    {item.text}
                                    <span
                                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 transform origin-left transition-transform duration-300 ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0'
                                            } group-hover:scale-x-100`}
                                    />
                                </button>
                            ))}
                            <div className="relative group">
                                <button
                                    className="group relative px-4 py-2 text-gray-300 hover:text-yellow-300 transition-colors duration-300"
                                >
                                    Αρχείο
                                    <span
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
                                    />
                                </button>
                                <div className="absolute right-0 mt-2 w-48 bg-gray-900/90 backdrop-blur-md rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                    <Link
                                        href="https://datathon.uom.gr/archive-2023/"
                                        target="_blank"
                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-yellow-300"
                                    >
                                        2023
                                    </Link>
                                </div>
                            </div>
                        </nav>

                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 rounded-md text-gray-300 hover:text-yellow-300 hover:bg-gray-800"
                            >
                                <Menu className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className={`md:hidden shadow-lg ${isScrolled
                    ? 'bg-gray-900/75 backdrop-blur-md'
                    : 'bg-gray-900'
                    }`}>
                    <div className="pt-2 pb-3 space-y-1">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`block w-full text-left px-4 py-2 ${activeSection === item.id
                                    ? 'text-yellow-300 bg-gray-800/50'
                                    : 'text-gray-300'
                                    } hover:bg-gray-800/50 hover:text-yellow-300 transition-colors duration-200`}
                            >
                                {item.text}
                            </button>
                        ))}
                        <Link
                            href="https://datathon.uom.gr/"
                            target="_blank"
                            className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800/50 hover:text-yellow-300"
                        >
                            Αρχείο 2023
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;