import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            question: 'Τι είναι το Datathon @Uom;',
            answer: 'Το Datathon @UoM είναι ένας ετήσιος διαγωνισμός ανοικτών δεδομένων που διοργανώνεται από φοιτητές του ΠαΜακ. Φοιτητές από όλη τη χώρα οργανώνονται σε ομάδες και συνεργάζονται για μια ημέρα, αξιοποιώντας τις παρεχόμενες πύλες ανοικτών δεδομένων με στόχο να λύσουν συγκεκριμένα προβλήματα ή να δημιουργήσουν προβλέψεις. Ως αποτέλεσμα, αναπτύσσονται νέες ιδέες και εφαρμογές για τη βελτίωση υφιστάμενων ή τη δημιουργία εντελώς πρωτοφανών υπηρεσιών.'
        },
        {
            question: 'Τι είναι τα ανοιχτά δεδομένα;',
            answer: 'Ο όρος Ανοιχτά (κρατικά) δεδομένα αφορά πληροφορίες που συλλέγονται, παράγονται ή αποκτώνται δια αντιτίμου από τους δημόσιους φορείς και διατίθενται δωρεάν προς περαιτέρω χρήση για οποιονδήποτε σκοπό.'
        },
        {
            question: 'Ποιες είναι οι κατηγορίες συμμετοχής;',
            answer: `
    Μπορείς να πάρεις μέρος και να αναπτύξεις την ιδέα σου σε κώδικα, δημιουργώντας μια πρωτότυπη εφαρμογή (Κατηγορία 1), είτε να παρουσιάσεις την ιδέα σου δημιουργώντας μια περιεκτική και λεπτομερή παρουσίαση με εργαλεία όπως mock-up screens, γραφήματα και wireframes (Κατηγορία 2). \nΚαι στις 2 κατηγορίες θα δοθούν κατευθυντήριες προκλήσεις (challenges) για τις οποίες θα πρέπει να προταθούν και να παρουσιαστούν λύσεις. \nΑπό κάθε κατηγορία θα αναδειχθεί μια νικήτρια ομάδα!`
        },
        {
            question: 'Πότε και πού θα πραγματοποιηθεί το Datathon @UoM 2024;',
            answer: 'Το Datathon @UoM θα πραγματοποιηθεί την Κυριακή 8 Δεκεμβρίου, στο αμφιθέατρο 13 και στα εργαστήρια 234 και 334 του Πανεπιστημίου Μακεδονίας.'
        },
        {
            question: 'Ποιος μπορεί να συμμετάσχει;',
            answer: 'Το Datathon @UoM απευθύνεται σε φοιτητές/τριες προπτυχιακού και μεταπτυχιακού επιπέδου, οποιουδήποτε τμήματος και πανεπιστημίου.'
        },
        {
            question: 'Μπορώ να συμμετάσχω ατομικά ή πρέπει να οργανώσω ομάδα;',
            answer: 'Ο καλύτερος και πιο διασκεδαστικός τρόπος συμμετοχής είναι μέσω μιας ομάδας που συνεργάζεται με ένα κοινό όραμα. Συμπλήρωσε τα μέλη της ομάδας σου (1-4) στην φόρμα δήλωσης συμμετοχής, ή επίτρεψε μας να σε φέρουμε με άλλους συμμετέχοντες!'
        },
        {
            question: 'Πόσο κοστίζει;',
            answer: 'Δεν υπάρχει κόστος συμμετοχής!'
        },
        {
            question: 'Τι πρέπει να φέρω;',
            answer: 'Αρχικά θα χρειαστεί να φέρεις τον εαυτό σου, γεμάτο όρεξη για δουλειά και καλή διάθεση...\nΜετά από αυτό, το laptop σου θα ήταν μια καλή ιδέα, αλλά δεν θα τα χαλάσουμε αν δεν το φέρεις, καθώς ο διαγωνισμός θα διεξαχθεί σε εργαστήριο υπολογιστών.'
        },
        {
            question: 'Τι ταχύτητες internet θα έχουν οι υπολογιστές εκεί;',
            answer: 'Τα εργαστήρια διαθέτουν υψηλής ταχύτητας σύνδεση στο διαδίκτυο, εξασφαλίζοντας απρόσκοπτη πρόσβαση σε δεδομένα και εργαλεία. Οι ταχύτητες φτάνουν έως 500Mbps για ενσύρματη σύνδεση και περίπου 50Mbps για ασύρματη.'
        },
        {
            question: 'Τι προγράμματα είναι εγκατεστημένα στους υπολογιστές και σε ποιες εκδόσεις;',
            answer: 'Οι υπολογιστές (με λειτουργικό σύστημα Windows 10) διαθέτουν εκτενή βάση προγραμμάτων, καλύπτοντας κάθε ανάγκη. Ενδεικτικά, είναι εγκατεστημένα τα εξής: \n- VS Code\n- Visual Studio 2022\n- Android Studio (Hedgehog)\n- Eclipse\n- Code::Blocks\n- Postman\n- PuTTY\nΣημειώνεται ότι η σουίτα εφαρμογών Microsoft Office δεν είναι διαθέσιμη.'
        },
        {
            question: 'Πώς μπορώ να επικοινωνήσω μαζί σας;',
            answer: 'Μπορείς να μας στείλεις email στο datathon@uom.edu.gr ή να μας βρεις στα social media.'
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id='faq' className="relative py-0 bg-gray-900">
            {/* Abstract geometric background similar to prizes section */}
            <div className="absolute inset-0 overflow-hidden opacity-5">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="absolute">
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

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-mono text-4xl font-bold text-gray-100 mb-4 text-center flex flex-wrap justify-center gap-x-2">
                        <span>Συχνές</span>
                        <span className="text-yellow-300">Ερωτήσεις</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        Βρείτε απαντήσεις στις πιο συχνές ερωτήσεις για το Datathon
                    </p>
                </div>

                <div className="space-y-3">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-900 to-blue-800 p-px transition-all duration-300"
                        >
                            <div className="relative rounded-xl bg-gray-900/50 backdrop-blur-sm border border-blue-800">
                                <button
                                    className="w-full px-4 py-2 text-left flex items-center hover:bg-blue-900/30 transition-colors duration-200"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <div className="flex-1 min-w-0 mr-4">
                                        <span className="text-Mg font-small text-gray-100 block truncate">
                                            {faq.question}
                                        </span>
                                    </div>
                                    <ChevronDown
                                        className={`flex-shrink-0 w-6 h-6 text-yellow-300 transition-transform duration-200 ${openIndex === index ? 'transform rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`transition-all duration-200 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        } overflow-hidden`}
                                >
                                    <div className="px-6 py-4 text-gray-300 border-t border-blue-800/50">
                                        {faq.answer.split('\n').map((paragraph, i) => (
                                            <p key={i} className="mb-2">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;