import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WinnersSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    const allPhotos = [
        { src: '2024/allParticipants.jpg' },
        { src: '2024/melidis.jpg' },
        { src: '2024/workshop1.jpg' },
        { src: '2024/workshop2.jpg' },
        { src: '2024/workshop3.jpg' },
        { src: '2024/workshop4.jpg' },
        { src: '2024/d4ta Rac00ns.jpg' },
        { src: '2024/kentroCalderon.jpg' },
        { src: '2024/innovision.jpg' },
        { src: '2024/nextGenInnovators.jpg' },
    ];

    const winnerPhotos = [
        { src: '2024/d4ta Rac00ns.jpg', team: 'D4ta Rac00ns' },
        { src: '2024/kentroCalderon.jpg', team: 'Kentro Calderon' },
        { src: '2024/innovision.jpg', team: 'Innovision' },
        { src: '2024/nextGenInnovators.jpg', team: 'Next Gen Innovators' },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            nextPhoto();
        }, 5000); // Auto-rotate every 5 seconds
        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextPhoto = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % allPhotos.length);
    };

    const prevPhoto = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + allPhotos.length) % allPhotos.length);
    };

    const carouselVariants = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    };

    return (
        <section id="winners" className="py-24 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-mono text-4xl font-bold text-yellow-400 mb-6">
                        Οι Νικητές
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Συγχαρητήρια στους νικητές και σε όλους τους συμμετέχοντες!
                    </p>
                </div>

                {/* Winners images with names */}
                <div className="flex justify-center gap-8 mb-12">
                    {winnerPhotos.map((photo, index) => (
                        <motion.div
                            key={index}
                            className="w-1/4 text-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={photo.src}
                                alt={photo.team}
                                className="w-full h-auto object-cover rounded-lg shadow-lg"
                            />
                            <p className="mt-2 text-yellow-300 font-semibold">
                                {photo.team}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Carousel for all participants */}
                <div className="flex justify-center items-center gap-4 relative">
                    <button
                        onClick={prevPhoto}
                        className="text-yellow-300 font-medium bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all duration-300"
                        aria-label="Previous photo"
                    >
                        ‹
                    </button>

                    <div className="relative w-full max-w-3xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                variants={carouselVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.6 }}
                                className="overflow-hidden rounded-lg"
                            >
                                <img
                                    src={allPhotos[currentIndex].src}
                                    className="w-full h-auto object-cover"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={nextPhoto}
                        className="text-yellow-300 font-medium bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all duration-300"
                        aria-label="Next photo"
                    >
                        ›
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WinnersSection;