import React from 'react';
import { Trophy, Cloud, Rocket, ArrowRight } from 'lucide-react';

const PrizesSection = () => {
    return (
        <section className="relative py-20 bg-gray-900">
            {/* Abstract geometric background */}
            <div id="prizes" className="absolute inset-0 overflow-hidden opacity-5">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="absolute">
                        {/* Hexagonal grid pattern */}
                        <div
                            className="absolute w-96 h-96 border border-yellow-300 rotate-45 transform"
                            style={{
                                top: `${i * 15}%`,
                                left: `${(i % 2) * 40}%`,
                                clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                            }}
                        />
                    </div>
                ))}
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-mono text-4xl font-bold text-gray-100 mb-4">
                        Έπαθλα & <span className="text-yellow-300">Υποστήριξη</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Αναγνωρίζουμε και επιβραβεύουμε την καινοτομία με σημαντικά έπαθλα και ευκαιρίες ανάπτυξης
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Prize Cards */}
                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900 to-blue-800 p-px transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="relative h-full rounded-xl bg-gray-900/50 backdrop-blur-sm p-8 border border-blue-800">
                            <Trophy className="absolute top-6 right-6 w-12 h-12 text-yellow-300" />
                            <h3 className="font-mono text-2xl font-bold mb-4 text-gray-100">Κατηγορία Ανάπτυξης Πρωτότυπου</h3>
                            <div className="space-y-4">
                                <div className="flex items-center text-lg">
                                    <span className="font-bold text-3xl text-yellow-300 mr-2">1500€</span>
                                    <span className="text-gray-300">για την 1η ομάδα</span>
                                </div>
                                <div className="flex items-center text-lg">
                                    <span className="font-bold text-2xl text-yellow-300 mr-2">500€</span>
                                    <span className="text-gray-300">για την 2η ομάδα</span>
                                </div>
                                <p className="text-gray-400">σε υπηρεσίες cloud της LANCOM</p>
                            </div>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900 to-blue-800 p-px transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="relative h-full rounded-xl bg-gray-900/50 backdrop-blur-sm p-8 border border-blue-800">
                            <Rocket className="absolute top-6 right-6 w-12 h-12 text-yellow-300" />
                            <h3 className="font-mono text-2xl font-bold mb-4 text-gray-100">Κατηγορία Καινοτόμου Ιδέας</h3>
                            <div className="space-y-4">
                                <div className="flex items-center text-lg">
                                    <span className="font-bold text-3xl text-yellow-300 mr-2">1500€</span>
                                    <span className="text-gray-300">για την 1η ομάδα</span>
                                </div>
                                <div className="flex items-center text-lg">
                                    <span className="font-bold text-2xl text-yellow-300 mr-2">500€</span>
                                    <span className="text-gray-300">για την 2η ομάδα</span>
                                </div>
                                <p className="text-gray-400">σε υπηρεσίες cloud της LANCOM</p>
                                <div className="pt-2">
                                    <span className="inline-flex items-center bg-blue-900/50 text-yellow-300 px-4 py-2 rounded-lg text-sm font-medium border border-blue-800">
                                        <Rocket className="w-4 h-4 mr-2" />
                                        Συμμετοχή στον επόμενο κύκλο OK!Thess
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrizesSection;