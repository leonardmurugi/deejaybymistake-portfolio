import { Music, Disc, Mic, Radio } from 'lucide-react';

const skills = [
    { name: 'Hip Hop & RnB', icon: <Mic size={40} />, description: 'Classic hits to modern bangers, reading the room perfectly.' },
    { name: 'Soul & Neo-Soul', icon: <Music size={40} />, description: 'Deep, soulful rhythms for a sophisticated vibe.' },
    { name: 'Rhumba & Naija', icon: <Disc size={40} />, description: 'Authentic African grooves that move the crowd.' },
    { name: 'Rock & Techno', icon: <Radio size={40} />, description: 'High energy beats for electric atmospheres.' },
];

const Skills = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-black relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-kenya-red/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-kenya-green/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-kenya-black dark:text-kenya-white mb-4">Musical Versatility</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-kenya-red to-kenya-green mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Comfortably mixing various musical genres to ensure customers are well taken care of musically.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-kenya-green/30"
                        >
                            <div className="flex justify-center mb-6 text-kenya-red group-hover:text-kenya-green transition-colors duration-300">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold text-center text-kenya-black dark:text-kenya-white mb-2">{skill.name}</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-center text-sm">
                                {skill.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
