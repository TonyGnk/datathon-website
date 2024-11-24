import { useState, useEffect } from 'react';

const phrases = [
    'των ανοικτών δεδομένων',
    'του ιστού',
    'της τεχνολογίας',
    'των ανοικτών δεδομένων',
    'του μέλλοντος',
    'των API',
    'της καινοτομίας',
];

const TypingAnimation = () => {
    const [text, setText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const typeSpeed = 125; // Time between typing each character
        const deleteSpeed = 75; // Time between deleting each character
        const pauseTime = 1200; // Pause after a phrase is completed

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
        <h2 className="font-mono text-4xl md:text-5xl font-bold text-gray-100 mb-6 text-center flex flex-wrap justify-center gap-x-2">
            <span>Ανακάλυψε{' '}</span>
            <span>τη{' '}</span>
            <span>δύναμη{' '}</span>
            {text.trim().split(' ').map((word, index) => (
                <span key={index} className="text-yellow-300">{word}{' '}</span>
            ))}
            {/* Add a negative margin to the left */}
            <span className="animate-pulse text-yellow-200 -ml-5">|</span>
        </h2>
    );
};

export default TypingAnimation;