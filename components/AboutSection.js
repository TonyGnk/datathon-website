import React from 'react';
import { Code2, Users2, Rocket, Database, Users, Clock, Sparkles, ArrowRight, Code, Brain } from 'lucide-react';

const AboutSection = () => {
    const features = [
        {
            icon: Code2,
            title: "Καινοτομία",
            desc: "Χρήση τεχνολογιών για την επίλυση προβλημάτων"
        },
        {
            icon: Users2,
            title: "Συνεργασία",
            desc: "Δημιουργία ομάδων για κοινό στόχο"
        },
        {
            icon: Brain,
            title: "Δημιουργικότητα",
            desc: "Επίλυση προβλημάτων με ανοιχτά δεδομένα"
        },
        {
            icon: Rocket,
            title: "Ανάπτυξη",
            desc: "Υλοποίηση πρωτότυπων εφαρμογών"
        }
    ];

    return (
        <section className="relative py-24 bg-gray-900 overflow-hidden">
            {/* Add a horizontal divider colored red */}
            <div className="absolute inset-x-0 top-0 h-1 mt-2 bg-gradient-to-r from-gray-400 to-gray-700" />

            <div id='whatIsDatathon' className="absolute inset-0 bg-[linear-gradient(rgba(25,25,25,1)_2px,transparent_2px),linear-gradient(90deg,rgba(25,25,25,1)_2px,transparent_2px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16 relative">
                    <h2 className="inline-block text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mb-6">
                        Τι είναι το Datathon @UoM;
                    </h2>
                </div>


                <div className="mt-16 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-300" />
                    <div className="relative p-8 bg-gray-900 rounded-xl leading-none">
                        <div className="grid md:grid-cols-[2fr,1fr] gap-8 items-center">
                            <p className="text-gray-300 leading-relaxed">
                                Φοιτητές οργανώνονται σε ομάδες και συνεργάζονται για μια ημέρα, αξιοποιώντας τις παρεχόμενες
                                πύλες ανοιχτών δεδομένων με στόχο να λύσουν συγκεκριμένα προβλήματα ή να δημιουργήσουν προβλέψεις.
                                Ως αποτέλεσμα, αναπτύσσονται νέες ιδέες και εφαρμογές για τη βελτίωση υφιστάμενων ή τη δημιουργία
                                εντελώς πρωτοφανών υπηρεσιών.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 text-gray-300">
                                    <Clock className="w-5 h-5 text-yellow-300" />
                                    <span>7 ώρες</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-300">
                                    <Users className="w-5 h-5 text-yellow-300" />
                                    <span>Ομάδες 1-4 ατόμων</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-300">
                                    <Sparkles className="w-5 h-5 text-yellow-300" />
                                    <span>Σημαντικά Έπαθλα</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-16"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-gray-700/30 backdrop-blur-sm rounded-xl p-8
                                transform transition-all duration-500 hover:scale-105 hover:bg-gray-800/50
                                border border-blue-900/30 hover:border-yellow-500/50"
                            >
                                {/* Hover effect background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/0 to-yellow-500/0 
                                    group-hover:from-yellow-300/10 group-hover:to-yellow-500/10 rounded-xl transition-all duration-500" />

                                {/* Content */}
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-yellow-300/10 to-yellow-500/10 
                                        flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <Icon className="w-8 h-8 text-yellow-300 transform group-hover:rotate-12 transition-transform duration-500" />
                                    </div>
                                    <h3 className="font-mono text-xl font-bold text-gray-100 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

const styles = `
@keyframes gradient-slow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes float {
    0%, 100% { transform: translateY(0) translateX(0); }
    25% { transform: translateY(-20px) translateX(10px); }
    50% { transform: translateY(-40px) translateX(-10px); }
    75% { transform: translateY(-20px) translateX(10px); }
}

.animate-gradient-slow {
    background-size: 400% 400%;
    animation: gradient-slow 15s ease infinite;
}

.animate-float {
    animation: float 15s ease infinite;
}
`;