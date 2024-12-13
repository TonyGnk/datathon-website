import React from 'react';
import { Code2, Users2, Rocket, Database, Users, Building2Icon, Clock, Sparkles, ArrowRight, Code, Brain } from 'lucide-react';

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
            <div id='whatIsDatathon' className="absolute inset-0 bg-[linear-gradient(rgba(25,25,25,1)_2px,transparent_2px),linear-gradient(90deg,rgba(25,25,25,1)_2px,transparent_2px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-14 relative">
                    <h2 className="font-mono text-4xl font-bold text-yellow-400 mb-12 text-center flex flex-wrap justify-center gap-x-2 ">
                        <span>Τι</span>
                        <span>είναι</span>
                        <span>το</span>
                        <span>Datathon</span>
                        <span>@UoM;</span>
                    </h2>
                </div>

                <div className="relative max-w-3xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center justify-center">
                        {/* First Image */}
                        <div className="w-full max-w-xs mx-auto aspect-video flex items-center justify-center">
                            <img
                                src="2024/logo2.png"
                                alt="Datathon Participants"
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Second Image */}
                        <div className="w-full max-w-xs mx-auto aspect-video flex items-center justify-center">
                            <img
                                src="2024/UOMLOGOGR1.svg"
                                alt="Datathon Event"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Centered divider line - Only visible on desktop */}
                    <div className="hidden md:block absolute top-1/2 left-1/2 h-full w-px bg-white/20 transform -translate-x-1/2 -translate-y-1/2" />
                </div>


                <div className="mt-16 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-300" />
                    <div className="relative p-8 bg-gray-900 rounded-xl leading-none">
                        <div className="grid md:grid-cols-[4fr,1fr] gap-8 items-center">
                            <p className="text-gray-300 leading-relaxed">
                                Φοιτητές οργανώνονται σε ομάδες και συνεργάζονται για μια ημέρα, αξιοποιώντας τις παρεχόμενες
                                πύλες ανοικτών δεδομένων με στόχο να λύσουν προβλήματα.
                                Ως αποτέλεσμα, αναπτύσσονται νέες ιδέες και εφαρμογές για τη βελτίωση υφιστάμενων ή τη δημιουργία εντελώς πρωτοφανών υπηρεσιών.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 text-gray-300">
                                    <Clock className="w-5 h-5 text-yellow-300" />
                                    <span>7 ώρες</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-300">
                                    <Users className="w-5 h-5 text-yellow-300" />
                                    <span>1-4 άτομα</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-300">
                                    <Building2Icon className="w-5 h-5 text-yellow-300" />
                                    <span>ΠαΜακ, Αμφ 13 & Εργαστήρια</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-16"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
