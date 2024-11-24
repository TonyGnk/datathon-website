import React, { useState } from 'react';
import { PlusCircle, Users, Trash2, Send, Code, Lightbulb, Clipboard, AlertCircle, Check } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const SCHOOLS = [
    'Πανεπιστήμιο Μακεδονίας', 'Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης', 'Διεθνές Πανεπιστήμιο'
];

const SCHOOL_SUBJECT = [
    'Πληροφορική & Τεχνολογία', 'Διοίκηση & Επιχειρηματικότητα', 'Ηλεκτρονική Μηχανική', 'Υγεία', 'Νομική & Πολιτική'
]

export const RegistrationForm = () => {
    const [status, setStatus] = useState('');
    const [category, setCategory] = useState('');
    const [customSchool, setCustomSchool] = useState('');
    const [customSubject, setCustomSubject] = useState('');

    const [autoTeam, setAutoTeam] = useState(false);
    const [currentMember, setCurrentMember] = useState({
        name: '',
        email: '',
        school: '',
        subject: ''
    });
    const [teamMembers, setTeamMembers] = useState([]);
    const [emailError, setEmailError] = useState('');
    const [submissionError, setSubmissionError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return 'Παρακαλώ εισάγετε ένα έγκυρο email';
        }
        return '';
    };

    const handleEmailChange = (e) => {
        const email = e.target.value;
        setCurrentMember({ ...currentMember, email });
        setEmailError(validateEmail(email));
    };

    const handleAddMember = () => {
        const emailValidationError = validateEmail(currentMember.email);
        if (emailValidationError) {
            setEmailError(emailValidationError);
            return;
        }

        if (teamMembers.some(member => member.email === currentMember.email)) {
            setEmailError('Αυτό το email χρησιμοποιείται ήδη');
            return;
        }

        if (currentMember.name && currentMember.email && (currentMember.school || customSchool)) {
            setTeamMembers([...teamMembers, {
                ...currentMember,
                school: currentMember.school === 'other' ? customSchool : currentMember.school,
                id: Date.now()
            }]);
            setCurrentMember({ name: '', email: '', school: '' });
            setCustomSchool('');
            setEmailError('');
        }
    };

    const handleRemoveMember = (id) => {
        setTeamMembers(teamMembers.filter(member => member.id !== id));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setSubmissionError('');

        if (!category || teamMembers.length === 0) {
            setSubmissionError('Παρακαλώ συμπληρώστε όλα τα απαραίτητα πεδία');
            setStatus('error');
            return;
        }

        const formData = {
            teamName: e.target.teamName.value,
            category,
            members: teamMembers.map(({ id, ...member }) => member),
            autoTeam: teamMembers.length === 1 ? autoTeam : false,
            createdAt: serverTimestamp(),
        };

        try {
            if (!db) {
                throw new Error('Firebase is not initialized');
            }

            const registrationsRef = collection(db, 'participants');
            const docRef = await addDoc(registrationsRef, formData);

            console.log('Registration submitted successfully with ID:', docRef.id);

            setStatus('success');
            e.target.reset();
            setTeamMembers([]);
            setCategory('');
            setCurrentMember({ name: '', email: '', school: '' });
            setCustomSchool('');
            setCustomSubject('');
            setAutoTeam(false);

        } catch (error) {
            console.error('Error submitting registration:', error);
            setStatus('error');
            setSubmissionError(
                'Παρουσιάστηκε σφάλμα κατά την υποβολή. Παρακαλώ προσπαθήστε ξανά. ' +
                (error.message || '')
            );
        }
    };

    return (
        <div id='registration' className="bg-gray-900 py-16 px-4 pb-18">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-900/50 rounded-full mb-8 border border-blue-800">
                        <Clipboard className="w-5 h-5 text-yellow-300 mr-2" />
                        <span className="text-gray-300 font-medium">Δήλωση Συμμετοχής</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-100 mb-4">
                        Ξεκίνα το ταξίδι σου στο
                        <span className="block text-yellow-300 mt-2">Datathon UoM</span>
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700
                    hover:border-yellow-400 transition-colors duration-300"
                    >
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Όνομα Ομάδας
                                </label>
                                <input
                                    type="text"
                                    name="teamName"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-100"
                                    placeholder="Εισάγετε το όνομα της ομάδας σας"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Κατηγορία Ομάδας
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setCategory('development')}
                                        className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transform active:scale-90 transition-transform duration-200 ${category === 'development'
                                            ? 'bg-blue-900 text-yellow-300 border-yellow-300'
                                            : 'border-gray-700 text-gray-300'
                                            }`}
                                    >
                                        <Code className="w-5 h-5" />
                                        Ανάπτυξη Πρωτότυπου
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setCategory('innovation')}
                                        className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transform active:scale-90 transition-transform duration-200 ${category === 'innovation'
                                            ? 'bg-blue-900 text-yellow-300 border-yellow-300'
                                            : 'border-gray-700 text-gray-300'
                                            }`}
                                    >
                                        <Lightbulb className="w-5 h-5" />
                                        Καινοτόμος Ιδέα
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-yellow-400 transition-colors duration-300">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-semibold text-gray-100">Μέλη Ομάδας</h3>
                            <div className="flex items-center gap-2 text-yellow-300">
                                <Users className="w-5 h-5" />
                                <span className="text-sm">{teamMembers.length}/4 μέλη</span>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            {teamMembers.map(member => (
                                <div
                                    key={member.id}
                                    className="flex items-center justify-between p-4 rounded-lg bg-gray-900/50 border border-gray-700"
                                >
                                    <div className="flex-1">
                                        <p className="font-medium text-gray-100">{member.name}</p>
                                        <p className="text-sm text-gray-400">{member.email}</p>
                                        <p className="text-sm text-yellow-300">{member.school}</p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveMember(member.id)}
                                        className="p-2 text-gray-400 hover:text-red-500"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {teamMembers.length < 4 && (
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        value={currentMember.name}
                                        onChange={(e) => setCurrentMember({ ...currentMember, name: e.target.value })}
                                        placeholder="Όνομα"
                                        className="px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-100"
                                    />
                                    <div className="space-y-1">
                                        <input
                                            type="email"
                                            value={currentMember.email}
                                            onChange={handleEmailChange}
                                            placeholder="Ιδρυματικό Email"
                                            className={`w-full px-4 py-3 rounded-lg bg-gray-900/50 border text-gray-100 ${emailError ? 'border-red-500' : 'border-gray-700'
                                                }`}
                                        />
                                        {emailError && (
                                            <div className="flex items-center gap-1 text-red-400 text-sm">
                                                <AlertCircle className="w-4 h-4" />
                                                <span>{emailError}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <select
                                        value={currentMember.school}
                                        onChange={(e) => setCurrentMember({ ...currentMember, school: e.target.value })}
                                        className="px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-100"
                                    >
                                        <option value="">Επίλεξε Σχολή</option>
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
                                            placeholder="Συμπλήρωσε σχολή"
                                            className="px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-100"
                                        />
                                    )}

                                    <select
                                        value={currentMember.subject}
                                        onChange={(e) => setCurrentMember({ ...currentMember, subject: e.target.value })}
                                        className="px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-100"
                                    >
                                        <option value="">Επίλεξε Αντικείμενο Σπουδών</option>
                                        {SCHOOL_SUBJECT.map(school => (
                                            <option key={school} value={school}>{school}</option>
                                        ))}
                                        <option value="other">Άλλο</option>
                                    </select>

                                    {currentMember.subject === 'other' && (
                                        <input
                                            type="text"
                                            value={customSubject}
                                            onChange={(e) => setCustomSubject(e.target.value)}
                                            placeholder="Συμπλήρωσε αντικείμενο σπουδών"
                                            className="px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-100"
                                        />
                                    )}

                                </div>

                                <button
                                    type="button"
                                    onClick={handleAddMember}
                                    disabled={!currentMember.name || !currentMember.email || (!currentMember.school && !customSchool) || !!emailError}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-900/50 text-yellow-300 border border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <PlusCircle className="w-5 h-5" />
                                    Προσθήκη Μέλους
                                </button>

                                {(teamMembers.length === 0 || teamMembers.length === 1 || teamMembers.length === 2) && (
                                    <label className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 cursor-pointer group">
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                checked={autoTeam}
                                                onChange={(e) => setAutoTeam(e.target.checked)}
                                                className="sr-only peer"
                                            />
                                            <div className="w-6 h-6 border-2 border-gray-500 rounded-md peer-checked:border-yellow-300 peer-checked:bg-blue-900 flex items-center justify-center transition-all duration-200">
                                                <svg
                                                    className={`w-4 h-4 text-yellow-300 transition-transform duration-200 ${autoTeam ? 'scale-100' : 'scale-0'}`}
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>

                                        </div>
                                        <span className="text-gray-300 group-hover:text-yellow-300 transition-colors duration-200">
                                            Ένωση με άλλη ομάδα
                                        </span>
                                    </label>
                                )}
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'submitting' || !category || teamMembers.length === 0}
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-900 text-yellow-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Send className="w-5 h-5" />
                        {status === 'submitting' ? 'Υποβολή...' : 'Υποβολή Συμμετοχής'}
                    </button>

                    {status === 'success' && (
                        <div className="p-4 rounded-lg bg-green-900/50 text-green-300 border border-green-700">
                            Η εγγραφή σας ολοκληρώθηκε με επιτυχία!
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="p-4 rounded-lg bg-red-900/50 text-red-300 border border-red-700">
                            Κάτι πήγε στραβά. Παρακαλώ προσπαθήστε ξανά.
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;