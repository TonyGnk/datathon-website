import React from 'react';
import { Trophy, Cloud, Rocket, ArrowRight } from 'lucide-react';
import AnimatedNetworkBackground2 from './AnimatedNetworkBackground2';

const PrizesSection = () => {
    return (
        //Make this color background #FDE047
        <section id='prizes' className="relative py-20 bg-gray-900">
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
                            <div className="flex justify-between items-start">
                                <div className="flex-grow pr-4">
                                    <p className="text-gray-400">ΚΑΤΗΓΟΡΙΑ</p>
                                    <Trophy className="absolute top-6 right-6 w-12 h-12 text-yellow-300" />
                                    <h3 className="font-mono text-2xl font-bold mb-4 text-gray-100">Εφαρμογής</h3>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center text-lg">
                                    <span className="font-bold text-3xl text-yellow-300 mr-2">1000€</span>
                                    <span className="text-gray-300">για την 1η ομάδα</span>
                                </div>
                                <div className="pt-2">
                                    <span className="inline-flex items-center bg-blue-900/50 text-yellow-300 px-4 py-2 rounded-lg text-sm font-medium border border-blue-800 cursor-pointer mb-5"
                                        onClick={() => window.open('https://www.sevenloft.gr/', '_blank')}
                                    >
                                        <Rocket className="w-4 h-4 mr-2" />
                                        Δωροεπιταγή 50€ & Ξενάγηση στην SevenLoft
                                    </span>
                                </div>
                                <div className="flex items-center text-lg">
                                    <span className="font-bold text-2xl text-yellow-300 mr-2">700€</span>
                                    <span className="text-gray-300">για την 2η ομάδα</span>
                                </div>
                                <div className="flex items-center text-lg">
                                    <span className="font-bold text-2xl text-yellow-300 mr-2">300€</span>
                                    <span className="text-gray-300">για την 3η ομάδα</span>
                                </div>
                                <p className="text-gray-400">σε υπηρεσίες cloud της LANCOM</p>
                            </div>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900 to-blue-800 p-px transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="relative h-full rounded-xl bg-gray-900/50 p-7 border border-blue-800">
                            <div className="flex justify-between items-start">
                                <div className="flex-grow pr-4">
                                    <p className="text-gray-400">ΚΑΤΗΓΟΡΙΑ</p>
                                    <Rocket className="absolute top-6 right-6 w-12 h-12 text-yellow-300" />
                                    <h3 className="font-mono text-2xl font-bold mb-4 text-gray-100">Επιχειρηματικής Ιδέας</h3>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center text-lg">
                                    <span className="font-bold text-3xl text-yellow-300 mr-2">1000€</span>
                                    <span className="text-gray-300">για την 1η ομάδα</span>
                                </div>
                                <div className="pt-2">
                                    <span className="inline-flex items-center bg-blue-900/50 text-yellow-300 px-4 py-2 rounded-lg text-sm font-medium border border-blue-800 cursor-pointer mb-5"
                                        onClick={() => window.open('https://okthess.gr/neos-15os-kyklos-epitachynsis-okthess/', '_blank')}

                                    >
                                        <Rocket className="w-4 h-4 mr-2" />
                                        Συμμετοχή στον επόμενο κύκλο του OK!Thess!
                                    </span>
                                </div>
                                <div className="flex items-center text-lg">
                                    <span className="font-bold text-2xl text-yellow-300 mr-2">700€</span>
                                    <span className="text-gray-300">για την 2η ομάδα</span>
                                </div>
                                <div className="flex items-center text-lg">
                                    <span className="font-bold text-2xl text-yellow-300 mr-2">300€</span>
                                    <span className="text-gray-300">για την 3η ομάδα</span>
                                </div>
                                <p className="text-gray-400">σε υπηρεσίες cloud της LANCOM</p>
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

export default PrizesSection;