import React, { useEffect, useRef } from 'react';
import {
    Clock,
    UserCheck,
    Presentation,
    Users,
    Coffee,
    Target,
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
                <div className="bg-white p-4 rounded-lg shadow-lg border-2 border-gray-400 hover:border-blue-800 transition-colors duration-300">
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
        { time: "10:00 π.μ. – 10:30 π.μ.", title: "Εγγραφές", icon: UserCheck },
        { time: "10:30 π.μ. – 11:00 π.μ.", title: "Σύντομη παρουσίαση event", icon: Presentation },
        { time: "11:00 π.μ. – 2:00 μ.μ.", title: "Εργασία ομάδων", icon: Users },
        { time: "2:00 μ.μ. – 2:45 μ.μ.", title: "Break – Light lunch", icon: Coffee },
        { time: "2:45 μ.μ. – 5:00 μ.μ.", title: "Εργασία ομάδων", icon: Target },
        { time: "5:00 μ.μ. – 6:00 μ.μ.", title: "Παρουσίαση αποτελεσμάτων ομάδων", icon: Presentation },
        { time: "6:00 μ.μ. – 6:40 μ.μ.", title: "Αξιολόγηση από επιτροπή", icon: Award },
        { time: "6:40 μ.μ. – 7:00 μ.μ.", title: "Απονομή βραβείων", icon: Trophy }
    ];

    return (
        <div className="max-w-4xl mx-auto py-0 px-4 bg-[#D6BE3C]">
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
    );
};

export default Timeline;