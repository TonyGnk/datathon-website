// import React, { useEffect, useState } from 'react';
// import {
//     ClipboardEdit,
//     Presentation,
//     Users,
//     Coffee,
//     Target,
//     Award,
//     Trophy
// } from 'lucide-react';

// const TimelineEvent = ({ time, title, icon: Icon, isActive, isComplete }) => {
//     return (
//         <div className="relative flex items-center group">
//             {/* Vertical line */}
//             <div className="absolute left-6 md:left-9 top-0 w-0.5 h-full bg-gradient-to-b from-blue-900 to-yellow-300
//                 transform origin-top transition-transform duration-1000"
//                 style={{
//                     transform: isComplete ? 'scaleY(1)' : 'scaleY(0)',
//                     opacity: isComplete ? 1 : 0.3
//                 }}
//             />

//             {/* Event content */}
//             <div className={`flex items-center gap-2 md:gap-4 transition-all duration-500
//                 ${isActive ? 'scale-105' : 'scale-100'}
//                 ${isComplete ? 'opacity-100' : 'opacity-50'}`}
//             >
//                 {/* Icon circle */}
//                 <div className={`relative z-10 w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center
//                     transition-all duration-500 shadow-lg border border-blue-800
//                     ${isActive
//                         ? 'bg-blue-900 scale-110'
//                         : 'bg-gray-900 scale-100'}`}
//                 >
//                     <Icon
//                         className={`w-6 h-6 md:w-8 md:h-8 transition-colors duration-500
//                         ${isActive ? 'text-yellow-300' : 'text-blue-500'}`}
//                     />
//                 </div>

//                 {/* Text content */}
//                 <div className={`bg-gray-900/50 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-lg transition-all duration-500
//                     border border-blue-800
//                     ${isActive ? 'translate-x-2' : ''}`}
//                 >
//                     <p className="text-xs md:text-sm font-medium text-gray-400">{time}</p>
//                     <h3 className="text-sm md:text-lg font-semibold text-gray-200">{title}</h3>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const Timeline = () => {
//     const [activeIndex, setActiveIndex] = useState(0);

//     const events = [
//         {
//             time: "10:00 π.μ. – 10:30 π.μ.",
//             title: "Εγγραφές",
//             icon: ClipboardEdit
//         },
//         {
//             time: "10:30 π.μ. – 11:00 π.μ.",
//             title: "Σύντομη παρουσίαση event",
//             icon: Presentation
//         },
//         {
//             time: "11:00 π.μ. – 2:00 μ.μ.",
//             title: "Εργασία ομάδων",
//             icon: Users
//         },
//         {
//             time: "2:00 μ.μ. – 2:45 μ.μ.",
//             title: "Break – Light lunch",
//             icon: Coffee
//         },
//         {
//             time: "2:45 μ.μ. – 5:00 μ.μ.",
//             title: "Εργασία ομάδων",
//             icon: Target
//         },
//         {
//             time: "5:00 μ.μ. – 6:00 μ.μ.",
//             title: "Παρουσίαση αποτελεσμάτων ομάδων",
//             icon: Presentation
//         },
//         {
//             time: "6:00 μ.μ. – 6:40 μ.μ.",
//             title: "Αξιολόγηση από επιτροπή",
//             icon: Award
//         },
//         {
//             time: "6:40 μ.μ. – 7:00 μ.μ.",
//             title: "Απονομή βραβείων",
//             icon: Trophy
//         }
//     ];

//     useEffect(() => {
//         const handleScroll = () => {
//             const timeline = document.getElementById('timeline');
//             if (!timeline) return;

//             const timelineTop = timeline.offsetTop;
//             const timelineHeight = timeline.offsetHeight;
//             const windowHeight = window.innerHeight;
//             const scrollPosition = window.scrollY;

//             const scrollPercentage = (scrollPosition - timelineTop + windowHeight / 2) / timelineHeight;
//             const newActiveIndex = Math.floor(scrollPercentage * events.length);

//             setActiveIndex(Math.max(0, Math.min(newActiveIndex, events.length - 1)));
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [events.length]);

//     return (
//         <section className="relative py-16 bg-gray-900" id="timeline">
//             <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="text-center mb-16">
//                     <h2 className="font-mono text-3xl font-bold text-gray-100 mb-4">
//                         Πρόγραμμα <span className="text-yellow-300">Ημέρας</span>
//                     </h2>
//                     <p className="text-lg text-gray-400">
//                         Ακολουθήστε το χρονοδιάγραμμα της ημέρας
//                     </p>
//                 </div>

//                 <div className="space-y-8 md:space-y-16">
//                     {events.map((event, index) => (
//                         <TimelineEvent
//                             key={index}
//                             {...event}
//                             isActive={index === activeIndex}
//                             isComplete={index <= activeIndex}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Timeline;
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
                <div className="bg-white p-4 rounded-lg shadow-lg border-2 border-blue-500 hover:border-yellow-500 transition-colors duration-300">
                    <p className="text-blue-600 font-bold mb-1">{time}</p>
                    <p className="text-gray-800">{title}</p>
                </div>
            </div>
            <div className="relative">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center z-10 relative hover:bg-yellow-500 transition-colors duration-300">
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
        <div className="max-w-4xl mx-auto py-16 px-4">
            <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-blue-500" />
                <div className="relative z-10">
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