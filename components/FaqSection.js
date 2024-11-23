import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            question: 'Τι είναι το Datathon @Uom;',
            answer: 'Το Datathon @UoM είναι ένας ετήσιος διαγωνισμός ανοιχτών δεδομένων που διοργανώνεται, κυρίως, από φοιτητές του ΠαΜακ. Φοιτητές από όλη τη χώρα οργανώνονται σε ομάδες και συνεργάζονται για μια ημέρα, αξιοποιώντας τις παρεχόμενες πύλες ανοιχτών δεδομένων με στόχο να λύσουν συγκεκριμένα προβλήματα ή να δημιουργήσουν προβλέψεις. Ως αποτέλεσμα, αναπτύσσονται νέες ιδέες και εφαρμογές για τη βελτίωση υφιστάμενων ή τη δημιουργία εντελώς πρωτοφανών υπηρεσιών.'
        },
        {
            question: 'Τι είναι τα ανοιχτά δεδομένα;',
            answer: 'Ο όρος Ανοιχτά (κρατικά) δεδομένα αφορά πληροφορίες που συλλέγονται, παράγονται ή αποκτώνται δια αντιτίμου από τους δημόσιους φορείς και διατίθενται δωρεάν προς περαιτέρω χρήση για οποιονδήποτε σκοπό.'
        },
        {
            question: 'Ποιες είναι οι κατηγορίες συμμετοχής;',
            answer: `Κατηγορία 1: Ανάπτυξη Πρωτότυπης Εφαρμογής
Κατηγορία 2: Παρουσίαση Καινοτόμας Ιδέας

Μπορείς να πάρεις μέρος και να αναπτύξεις την ιδέα σου σε κώδικα, δημιουργώντας μια πρωτότυπη εφαρμογή (Κατηγορία 1), είτε να παρουσιάσεις την ιδέα σου δημιουργώντας μια περιεκτική και λεπτομερή παρουσίαση με εργαλεία όπως mock-up screens, γραφήματα και wireframes (Κατηγορία 2). Και στις 2 κατηγορίες θα δοθούν κατευθυντήριες προκλήσεις (challenges) για τις οποίες θα πρέπει να προταθούν και να παρουσιαστούν λύσεις. Από κάθε κατηγορία θα αναδειχθεί μια νικήτρια ομάδα!`
        },
        {
            question: 'Πότε και πού θα πραγματοποιηθεί το Datathon @UoM 2024;',
            answer: 'Το Datathon @UoM θα πραγματοποιηθεί την Κυριακή 8 Δεκεμβρίου, στα εργαστήρια 234 και 334 του Πανεπιστημίου Μακεδονίας.'
        },
        {
            question: 'Ποιος μπορεί να συμμετάσχει;',
            answer: 'Το Datathon @UoM απευθύνεται σε φοιτητές/τριες προπτυχιακού και μεταπτυχιακού επιπέδου, οποιουδήποτε τμήματος και πανεπιστημίου.'
        },
        {
            question: 'Ποια είναι τα έπαθλα;',
            answer: 'Οι ομάδες που θα αναδειχθούν πρώτες από κάθε κατηγορία συμμετοχής, θα λάβουν έπαθλο αξίας 2000€ σε cloud services η κάθε μία, ενώ μια από τις νικήτριες ομάδες θα έχει απευθείας πρόσβαση στον επόμενο γύρο του ok!Thess Acceleration Cycle! Επιπλέον, θα δοθούν βεβαιώσεις συμμετοχής στους/στις συμμετέχοντες/ουσες όλων των ομάδων.'
        },
        {
            question: 'Μπορώ να συμμετάσχω ατομικά ή πρέπει να οργανώσω ομάδα;',
            answer: 'Ο καλύτερος και πιο διασκεδαστικός τρόπος συμμετοχής είναι μέσω μιας ομάδας που συνεργάζεται με ένα κοινό όραμα. Συμπλήρωσε τα μέλη της ομάδας σου (1-4) στην φόρμα δήλωσης συμμετοχής, ή έλα να σε προσθέσουμε εμείς σε μία, την ημέρα του Datathon!'
        },
        {
            question: 'Πόσο κοστίζει;',
            answer: 'Δεν υπάρχει κόστος συμμετοχής!'
        },
        {
            question: 'Τι πρέπει να φέρω;',
            answer: 'Αρχικά θα χρειαστεί να φέρεις τον εαυτό σου, γεμάτο όρεξη για δουλειά και καλή διάθεση. Μετά από αυτό, το laptop σου θα ήταν μια καλή ιδέα, αλλά δεν θα τα χαλάσουμε αν δεν το φέρεις, καθώς ο διαγωνισμός θα διεξαχθεί σε εργαστήριο υπολογιστών. Τέλος, μπορείς να φέρεις μαζί σου και κάποια φιλαράκια με κοινά ενδιαφέροντα!'
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                    Συχνές Ερωτήσεις
                </h2>

                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-sm overflow-hidden"
                        >
                            <button
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                                onClick={() => toggleFaq(index)}
                            >
                                <span className="text-lg font-medium text-gray-900">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openIndex === index ? 'transform rotate-180' : ''
                                        }`}
                                />
                            </button>

                            <div
                                className={`transition-all duration-200 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    } overflow-hidden`}
                            >
                                <div className="px-6 py-4 text-gray-600 bg-gray-50">
                                    {faq.answer.split('\n').map((paragraph, i) => (
                                        <p key={i} className="mb-2">
                                            {paragraph}
                                        </p>
                                    ))}
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