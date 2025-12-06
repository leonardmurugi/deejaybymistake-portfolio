import { ArrowRight, PlayCircle } from 'lucide-react';
import djImage from '../assets/dj-profile.png'; // Updated to PNGd to PNG

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 mesh-gradient opacity-20 dark:opacity-30"></div>
                {/* Noise overlay for texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay"></div>
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <div className="text-center md:text-left flex-1">
                    <div className="inline-block mb-4 px-4 py-1 rounded-full border border-kenya-red/30 bg-kenya-red/10 backdrop-blur-sm">
                        <span className="text-kenya-red font-bold text-sm tracking-widest uppercase">Nairobi's Finest</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black text-kenya-black dark:text-kenya-white tracking-tighter mb-6 leading-tight">
                        DJ BY <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-kenya-red to-kenya-green animate-pulse">MISTAKE</span>
                    </h1>

                    <p className="mt-4 text-xl md:text-2xl text-gray-700 dark:text-gray-200 max-w-lg mx-auto md:mx-0 font-light">
                        Curating vibes, eclectic mixes, and unforgettable nights.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                        <a
                            href="#portfolio"
                            className="group relative px-8 py-4 bg-kenya-red text-white text-lg font-bold rounded-xl overflow-hidden shadow-xl shadow-kenya-red/20 hover:shadow-kenya-red/40 transition-all hover:-translate-y-1 inline-flex items-center justify-center"
                        >
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            <span className="flex items-center gap-2">
                                Listen to Mixes <PlayCircle size={20} />
                            </span>
                        </a>

                        <a
                            href="#events"
                            className="group px-8 py-4 glass-btn rounded-xl text-lg font-bold text-kenya-black dark:text-white hover:text-kenya-green dark:hover:text-kenya-green flex items-center justify-center gap-2"
                        >
                            Upcoming Events <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Image Content */}
                <div className="flex-1 relative w-full max-w-md md:max-w-xl group perspective-1000">
                    <div className="relative transform transition-transform duration-700 group-hover:rotate-y-6">
                        {/* Glow effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-kenya-red to-kenya-green rounded-[2rem] blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>

                        <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl border-4 border-white/10">
                            <img
                                src={djImage}
                                alt="DJ by Mistake"
                                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white dark:bg-brand-dark p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 animate-bounce delay-1000">
                            <p className="font-bold text-kenya-black dark:text-kenya-white text-sm">Now Booking</p>
                            <p className="text-kenya-green text-xs font-bold">Dec 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
