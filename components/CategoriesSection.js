import React from 'react';
import { Code, Lightbulb, ChevronRight, Users, Clock, Award } from 'lucide-react';

const CategoryCard = ({ title, description, skills, icon: Icon, gradient, requirements }) => {
    return (
        <div
            className={`relative overflow-hidden rounded-xl p-0.5 transition-transform duration-300 hover:scale-105 ${gradient}`}
        >
            {/* Network lines background for card */}
            <div className="absolute inset-0 opacity-30">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute h-px bg-yellow-300"
                        style={{
                            top: `${i * 25}%`,
                            left: '-10%',
                            right: '-10%',
                            transform: `rotate(${i * 15}deg)`
                        }}
                    />
                ))}
            </div>

            <div className="relative bg-gray-900 rounded-lg p-6 h-full border border-blue-900">
                <div className="absolute top-4 right-4">
                    <Icon className="w-8 h-8 text-yellow-300" />
                </div>

                <h3 className="font-mono text-2xl font-bold mb-4 pr-12 text-gray-100">{title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

                <div className="space-y-4">
                    <div>
                        <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-gray-400 mb-2">
                            Προτεινομενες Δεξιοτητες
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-blue-900/50 text-yellow-300 rounded-full text-sm font-medium border border-blue-800"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-gray-400 mb-2">
                            Τι περιλαμβάνει
                        </h4>
                        <ul className="space-y-2">
                            {requirements.map((req, index) => (
                                <li key={index} className="flex items-center text-gray-300">
                                    <ChevronRight className="w-4 h-4 text-yellow-300 mr-2" />
                                    {req}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CategoriesSection = () => {
    const categories = [
        {
            title: "Κατηγορία 1: Ανάπτυξη Πρωτότυπης Εφαρμογής",
            description: "Στην κατηγορία αυτή, οι ομάδες θα αναπτύξουν μια ολοκληρωμένη εφαρμογή αξιοποιώντας τα παρεχόμενα δεδομένα. Εστιάζουμε στην τεχνική υλοποίηση και την πρακτική εφαρμογή των ιδεών σας.",
            skills: ["Python", "Data Analysis", "Web Development", "Machine Learning", "Data Visualization"],
            icon: Code,
            gradient: "bg-gradient-to-r from-blue-900 to-blue-800",
            requirements: [
                "Λειτουργικό πρωτότυπο",
                "Τεχνική τεκμηρίωση",
                "Live demo",
                "Source code"
            ]
        },
        {
            title: "Κατηγορία 2: Παρουσίαση Καινοτόμου Ιδέας",
            description: "Αυτή η κατηγορία απευθύνεται σε ομάδες που θέλουν να παρουσιάσουν καινοτόμες ιδέες, εστιάζοντας στην επίλυση προβλημάτων και τη δημιουργία αξίας μέσω των δεδομένων.",
            skills: ["Problem Solving", "Design Thinking", "Data Strategy", "Business Analysis", "UI/UX Design"],
            icon: Lightbulb,
            gradient: "bg-gradient-to-r from-blue-800 to-blue-900",
            requirements: [
                "Αναλυτική παρουσίαση",
                "Mock-ups / Wireframes",
                "Business case",
                "Implementation plan"
            ]
        }
    ];

    return (
        <section id="categories" className="py-16 bg-gray-900">
            {/* Network lines background for section */}
            <div className="absolute inset-0 overflow-hidden opacity-5">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute h-px bg-yellow-300"
                        style={{
                            top: `${i * 5}%`,
                            left: '-10%',
                            right: '-10%',
                            transform: `rotate(${i * 10}deg)`
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-mono text-3xl font-bold text-gray-100 mb-4">
                        Κατηγορίες Συμμετοχής
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Επίλεξε την κατηγορία που ταιριάζει καλύτερα στις δεξιότητες και τα ενδιαφέροντά σου
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {categories.map((category, index) => (
                        <CategoryCard key={index} {...category} />
                    ))}
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-900 border border-blue-900 rounded-lg p-6 text-center">
                        <Users className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                        <h3 className="font-mono font-semibold mb-2 text-gray-100">Ομάδες 1-4 ατόμων</h3>
                        <p className="text-gray-300">Συνεργαστείτε για καλύτερα αποτελέσματα</p>
                    </div>

                    <div className="bg-gray-900 border border-blue-900 rounded-lg p-6 text-center">
                        <Clock className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                        <h3 className="font-mono font-semibold mb-2 text-gray-100">Διάρκεια 24 ωρών</h3>
                        <p className="text-gray-300">Εντατική ανάπτυξη ιδεών και λύσεων</p>
                    </div>

                    <div className="bg-gray-900 border border-blue-900 rounded-lg p-6 text-center">
                        <Award className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                        <h3 className="font-mono font-semibold mb-2 text-gray-100">Σημαντικά Έπαθλα</h3>
                        <p className="text-gray-300">Βραβεία και ευκαιρίες για κάθε κατηγορία</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;