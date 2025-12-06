import { MapPin, Calendar, Clock, Ticket } from 'lucide-react';

const events = [
    {
        title: 'Nairobi Street Bash',
        date: 'Dec 12, 2023',
        time: '8:00 PM - Late',
        location: 'Westlands, Nairobi',
        price: 'KES 1000'
    },
    {
        title: 'Sunset Rooftop Session',
        date: 'Dec 24, 2023',
        time: '4:00 PM - 10:00 PM',
        location: 'GTC Tower, Nairobi',
        price: 'KES 2500'
    },
    {
        title: 'NYE Countdown',
        date: 'Dec 31, 2023',
        time: '9:00 PM - 6:00 AM',
        location: 'Carnivore Grounds',
        price: 'KES 5000'
    },
];

const Events = () => {
    return (
        <section id="events" className="py-20 bg-white dark:bg-black relative">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[radial-gradient(#BB0000_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-kenya-black dark:text-kenya-white mb-2">Upcoming Gigs</h2>
                    <div className="w-24 h-1 bg-kenya-red mx-auto rounded-full"></div>
                </div>

                <div className="space-y-6">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row items-center bg-gray-50 dark:bg-gray-900 border-l-4 border-kenya-green p-6 rounded-r-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex-shrink-0 text-center md:text-left mb-4 md:mb-0 md:mr-8 min-w-[120px]">
                                <div className="text-kenya-red font-bold text-xl">{event.date.split(' ')[0]}</div>
                                <div className="text-3xl font-extrabold text-kenya-black dark:text-kenya-white">{event.date.split(' ')[1].replace(',', '')}</div>
                            </div>

                            <div className="flex-grow text-center md:text-left mb-4 md:mb-0">
                                <h3 className="text-xl font-bold text-kenya-black dark:text-kenya-white mb-2">{event.title}</h3>
                                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-600 dark:text-gray-400 text-sm">
                                    <span className="flex items-center"><Clock size={16} className="mr-1" /> {event.time}</span>
                                    <span className="flex items-center"><MapPin size={16} className="mr-1" /> {event.location}</span>
                                </div>
                            </div>

                            <div className="flex-shrink-0 flex items-center gap-4">
                                <span className="font-bold text-kenya-black dark:text-kenya-white">{event.price}</span>
                                <button className="bg-kenya-black dark:bg-kenya-red text-white px-6 py-2 rounded-full hover:bg-gray-800 dark:hover:bg-red-700 hover:scale-105 transition-all shadow-md hover:shadow-lg flex items-center group">
                                    <Ticket size={16} className="mr-2 group-hover:rotate-12 transition-transform" /> Get Tickets
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
