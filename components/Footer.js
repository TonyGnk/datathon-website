import { Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mt-2 border-t border-gray-700 pt-4 flex flex-col sm:flex-row justify-between items-center">
                    {/* Privacy Policy Link */}
                    <p className="text-sm">
                        © {new Date().getFullYear()} Πανεπιστήμιο Μακεδονίας. Όλα τα δικαιώματα διατηρούνται.
                    </p>
                    <a
                        href="/privacy_policy"
                        className="text-gray-400 hover:text-yellow-400 transition mt-2 sm:mt-0 sm:ml-4"
                    >
                        Δήλωση Προστασίας Προσωπικών Δεδομένων
                    </a>
                    <div className="flex gap-4 px-4 pt-2">
                        <Link
                            href="https://www.instagram.com/datathon.uom/"
                            target="_blank"
                            className="text-gray-300 hover:text-yellow-300 transition-colors duration-200"
                        >
                            <Instagram size={24} />
                        </Link>
                        <Link
                            href="https://facebook.com/profile.php?id=61567924213945"
                            target="_blank"
                            className="text-gray-300 hover:text-yellow-300 transition-colors duration-200"
                        >
                            <Facebook size={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
