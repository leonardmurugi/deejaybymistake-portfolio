import { Play } from 'lucide-react';

const mixes = [
    { title: 'Sunset Vibes Vol. 1', genre: 'Amapiano', date: 'Oct 2023', image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=800' },
    { title: 'Nairobi Nights', genre: 'Afro-House', date: 'Nov 2023', image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800' },
    { title: 'Throwback Thursday', genre: 'RnB Classix', date: 'Dec 2023', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800' },
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20 bg-brand-light dark:bg-brand-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-kenya-black dark:text-kenya-white mb-2">Latest Mixes</h2>
                        <div className="w-20 h-1 bg-kenya-red rounded-full"></div>
                    </div>
                    <a href="#" className="hidden md:inline-block text-kenya-green font-semibold hover:underline">View All on Soundcloud</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mixes.map((mix, index) => (
                        <div key={index} className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer">
                            <div className="aspect-[4/3] bg-gray-200">
                                <img
                                    src={mix.image}
                                    alt={mix.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <button className="bg-kenya-red/90 backdrop-blur-sm text-white p-5 rounded-full transform scale-0 group-hover:scale-100 transition-all duration-300 delay-100 shadow-xl shadow-kenya-red/40 hover:bg-kenya-red hover:scale-110">
                                    <Play fill="currentColor" size={24} />
                                </button>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                                <span className="text-kenya-green text-xs font-bold uppercase tracking-wider">{mix.genre}</span>
                                <h3 className="text-white text-xl font-bold">{mix.title}</h3>
                                <p className="text-gray-300 text-sm">{mix.date}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a href="#" className="text-kenya-green font-semibold hover:underline">View All on Soundcloud</a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
