import React, { useEffect, useRef } from 'react';
import {
    UserCheck,
    Presentation,
    Users,
    Coffee,
    Award,
    Trophy
} from 'lucide-react';

const TimelineItem = ({ time, title, icon: Icon, isLeft }) => {
    const itemRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-4');
                }
            },
            { threshold: 0.1 }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => {
            if (itemRef.current) {
                observer.unobserve(itemRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={itemRef}
            className={`flex items-center gap-4 mb-8 opacity-0 translate-y-4 transition-all duration-700 ${isLeft ? 'flex-row-reverse' : ''
                }`}
        >
            <div className={`flex-1 ${isLeft ? 'text-right' : ''}`}>
                <div className="bg-white p-2 rounded-lg shadow-lg border-2 border-gray-400 hover:border-blue-800 transition-colors duration-300">
                    <p className="text-gray-700 font-bold mb-1">{time}</p>
                    <p className="text-gray-700">{title}</p>
                </div>
            </div>
            <div className="relative">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center z-10 relative hover:bg-blue-900 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-blue-200" />
            </div>
            <div className="flex-1" />
        </div>
    );
};

const Timeline = () => {
    const timelineData = [
        { time: "10:00 – 10:30", title: "Προσέλευση & Ταυτοποίηση", icon: UserCheck },
        { time: "10:35 – 11:40", title: "Χαιρετισμός Καθ. Νίκου Σαμαρά, Αντιπρύτανη Παν. Μακεδονίας", icon: Presentation },
        { time: "10:45 – 11:50", title: "Χαιρετισμός κ. Νίκου Τζόλλα, Αντιπεριφερειάρχη Ψηφιακής Διακυβέρνησης Π.Κ.Μ.", icon: Presentation },
        { time: "10:50 – 11:55", title: "Χαιρετισμός κ. Χαράλαμπου Χατζή, Προϊστάμενος Διεύθυνσης Ηλ. Διακυβέρνησης Δήμου Θεσσαλονίκης", icon: Presentation },
        { time: "10:55 – 11:00", title: "Χαιρετισμός κ. Αλέξανδρου Μελίδη, Γενικού Διευθυντή ΕΕΛΛΑΚ", icon: Presentation },

        // { time: "10:30 – 11:00", title: "Σύντομη παρουσίαση", icon: Presentation },
        { time: "11:00 – 14:00", title: "Εργασία ομάδων", icon: Users },
        { time: "14:00 – 14:45", title: "Break – Light lunch", icon: Coffee },
        { time: "14:45 – 17:00", title: "Εργασία ομάδων", icon: Users },
        { time: "17:00 – 18:00", title: "Παρουσίαση αποτελεσμάτων ομάδων", icon: Presentation },
        { time: "18:00 – 18:40", title: "Αξιολόγηση από επιτροπή", icon: Award },
        { time: "18:40 – 19:00", title: "Απονομή βραβείων", icon: Trophy }
    ];

    return (
        <div className="relative pt-12 bg-gray-900">
            <div className="text-center mb-12">
                <h2 className="font-mono text-4xl font-bold text-yellow-300">
                    Πρόγραμμα
                </h2>
            </div>
            <div className="bg-[#BDA835]">
                <div className="max-w-4xl mx-auto py-0 px-4 ">
                    <div className="relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gray-900" />
                        <div className="relative z-10 py-10">
                            {timelineData.map((item, index) => (
                                <TimelineItem
                                    key={index}
                                    {...item}
                                    isLeft={index % 2 === 0}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Timeline;