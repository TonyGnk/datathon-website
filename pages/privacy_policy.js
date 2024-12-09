import React from 'react';
import Header from '../components/2024/Header';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <div className="bg-gray-800 text-gray-100 p-8">
                <div className="max-w-4xl mx-auto bg-gray-900 mt-11 p-6 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold mb-4 text-yellow-300">
                        Ενημέρωση για την Επεξεργασία Δεδομένων Προσωπικού Χαρακτήρα
                    </h1>
                    <p className="mb-4">
                        Στα πλαίσια του Γενικού Κανονισμού για την Προστασία Προσωπικών Δεδομένων
                        [Κανονισμός (ΕΕ) 2016/679)] και του εκάστοτε ισχύοντος κανονιστικού πλαισίου,
                        σας ενημερώνουμε για τους όρους που διέπουν τη συλλογή και επεξεργασία των
                        δεδομένων προσωπικού χαρακτήρα, κατά την υποβολή της αίτησής σας για συμμετοχή
                        στο διαγωνισμό Datathon του Πανεπιστημίου Μακεδονίας.
                    </p>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-yellow-300 mb-2">
                            Γενικές Πληροφορίες
                        </h2>
                        <p>
                            Το Datathon είναι ένας ετήσιος διαγωνισμός αξιοποίησης ανοικτών δεδομένων για την ανάπτυξη
                            και παρουσίαση καινοτόμων ιδεών και εφαρμογών, ο οποίος διεξάγεται στο Πανεπιστήμιο Μακεδονίας.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-yellow-300 mb-2">
                            Υπεύθυνος Επεξεργασίας
                        </h2>
                        <p>
                            Τα προσωπικά σας δεδομένα συλλέγει, διατηρεί σε αρχείο και επεξεργάζεται η συντονιστική ομάδα του διαγωνισμού
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-yellow-300 mb-2">
                            Ποια προσωπικά σας δεδομένα συλλέγονται
                        </h2>
                        <p>
                            Τα δεδομένα που συλλέγονται περιλαμβάνουν το επώνυμο, το όνομα, τη σχολή φοίτησης, το αντικείμενο σπουδών και το ακαδημαϊκό σας email.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-yellow-300 mb-2">
                            Σκοπός επεξεργασίας προσωπικών δεδομένων
                        </h2>
                        <p>
                            Η αξιολόγηση της υποψηφιότητας, η επικοινωνία, και η προβολή των αποτελεσμάτων του διαγωνισμού
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-yellow-300 mb-2">
                            Νομική Βάση Επεξεργασίας
                        </h2>
                        <p>
                            Η συγκατάθεσή σας κατά την υποβολή της αίτησης αποτελεί τη νομική βάση (άρθρο 6, παρ. 1, περ. β’ ΓΚΠΔ).
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-yellow-300 mb-2">
                            Χρονικό διάστημα τήρησης
                        </h2>
                        <p>
                            Τα δεδομένα σας διατηρούνται για πέντε (5) έτη. Εφόσον απαιτείται, γίνεται ανωνυμοποίηση για στατιστικούς σκοπούς.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-yellow-300 mb-2">
                            Δικαιώματα
                        </h2>
                        <ul className="list-disc list-inside">
                            <li>Πρόσβαση στα δεδομένα σας</li>
                            <li>Διόρθωση ή διαγραφή δεδομένων</li>
                            <li>Περιορισμός επεξεργασίας</li>
                            <li>Φορητότητα των δεδομένων</li>
                            <li>Ανάκληση συγκατάθεσης</li>
                        </ul>
                        <p className="mt-2">
                            Για θέματα προστασίας δεδομένων, μπορείτε να επικοινωνήσετε με τον Υπεύθυνο Προστασίας Δεδομένων
                            στο <a href="mailto:dpo@uom.edu.gr" className="text-yellow-300 underline">dpo@uom.edu.gr</a>.
                        </p>
                    </section>

                    <footer className="text-sm text-gray-400">
                        Αρμόδια αρχή:   <a href="https://www.dpa.gr" className="text-yellow-300 underline"> Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα
                        </a>.
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
