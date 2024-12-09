import React from 'react';
import { Trophy, Cloud, Rocket, ArrowRight } from 'lucide-react';

const PrizesSectionLastTime = () => {
    return (
        //Make this color background #FDE047
        <section id='prizesLast' className="relative py-20 bg-gray-900">
            <div className="absolute inset-0 overflow-hidden opacity-5">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(#FFD60A 2px, #111827 1px)',
                        backgroundSize: '24px 24px'
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-mono text-4xl font-bold text-yellow-300 mb-4">
                        Έπαθλα
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Αναγνωρίζουμε και επιβραβεύουμε την καινοτομία με σημαντικά έπαθλα και ευκαιρίες ανάπτυξης
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-1">
                    {/* Prize Cards */}
                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900 to-blue-800 p-px transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="relative h-full rounded-xl bg-gray-900/50 p-7 border border-blue-800">
                            <div className="flex flex-col sm:flex-row justify-between items-start">
                                <div className="flex-grow">
                                    <p className="text-gray-400">ΚΑΤΗΓΟΡΙΑ</p>
                                    <h3 className="font-mono text-2xl font-bold mb-4 text-gray-100">Εφαρμογής</h3>
                                </div>
                                <Trophy className="sm:absolute sm:top-6 sm:right-6 w-10 h-10 md:w-12 md:h-12 text-yellow-300" />
                            </div>
                            <div className="space-y-4 mt-4 sm:mt-0">
                                <div className="flex flex-wrap items-center text-lg">
                                    <span className="font-bold text-2xl md:text-3xl text-yellow-300 mr-2">1η Θέση</span>
                                    <span className="text-gray-300">2000€ σε υπηρεσίες cloud!</span>
                                </div>
                                <div className="flex flex-wrap items-center text-lg">
                                    <span className="font-bold text-2xl md:text-3xl text-yellow-300 mr-2">2η Θέση</span>
                                    <span className="text-gray-300">Δωροεπιταγή 50€ & Ξενάγηση στην SevenLoft</span>
                                </div>
                                <p className="text-gray-300 text-sm sm:text-base">
                                    <u>Προσφέρεται στην 1η θέση η δυνατότητα επιλογής του επάθλου</u>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900 to-blue-800 p-px transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="relative h-full rounded-xl bg-gray-900/50 p-7 border border-blue-800">
                            <div className="flex flex-col sm:flex-row justify-between items-start">
                                <div className="flex-grow">
                                    <p className="text-gray-400">ΚΑΤΗΓΟΡΙΑ</p>
                                    <h3 className="font-mono text-2xl font-bold mb-4 text-gray-100">Επιχειρηματικής Ιδέας</h3>
                                </div>
                                <Rocket className="sm:absolute sm:top-6 sm:right-6 w-10 h-10 md:w-12 md:h-12 text-yellow-300" />
                            </div>
                            <div className="space-y-4 mt-4 sm:mt-0">
                                <div className="flex flex-wrap items-center text-lg">
                                    <span className="font-bold text-2xl md:text-3xl text-yellow-300 mr-2">1η Θέση</span>
                                    <span className="text-gray-300">2000€ σε υπηρεσίες cloud!</span>
                                </div>
                                <div className="flex flex-wrap items-center text-lg">
                                    <span className="font-bold text-2xl md:text-3xl text-yellow-300 mr-2">2η Θέση</span>
                                    <span className="text-gray-300">Συμμετοχή στον επόμενο κύκλο του OK!Thess</span>
                                </div>
                                <p className="text-gray-300 text-sm sm:text-base">
                                    <u>Προσφέρεται στην 1η θέση η δυνατότητα επιλογής του επάθλου</u>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add an extra space */}
            <div className="h-13"></div>
        </section>
    );
};

export default PrizesSectionLastTime;