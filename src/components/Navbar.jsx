import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Mixes', href: '#portfolio' },
        { name: 'Events', href: '#events' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-brand-light/90 dark:bg-brand-dark/90 backdrop-blur-md border-b border-kenya-red/20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo (Left) */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#home" className="text-2xl font-bold font-sans tracking-tighter">
                            <span className="text-kenya-black dark:text-kenya-white">DJ</span>
                            <span className="text-kenya-red">BY</span>
                            <span className="text-kenya-green">MISTAKE</span>
                        </a>
                    </div>

                    {/* Desktop Menu (Center) */}
                    <div className="hidden md:flex flex-grow justify-center">
                        <div className="flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-kenya-black dark:text-kenya-white hover:text-kenya-red dark:hover:text-kenya-red px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Theme Toggle (Right) */}
                    <div className="hidden md:flex items-center">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-kenya-black" />}
                        </button>
                    </div>

                    {/* Mobile Menu Button (Right) */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                        >
                            {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-kenya-black" />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-kenya-black dark:text-kenya-white hover:text-kenya-red focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-brand-light dark:bg-brand-dark border-b border-kenya-red/20">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-kenya-black dark:text-kenya-white hover:text-kenya-red block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
