import React from 'react';
import { ExternalLink } from 'lucide-react';

const SponsorCard = ({ name, description, logo, link, tier }) => {
    return (
        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-900 to-blue-800 p-px transition-all duration-300 hover:scale-105">
            <div className="h-full rounded-xl bg-gray-900/90 backdrop-blur-sm border border-blue-800 p-6">
                <div className="h-24 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                    <img
                        src={logo}
                        alt={`${name} logo`}
                        className="max-h-full w-auto object-contain "
                    />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-100">{name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
                <div
                    className="flex items-center text-yellow-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    onClick={() => window.open(link, '_blank')}
                >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    <span className="cursor-pointer" onClick={() => window.open(link, '_blank')}>Επισκεφθείτε την ιστοσελίδα</span>
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
            logo: "/eellak-logo.png",
            link: "https://ellak.gr/"
        },
        {
            name: "AI4DELIBERATION",
            description: "Funded by EU's Horizon Europe, AI4Deliberation integrates AI into citizen deliberation processes to address challenges in modern democracies.",
            logo: "/ai-logo.jpg",
            link: ""
        }
    ];

    const mainSponsors = [
        {
            name: "Lancom",
            description: "Αμιγώς ελληνική εταιρεία στο πεδίο των IT υπηρεσιών data center, με τρία Enterprise cloud data centers σε Αθήνα και Θεσσαλονίκη.",
            logo: "/lancom-logo.jpg",
            link: "https://www.lancom.gr/"
        },
        {
            name: "OK!Thess",
            description: "Το κορυφαίο startup hub της Θεσσαλονίκης και καταλύτης για την ανάπτυξη του τοπικού οικοσυστήματος καινοτομίας.",
            logo: "/okthess-logo.jpg",
            link: "https://okthess.gr/"
        }
    ];

    const supportSponsors = [
        {
            name: "Χούτος Catering",
            description: "Catering υψηλής ποιότητας με έξι πολυχώρους στη Θεσσαλονίκη.",
            logo: "/houtos-logo2.png",
            link: "https://cateringhoutos.gr/"
        },
        {
            name: "Seven Loft",
            description: "Εξειδικευμένη εταιρεία στην κατασκευή & προώθηση ιστοσελίδων με Google Ads, SEO & Social.",
            logo: "/sevenloft-logo.jpg",
            link: "https://www.sevenloft.gr/"
        },
        {
            name: "Φοιτητικό Φωτοτυπικό Εργαστήριο",
            description: "Υπηρεσίες εκτυπώσεων και εντύπων υψηλής ποιότητας.",
            logo: "/foititiko-logo.jpg",
            link: "https://fititiko.gr/"
        }
    ];

    return (
        <section className="relative py-20 bg-gray-900 overflow-hidden">
            {/* Abstract background with yellow accent */}
            <div className="absolute inset-0 overflow-hidden opacity-5">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(#FFD60A 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-mono text-4xl font-bold text-gray-100 mb-4">
                        Οι<span className="mx-[10px] text-yellow-300">Υποστηρικτές</span>μας
                    </h2>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Ευχαριστούμε τους συνδιοργανωτές και χορηγούς μας που κάνουν το Datathon 2024 πραγματικότητα
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Co-organizers */}
                    <div>
                        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-100">
                            <span className="inline-block border-b-2 border-yellow-300 pb-1">
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
                        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-100">
                            <span className="inline-block border-b-2 border-yellow-300 pb-1">
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
                        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-100">
                            <span className="inline-block border-b-2 border-yellow-300 pb-1">
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