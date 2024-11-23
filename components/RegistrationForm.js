// import { useState } from 'react';

// export default function RegistrationForm() {
//     const [status, setStatus] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setStatus('submitting');

//         const formData = {
//             name: e.target.name.value,
//             email: e.target.email.value,
//             skill: e.target.skill.value,
//             team: e.target.team.value,
//             background: e.target.background.value
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
//             } else {
//                 throw new Error('Failed to submit');
//             }
//         } catch (error) {
//             setStatus('error');
//         }
//     };

//     return (
//         <section className="mb-12">
//             <h2 className="text-2xl font-semibold mb-4">Register Now</h2>
//             <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
//                 <div className="grid grid-cols-1 gap-6">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             required
//                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             required
//                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Skill Level</label>
//                         <select
//                             name="skill"
//                             required
//                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                         >
//                             <option value="">Select your skill level</option>
//                             <option value="beginner">Beginner</option>
//                             <option value="intermediate">Intermediate</option>
//                             <option value="advanced">Advanced</option>
//                         </select>
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Team Status</label>
//                         <select
//                             name="team"
//                             required
//                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                         >
//                             <option value="">Select your team status</option>
//                             <option value="solo">Looking for team</option>
//                             <option value="team">Have a team</option>
//                         </select>
//                     </div>

//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Background</label>
//                         <textarea
//                             name="background"
//                             rows="3"
//                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                             placeholder="Tell us about your background and experience..."
//                         ></textarea>
//                     </div>

//                     <button
//                         type="submit"
//                         disabled={status === 'submitting'}
//                         className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                     >
//                         {status === 'submitting' ? 'Submitting...' : 'Register'}
//                     </button>

//                     {status === 'success' && (
//                         <p className="text-green-600">Registration successful! Check your email for confirmation.</p>
//                     )}
//                     {status === 'error' && (
//                         <p className="text-red-600">Something went wrong. Please try again.</p>
//                     )}
//                 </div>
//             </form>
//         </section>
//     );
// }
import React, { useState } from 'react';
import { PlusCircle, Users, Trash2, Send, Code, Lightbulb } from 'lucide-react';

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
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Δήλωση Συμμετοχής
                </h2>
                <p className="text-lg text-gray-600">
                    Συμπλήρωσε τα στοιχεία της ομάδας σου και ξεκίνα το ταξίδι
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="bg-white rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:scale-[1.02]">
                    <div className="space-y-6">
                        {/* Team Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Όνομα Ομάδας
                            </label>
                            <input
                                type="text"
                                name="teamName"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-200"
                                placeholder="Εισάγετε το όνομα της ομάδας σας"
                            />
                        </div>

                        {/* Category Selection */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Κατηγορία Ομάδας
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setCategory('development')}
                                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all duration-200 ${category === 'development'
                                        ? 'bg-blue-500 text-white border-transparent'
                                        : 'border-gray-300 hover:border-blue-500'
                                        }`}
                                >
                                    <Code className="w-5 h-5" />
                                    Ανάπτυξη Πρωτότυπου
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setCategory('innovation')}
                                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all duration-200 ${category === 'innovation'
                                        ? 'bg-purple-500 text-white border-transparent'
                                        : 'border-gray-300 hover:border-purple-500'
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
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-semibold text-gray-900">Μέλη Ομάδας</h3>
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-gray-500" />
                            <span className="text-sm text-gray-500">{teamMembers.length}/4 μέλη</span>
                        </div>
                    </div>

                    {/* Current Members List */}
                    <div className="space-y-4 mb-8">
                        {teamMembers.map(member => (
                            <div
                                key={member.id}
                                className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                            >
                                <div className="flex-1">
                                    <p className="font-medium">{member.name}</p>
                                    <p className="text-sm text-gray-600">{member.email}</p>
                                    <p className="text-sm text-gray-500">{member.school}</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleRemoveMember(member.id)}
                                    className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200"
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
                                    className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <input
                                    type="email"
                                    value={currentMember.email}
                                    onChange={(e) => setCurrentMember({ ...currentMember, email: e.target.value })}
                                    placeholder="Email Μέλους"
                                    className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <select
                                    value={currentMember.school}
                                    onChange={(e) => setCurrentMember({ ...currentMember, school: e.target.value })}
                                    className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                                        className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                )}
                            </div>

                            <button
                                type="button"
                                onClick={handleAddMember}
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
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
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                    <Send className="w-5 h-5" />
                    {status === 'submitting' ? 'Υποβολή...' : 'Υποβολή Συμμετοχής'}
                </button>

                {status === 'success' && (
                    <div className="p-4 rounded-lg bg-green-50 text-green-700">
                        Η εγγραφή ολοκληρώθηκε με επιτυχία! Ελέγξτε το email σας για επιβεβαίωση.
                    </div>
                )}
                {status === 'error' && (
                    <div className="p-4 rounded-lg bg-red-50 text-red-700">
                        Κάτι πήγε στραβά. Παρακαλώ προσπαθήστε ξανά.
                    </div>
                )}
            </form>
        </section>
    );
};

export default RegistrationForm;