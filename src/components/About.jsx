import { Award, BookOpen, Music } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-black/50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-kenya-red/5 rounded-full blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-kenya-green/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-kenya-black dark:text-kenya-white mb-2">The Man Behind the Decks</h2>
                    <div className="w-24 h-1 bg-kenya-red mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Bio Column */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-kenya-black dark:text-kenya-white flex items-center">
                            <Music className="mr-2 text-kenya-red" /> Profile
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            As a diverse and goal-oriented individual, I prefer to work with companies and individuals that have a rich culture of building and developing each other.
                            My passion is providing a genuine service to help others with the highest level of excellence.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            I am an immersive sound architect and experienced curator, adept at transforming atmospheres through carefully selected music and precision audio engineering. My ability to instinctively connect with an audience and dynamically adapt to their energy ensures every event is a uniquely engaging and vibrant occasion, supported by meticulous planning and technical mastery.
                        </p>

                        <div className="pt-6">
                            <h3 className="text-2xl font-bold text-kenya-black dark:text-kenya-white flex items-center mb-4">
                                <Award className="mr-2 text-kenya-green" /> Experience
                            </h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li className="flex items-center"><span className="w-2 h-2 bg-kenya-red rounded-full mr-3"></span>Crooked Qs</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-kenya-red rounded-full mr-3"></span>Frankies Lounge</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-kenya-red rounded-full mr-3"></span>Level 7 Lounge</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-kenya-red rounded-full mr-3"></span>Xenon Lounge</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-kenya-red rounded-full mr-3"></span>SinBin Sports Bar and Lounge</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-kenya-red rounded-full mr-3"></span>Insygnia Lounges</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-kenya-red rounded-full mr-3"></span>Arts and Beer Festival</li>
                            </ul>
                        </div>
                    </div>

                    {/* Education & Philosophy Column */}
                    <div className="space-y-8 bg-white dark:bg-gray-900/50 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl">
                        <div>
                            <h3 className="text-2xl font-bold text-kenya-black dark:text-kenya-white flex items-center mb-4">
                                <BookOpen className="mr-2 text-kenya-green" /> Education
                            </h3>
                            <div className="space-y-6">
                                <div className="border-l-4 border-kenya-red pl-4">
                                    <h4 className="font-bold text-lg text-kenya-black dark:text-kenya-white">Homeboyz DJ Academy</h4>
                                    <p className="text-kenya-red font-medium">Full DJ Course, 2013</p>
                                    <p className="text-gray-500 dark:text-gray-400">Distinction</p>
                                </div>
                                <div className="border-l-4 border-kenya-green pl-4">
                                    <h4 className="font-bold text-lg text-kenya-black dark:text-kenya-white">Daystar University</h4>
                                    <p className="text-kenya-green font-medium">Bachelor of Arts, 2015 - 2021</p>
                                    <p className="text-gray-500 dark:text-gray-400">Mass Communication</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-kenya-black/5 dark:bg-white/5 p-6 rounded-xl border-l-4 border-kenya-red">
                            <p className="italic font-bold text-gray-700 dark:text-gray-200 text-lg">
                                "I discovered my love for music at age 13, making compilation CDs for friends and family. The amazing feedback pushed me to headline successful gigs around the city as a club, corporate, festival, and radio DJ."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
