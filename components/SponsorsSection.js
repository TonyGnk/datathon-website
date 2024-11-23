import React from 'react';
import { ExternalLink } from 'lucide-react';

const SponsorCard = ({ name, description, logo, tier }) => {
    return (
        <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="p-6">
                <div className="h-24 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                    <img
                        src={`/api/placeholder/200/80`}
                        alt={`${name} logo`}
                        className="max-h-full w-auto object-contain"
                    />
                </div>
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
                <div className="flex items-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Επισκεφθείτε την ιστοσελίδα
                </div>
            </div>
        </div>
    );
};

const SponsorsSection = () => {
    const coOrganizers = [
        {
            name: "ΕΕΛΛΑΚ",
            description: "Ο Οργανισμός Ανοιχτών Τεχνολογιών (ΕΕΛ/ΛΑΚ) είναι μία αστική μη κερδοσκοπική εταιρεία με 37 Πανεπιστήμια και Ερευνητικά Κέντρα ως μετόχους.",
            logo: "/eellak-logo.png"
        },
        {
            name: "AI4DELIBERATION",
            description: "Funded by EU's Horizon Europe, AI4Deliberation integrates AI into citizen deliberation processes to address challenges in modern democracies.",
            logo: "/ai4d-logo.png"
        }
    ];

    const mainSponsors = [
        {
            name: "Lancom",
            description: "Αμιγώς ελληνική εταιρεία στο πεδίο των IT υπηρεσιών data center, με τρία Enterprise cloud data centers σε Αθήνα και Θεσσαλονίκη.",
            logo: "/lancom-logo.png"
        },
        {
            name: "OK!Thess",
            description: "Το κορυφαίο startup hub της Θεσσαλονίκης και καταλύτης για την ανάπτυξη του τοπικού οικοσυστήματος καινοτομίας.",
            logo: "/okthess-logo.png"
        }
    ];

    const supportSponsors = [
        {
            name: "Χούτος Catering",
            description: "Catering υψηλής ποιότητας με έξι πολυχώρους στη Θεσσαλονίκη.",
            logo: "/houtos-logo.png"
        },
        {
            name: "Seven Loft",
            description: "Εξειδικευμένη εταιρεία στην κατασκευή & προώθηση ιστοσελίδων με Google Ads, SEO & Social.",
            logo: "/sevenloft-logo.png"
        },
        {
            name: "Φοιτητικό Φωτοτυπικό Εργαστήριο",
            description: "Υπηρεσίες εκτυπώσεων και εντύπων υψηλής ποιότητας.",
            logo: "/copy-logo.png"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Οι Υποστηρικτές μας
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Ευχαριστούμε τους συνδιοργανωτές και χορηγούς μας που κάνουν το Datathon 2024 πραγματικότητα
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Co-organizers */}
                    <div>
                        <h3 className="text-2xl font-semibold text-center mb-8">
                            <span className="inline-block border-b-2 border-blue-500 pb-1">
                                Συνδιοργανωτές
                            </span>
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {coOrganizers.map((sponsor, index) => (
                                <SponsorCard key={index} {...sponsor} tier="co-organizer" />
                            ))}
                        </div>
                    </div>

                    {/* Main Sponsors */}
                    <div>
                        <h3 className="text-2xl font-semibold text-center mb-8">
                            <span className="inline-block border-b-2 border-blue-500 pb-1">
                                Χορηγοί
                            </span>
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {mainSponsors.map((sponsor, index) => (
                                <SponsorCard key={index} {...sponsor} tier="main" />
                            ))}
                        </div>
                    </div>

                    {/* Support Sponsors */}
                    <div>
                        <h3 className="text-2xl font-semibold text-center mb-8">
                            <span className="inline-block border-b-2 border-blue-500 pb-1">
                                Υποστηρικτές
                            </span>
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {supportSponsors.map((sponsor, index) => (
                                <SponsorCard key={index} {...sponsor} tier="support" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SponsorsSection;