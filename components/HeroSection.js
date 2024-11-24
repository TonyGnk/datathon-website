import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, ChevronDown } from 'lucide-react';
import AnimatedNetworkBackground from './AnimatedNetworkBackground';

const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center transform transition-transform hover:scale-110 duration-300">
        <div className="bg-gray-800/90 rounded-lg shadow-lg p-4 mb-2 w-16 h-16 flex items-center justify-center border border-blue-900 hover:border-yellow-300 transition-colors duration-300">
            <span className="text-3xl font-mono font-bold text-yellow-300">
                {value.toString().padStart(2, '0')}
            </span>
        </div>
        <span className="text-sm font-medium text-gray-300">{label}</span>
    </div>
);

const HeroSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date('2024-12-08').getTime() - new Date().getTime();
            if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        };

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const scrollToRegister = () => {
        console.log('Register button clicked');
        document.getElementById('register')?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    const scrollToNextSection = () => {
        document.getElementById('whatIsDatathon')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="relative min-h-screen bg-gray-900 flex items-center mt-1">
            {/* Position the background with a lower z-index */}
            <div className="absolute inset-0 z-0">
                <AnimatedNetworkBackground />
            </div>

            {/* Main content with higher z-index */}
            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-900/50 rounded-full mb-8 border border-blue-800 hover:border-yellow-300 transition-colors duration-300">
                        <Calendar className="w-5 h-5 text-yellow-300 mr-2" />
                        <span className="text-gray-300 font-medium">8 Δεκεμβρίου 2024</span>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <h1 className="font-mono text-4xl md:text-5xl font-bold text-gray-100 mb-6 transform transition-all duration-500 hover:scale-105">
                            Ανακαλύψτε τη δύναμη των
                            <span className="block text-yellow-300 mt-2">ανοιχτών δεδομένων</span>
                        </h1>

                        <p className="text-xl text-gray-400 mb-12">
                            Μια μοναδική εμπειρία όπου η καινοτομία συναντά την τεχνολογία
                        </p>

                        <div className="inline-block bg-gray-900/50 backdrop-blur-sm rounded-2xl p-9 mb-10 shadow-lg border border-gray-700 hover:border-yellow-400 transition-all duration-300">
                            <h2 className="text-gray-300 font-medium mb-6 flex items-center justify-center">
                                <Clock className="w-5 h-5 mr-2 text-yellow-300" />
                                Η αντίστροφη μέτρηση ξεκίνησε!
                            </h2>
                            <div className="flex justify-center gap-4">
                                <TimeUnit value={timeLeft.days} label="Ημέρες" />
                                <TimeUnit value={timeLeft.hours} label="Ώρες" />
                                <TimeUnit value={timeLeft.minutes} label="Λεπτά" />
                                <TimeUnit value={timeLeft.seconds} label="Δευτ/πτα" />
                            </div>
                        </div>

                        <div className="space-x-4 relative">
                            <button
                                onClick={scrollToNextSection}
                                className="inline-flex items-center justify-center px-8 py-4 bg-blue-900 text-yellow-300 rounded-lg font-medium text-lg shadow-lg transition-all duration-300 hover:bg-blue-800 hover:shadow-xl hover:scale-105 border border-blue-800 hover:border-yellow-300"
                            >
                                Δήλωσε Συμμετοχή
                                <ChevronDown className="mt-1 ml-2 w-5 h-5 animate-bounce" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;