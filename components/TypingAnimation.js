import { useState, useEffect } from 'react';

const phrases = [
    'των ανοιχτών δεδομένων',
    'του ιστού',
    'της τεχνολογίας',
    'των ανοιχτών δεδομένων',
    'του μέλλοντος',
    'των API',
];

const TypingAnimation = () => {
    const [text, setText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const typeSpeed = 100; // Time between typing each character
        const deleteSpeed = 50; // Time between deleting each character
        const pauseTime = 1000; // Pause after a phrase is completed

        const currentPhrase = phrases[phraseIndex];

        const timeout = setTimeout(() => {
            if (isPaused) {
                setIsPaused(false);
            } else if (!isDeleting) {
                // Typing logic
                if (text.length < currentPhrase.length) {
                    setText(currentPhrase.substring(0, text.length + 1));
                } else {
                    setIsPaused(true);
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                // Deleting logic
                if (text.length > 0) {
                    setText(text.substring(0, text.length - 1));
                } else {
                    setIsPaused(true);
                    setTimeout(() => {
                        setIsDeleting(false);
                        setPhraseIndex((phraseIndex + 1) % phrases.length);
                    }, pauseTime);
                }
            }
        }, isDeleting ? deleteSpeed : typeSpeed);

        // Clear timeout on unmount
        return () => clearTimeout(timeout);
    }, [text, isDeleting, isPaused, phraseIndex]);

    return (
        <h1 className="font-mono text-4xl md:text-5xl font-bold text-gray-100 mb-6 transform transition-all duration-500 hover:scale-105">
            Ανακαλύψτε τη δύναμη{' '}
            <span className="text-yellow-300 mt-1 inline-block min-w-[0px]">
                {text}
                <span className="animate-pulse">|</span>
            </span>
        </h1>
    );
};

export default TypingAnimation;