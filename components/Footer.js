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
                </div>
            </div>
        </footer>
    );
};

export default Footer;
