import React from 'react';
import { CheckCircle, Target, Code, AlertTriangle } from 'lucide-react';

const EvaluationCriteriaSection = () => {
    const criteria = [
        {
            title: "Καινοτομία",
            percentage: "50%",
            description: "Πρόκειται για το κυριότερο συστατικό, το οποίο καταλαμβάνει το 50% της βαθμολογίας.",
            icon: Target
        },
        {
            title: "Αξιοποίηση Δεδομένων",
            percentage: "20%",
            description: "Σημαντικό παράγοντα αποτελεί και το ποσοστό αξιοποίησης των δεδομένων που θα σας δοθούν, το οποίο βαθμολογείται με 20%.",
            icon: CheckCircle
        },
        {
            title: "Τεχνική Αρτιότητα / Εφικτότητα",
            percentage: "30%",
            description: "Για την κατηγορία της πρωτότυπης εφαρμογής, η τεχνική αρτιότητα της αξιολογείται με 30%, ενώ για την κατηγορία της επιχειρηματικής ιδέας, το ίδιο ποσοστό θα αναφέρεται στην εφικτότητά της στον πραγματικό κόσμο.",
            icon: Code
        }
    ];

    return (
        <section className="relative py-20 bg-gray-900">
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
                        Κριτήρια Αξιολόγησης
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Κάθε πρόταση θα αξιολογηθεί με βάση τρία κύρια κριτήρια
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {criteria.map((criterion, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900 to-blue-800 p-px transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <div className="relative h-full rounded-xl bg-gray-900/50 p-7 border border-blue-800 flex flex-col">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-mono text-2xl font-bold text-gray-100 flex-1">
                                        {criterion.title}
                                    </h3>
                                    <criterion.icon className="w-12 h-12 text-yellow-300 flex-shrink-0 ml-4" />
                                </div>
                                <div className="flex items-center mt-4 mb-4">
                                    <span className="font-bold text-3xl text-yellow-300 mr-2">
                                        {criterion.percentage}
                                    </span>
                                    <span className="text-gray-300">της συνολικής βαθμολογίας</span>
                                </div>
                                <p className="text-gray-400 flex-1">
                                    {criterion.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>


                {/* Warning Section */}
                <div className="mt-16 bg-red-800/30 border border-red-700 rounded-lg p-6 text-center">
                    <AlertTriangle className="mx-auto w-12 h-12 text-red-400 mb-4" />
                    <h3 className="text-2xl font-bold text-red-400 mb-2">
                        Προειδοποίηση
                    </h3>
                    <p className="text-gray-300">
                        Η χρήση κώδικα ή άλλων υλικών που έχουν αναπτυχθεί από το σπίτι είναι αποδεκτή,
                        αλλά πρέπει να δηλωθεί ρητά. Οποιαδήποτε απόκρυψη μπορεί να θεωρηθεί ως απόπειρα εξαπάτησης.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EvaluationCriteriaSection;