// import React, { useState } from 'react';
// import { PlusCircle, Users, Trash2, Send, Code, Lightbulb } from 'lucide-react';

// const SCHOOLS = ['ΠΑΜΑΚ', 'ΑΠΘ', 'ΣΙΝΔΟ'];

// const RegistrationForm = () => {
//     const [status, setStatus] = useState('');
//     const [category, setCategory] = useState('');
//     const [customSchool, setCustomSchool] = useState('');
//     const [currentMember, setCurrentMember] = useState({
//         name: '',
//         email: '',
//         school: ''
//     });
//     const [teamMembers, setTeamMembers] = useState([]);

//     const handleAddMember = () => {
//         if (currentMember.name && currentMember.email && (currentMember.school || customSchool)) {
//             setTeamMembers([...teamMembers, {
//                 ...currentMember,
//                 school: currentMember.school === 'other' ? customSchool : currentMember.school,
//                 id: Date.now()
//             }]);
//             setCurrentMember({ name: '', email: '', school: '' });
//             setCustomSchool('');
//         }
//     };

//     const handleRemoveMember = (id) => {
//         setTeamMembers(teamMembers.filter(member => member.id !== id));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setStatus('submitting');

//         const formData = {
//             teamName: e.target.teamName.value,
//             category,
//             members: teamMembers
//         };

//         try {
//             const res = await fetch('/api/register', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(formData)
//             });

//             if (res.ok) {
//                 setStatus('success');
//                 e.target.reset();
//                 setTeamMembers([]);
//                 setCategory('');
//             } else {
//                 throw new Error('Failed to submit');
//             }
//         } catch (error) {
//             setStatus('error');
//         }
//     };

//     return (
//         <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
//             <div className="text-center mb-12">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4">
//                     Δήλωση Συμμετοχής
//                 </h2>
//                 <p className="text-lg text-gray-600">
//                     Συμπλήρωσε τα στοιχεία της ομάδας σου και ξεκίνα το ταξίδι
//                 </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-8">
//                 <div className="bg-white rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:scale-[1.02]">
//                     <div className="space-y-6">
//                         {/* Team Name */}
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Όνομα Ομάδας
//                             </label>
//                             <input
//                                 type="text"
//                                 name="teamName"
//                                 required
//                                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-200"
//                                 placeholder="Εισάγετε το όνομα της ομάδας σας"
//                             />
//                         </div>

//                         {/* Category Selection */}
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Κατηγορία Ομάδας
//                             </label>
//                             <div className="grid grid-cols-2 gap-4">
//                                 <button
//                                     type="button"
//                                     onClick={() => setCategory('development')}
//                                     className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all duration-200 ${category === 'development'
//                                         ? 'bg-blue-500 text-white border-transparent'
//                                         : 'border-gray-300 hover:border-blue-500'
//                                         }`}
//                                 >
//                                     <Code className="w-5 h-5" />
//                                     Ανάπτυξη Πρωτότυπου
//                                 </button>
//                                 <button
//                                     type="button"
//                                     onClick={() => setCategory('innovation')}
//                                     className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all duration-200 ${category === 'innovation'
//                                         ? 'bg-purple-500 text-white border-transparent'
//                                         : 'border-gray-300 hover:border-purple-500'
//                                         }`}
//                                 >
//                                     <Lightbulb className="w-5 h-5" />
//                                     Καινοτόμος Ιδέα
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Team Members Section */}
//                 <div className="bg-white rounded-2xl shadow-lg p-8">
//                     <div className="flex items-center justify-between mb-6">
//                         <h3 className="text-xl font-semibold text-gray-900">Μέλη Ομάδας</h3>
//                         <div className="flex items-center gap-2">
//                             <Users className="w-5 h-5 text-gray-500" />
//                             <span className="text-sm text-gray-500">{teamMembers.length}/4 μέλη</span>
//                         </div>
//                     </div>

//                     {/* Current Members List */}
//                     <div className="space-y-4 mb-8">
//                         {teamMembers.map(member => (
//                             <div
//                                 key={member.id}
//                                 className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
//                             >
//                                 <div className="flex-1">
//                                     <p className="font-medium">{member.name}</p>
//                                     <p className="text-sm text-gray-600">{member.email}</p>
//                                     <p className="text-sm text-gray-500">{member.school}</p>
//                                 </div>
//                                 <button
//                                     type="button"
//                                     onClick={() => handleRemoveMember(member.id)}
//                                     className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200"
//                                 >
//                                     <Trash2 className="w-5 h-5" />
//                                 </button>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Add Member Form */}
//                     {teamMembers.length < 4 && (
//                         <div className="space-y-4">
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <input
//                                     type="text"
//                                     value={currentMember.name}
//                                     onChange={(e) => setCurrentMember({ ...currentMember, name: e.target.value })}
//                                     placeholder="Όνομα Μέλους"
//                                     className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                 />
//                                 <input
//                                     type="email"
//                                     value={currentMember.email}
//                                     onChange={(e) => setCurrentMember({ ...currentMember, email: e.target.value })}
//                                     placeholder="Email Μέλους"
//                                     className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                 />
//                             </div>

//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <select
//                                     value={currentMember.school}
//                                     onChange={(e) => setCurrentMember({ ...currentMember, school: e.target.value })}
//                                     className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                 >
//                                     <option value="">Επιλέξτε Σχολή</option>
//                                     {SCHOOLS.map(school => (
//                                         <option key={school} value={school}>{school}</option>
//                                     ))}
//                                     <option value="other">Άλλο</option>
//                                 </select>

//                                 {currentMember.school === 'other' && (
//                                     <input
//                                         type="text"
//                                         value={customSchool}
//                                         onChange={(e) => setCustomSchool(e.target.value)}
//                                         placeholder="Συμπληρώστε τη σχολή σας"
//                                         className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                     />
//                                 )}
//                             </div>

//                             <button
//                                 type="button"
//                                 onClick={handleAddMember}
//                                 className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
//                             >
//                                 <PlusCircle className="w-5 h-5" />
//                                 Προσθήκη Μέλους
//                             </button>
//                         </div>
//                     )}
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                     type="submit"
//                     disabled={status === 'submitting' || !category || teamMembers.length === 0}
//                     className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
//                 >
//                     <Send className="w-5 h-5" />
//                     {status === 'submitting' ? 'Υποβολή...' : 'Υποβολή Συμμετοχής'}
//                 </button>

//                 {status === 'success' && (
//                     <div className="p-4 rounded-lg bg-green-50 text-green-700">
//                         Η εγγραφή ολοκληρώθηκε με επιτυχία! Ελέγξτε το email σας για επιβεβαίωση.
//                     </div>
//                 )}
//                 {status === 'error' && (
//                     <div className="p-4 rounded-lg bg-red-50 text-red-700">
//                         Κάτι πήγε στραβά. Παρακαλώ προσπαθήστε ξανά.
//                     </div>
//                 )}
//             </form>
//         </section>
//     );
// };

// export default RegistrationForm;
import React, { useState } from 'react';
import { PlusCircle, Users, Trash2, Send, Code, Lightbulb, Calendar, ArrowRight } from 'lucide-react';

const SCHOOLS = ['ΠΑΜΑΚ', 'ΑΠΘ', 'ΣΙΝΔΟ'];

const RegistrationForm = () => {
    const [status, setStatus] = useState('');
    const [category, setCategory] = useState('');
    const [customSchool, setCustomSchool] = useState('');
    const [currentMember, setCurrentMember] = useState({
        name: '',
        email: '',
        school: ''
    });
    const [teamMembers, setTeamMembers] = useState([]);

    const handleAddMember = () => {
        if (currentMember.name && currentMember.email && (currentMember.school || customSchool)) {
            setTeamMembers([...teamMembers, {
                ...currentMember,
                school: currentMember.school === 'other' ? customSchool : currentMember.school,
                id: Date.now()
            }]);
            setCurrentMember({ name: '', email: '', school: '' });
            setCustomSchool('');
        }
    };

    const handleRemoveMember = (id) => {
        setTeamMembers(teamMembers.filter(member => member.id !== id));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = {
            teamName: e.target.teamName.value,
            category,
            members: teamMembers
        };

        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setStatus('success');
                e.target.reset();
                setTeamMembers([]);
                setCategory('');
            } else {
                throw new Error('Failed to submit');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-gray-900 min-h-screen">
            <div className="text-center mb-12 transform transition-all duration-500 hover:scale-105">
                <div className="inline-flex items-center px-4 py-2 bg-blue-900/50 rounded-full mb-8 border border-blue-800 hover:border-yellow-300 transition-colors duration-300">
                    <Calendar className="w-5 h-5 text-yellow-300 mr-2" />
                    <span className="text-gray-300 font-medium">Δήλωση Συμμετοχής</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-100 mb-4 font-mono">
                    Ξεκίνα το ταξίδι σου στο
                    <span className="block text-yellow-300 mt-2">Datathon 2024</span>
                </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 transition-all duration-300 hover:scale-[1.02] border border-gray-700 hover:border-yellow-300">
                    <div className="space-y-6">
                        {/* Team Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Όνομα Ομάδας
                            </label>
                            <input
                                type="text"
                                name="teamName"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-100 focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-200 hover:border-yellow-300"
                                placeholder="Εισάγετε το όνομα της ομάδας σας"
                            />
                        </div>

                        {/* Category Selection */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Κατηγορία Ομάδας
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setCategory('development')}
                                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all duration-300 hover:scale-105 ${category === 'development'
                                        ? 'bg-blue-900 text-yellow-300 border-yellow-300'
                                        : 'border-gray-700 text-gray-300 hover:border-yellow-300'
                                        }`}
                                >
                                    <Code className="w-5 h-5" />
                                    Ανάπτυξη Πρωτότυπου
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setCategory('innovation')}
                                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all duration-300 hover:scale-105 ${category === 'innovation'
                                        ? 'bg-blue-900 text-yellow-300 border-yellow-300'
                                        : 'border-gray-700 text-gray-300 hover:border-yellow-300'
                                        }`}
                                >
                                    <Lightbulb className="w-5 h-5" />
                                    Καινοτόμος Ιδέα
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Members Section */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-700 hover:border-yellow-300 transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-semibold text-gray-100">Μέλη Ομάδας</h3>
                        <div className="flex items-center gap-2 text-yellow-300">
                            <Users className="w-5 h-5" />
                            <span className="text-sm">{teamMembers.length}/4 μέλη</span>
                        </div>
                    </div>

                    {/* Current Members List */}
                    <div className="space-y-4 mb-8">
                        {teamMembers.map(member => (
                            <div
                                key={member.id}
                                className="flex items-center justify-between p-4 rounded-lg bg-gray-900/50 border border-gray-700 hover:border-yellow-300 transition-all duration-300 hover:scale-[1.02]"
                            >
                                <div className="flex-1">
                                    <p className="font-medium text-gray-100">{member.name}</p>
                                    <p className="text-sm text-gray-400">{member.email}</p>
                                    <p className="text-sm text-yellow-300">{member.school}</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleRemoveMember(member.id)}
                                    className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-300"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Add Member Form */}
                    {teamMembers.length < 4 && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    value={currentMember.name}
                                    onChange={(e) => setCurrentMember({ ...currentMember, name: e.target.value })}
                                    placeholder="Όνομα Μέλους"
                                    className="px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-100 focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-200 hover:border-yellow-300"
                                />
                                <input
                                    type="email"
                                    value={currentMember.email}
                                    onChange={(e) => setCurrentMember({ ...currentMember, email: e.target.value })}
                                    placeholder="Email Μέλους"
                                    className="px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-100 focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-200 hover:border-yellow-300"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <select
                                    value={currentMember.school}
                                    onChange={(e) => setCurrentMember({ ...currentMember, school: e.target.value })}
                                    className="px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-100 focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-200 hover:border-yellow-300"
                                >
                                    <option value="">Επιλέξτε Σχολή</option>
                                    {SCHOOLS.map(school => (
                                        <option key={school} value={school}>{school}</option>
                                    ))}
                                    <option value="other">Άλλο</option>
                                </select>

                                {currentMember.school === 'other' && (
                                    <input
                                        type="text"
                                        value={customSchool}
                                        onChange={(e) => setCustomSchool(e.target.value)}
                                        placeholder="Συμπληρώστε τη σχολή σας"
                                        className="px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-100 focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-200 hover:border-yellow-300"
                                    />
                                )}
                            </div>

                            <button
                                type="button"
                                onClick={handleAddMember}
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-900/50 text-yellow-300 border border-gray-700 hover:border-yellow-300 transition-all duration-300 hover:scale-105"
                            >
                                <PlusCircle className="w-5 h-5" />
                                Προσθήκη Μέλους
                            </button>
                        </div>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={status === 'submitting' || !category || teamMembers.length === 0}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-900 text-yellow-300 font-medium shadow-lg transition-all duration-300 hover:bg-blue-800 hover:shadow-xl hover:scale-105 border border-blue-800 hover:border-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                    <Send className="w-5 h-5" />
                    {status === 'submitting' ? 'Υποβολή...' : 'Υποβολή Συμμετοχής'}
                </button>

                {status === 'success' && (
                    <div className="p-4 rounded-lg bg-green-900/50 text-green-300 border border-green-700 transition-all duration-300 hover:scale-105">
                        Η εγγραφή ολοκληρώθηκε με επιτυχία! Ελέγξτε το email σας για επιβεβαίωση.
                    </div>
                )}
                {status === 'error' && (
                    <div className="p-4 rounded-lg bg-red-900/50 text-red-300 border border-red-700 transition-all duration-300 hover:scale-105">
                        Κάτι πήγε στραβά. Παρακαλώ προσπαθήστε ξανά.
                    </div>
                )}
            </form>
        </section>
    );
};

export default RegistrationForm;