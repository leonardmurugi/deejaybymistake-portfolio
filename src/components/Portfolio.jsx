import { useState } from 'react';
import { Play, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const mixes = [
    {
        "title": "Livestream at Esco-Bar (Part 2)",
        "genre": "Mix",
        "date": "Jul 2023",
        "image": "https://img.hearthis.at/1/6/6/_/uploads/8973957/image_user/w1400_h1400_q70_ptrue_v2_----cropped_1511915661.jpg",
        "link": "https://hearthis.at/djbymistake/live-28-07-2023-18-25/"
    },
    {
        "title": "Livestream at Esco-Bar (Part 1)",
        "genre": "Mix",
        "date": "Jul 2023",
        "image": "https://img.hearthis.at/1/6/6/_/uploads/8973957/image_user/w1400_h1400_q70_ptrue_v2_----cropped_1511915661.jpg",
        "link": "https://hearthis.at/djbymistake/live-28-07-2023-17-33/"
    },
    {
        "title": "Drunkin Donuts (Freestyle)",
        "genre": "Mix",
        "date": "Jul 2023",
        "image": "https://img.hearthis.at/1/6/6/_/uploads/8973957/image_user/w1400_h1400_q70_ptrue_v2_----cropped_1511915661.jpg",
        "link": "https://hearthis.at/djbymistake/dj-by-miistake-drunkin-donuts-freestyle/"
    },
    {
        "title": "Lock In Festival Live Old School Set",
        "genre": "Mix",
        "date": "Apr 2023",
        "image": "https://img.hearthis.at/1/6/6/_/uploads/8973957/image_user/w1400_h1400_q70_ptrue_v2_----cropped_1511915661.jpg",
        "link": "https://hearthis.at/djbymistake/dj-by-mistake-lock-in-set-fire/"
    },
    {
        "title": "Straight For The Castle vol 5 (Compressed)",
        "genre": "Mix",
        "date": "Dec 2021",
        "image": "https://img.hearthis.at/1/6/6/_/uploads/8973957/image_user/w1400_h1400_q70_ptrue_v2_----cropped_1511915661.jpg",
        "link": "https://hearthis.at/djbymistake/dj-by-mistake-straight-for-the-castle-vol-5-compressed/"
    },
    {
        "title": "Amapiano By Mistake",
        "genre": "Mix",
        "date": "Dec 2021",
        "image": "https://img.hearthis.at/1/6/6/_/uploads/8973957/image_user/w1400_h1400_q70_ptrue_v2_----cropped_1511915661.jpg",
        "link": "https://hearthis.at/djbymistake/dj-by-mistake-amapiano-by-mistake/"
    },
    {
        "title": "RnB ol skul",
        "genre": "Mix",
        "date": "Jun 2018",
        "image": "https://img.hearthis.at/1/7/0/_/uploads/8973957/image_track/2086608/w1400_h1400_q70_ptrue_v2_----cropped_1528750626071.jpg",
        "link": "https://hearthis.at/djbymistake/dj-by-mistake-rnb-ol-skul/"
    },
    {
        "title": "Barry Gold - All 4 You (Radio Edit)",
        "genre": "Mix",
        "date": "Jun 2018",
        "image": "https://img.hearthis.at/1/6/6/_/uploads/8973957/image_user/w1400_h1400_q70_ptrue_v2_----cropped_1511915661.jpg",
        "link": "https://hearthis.at/djbymistake/all-4-you-mstr-rr3-radio/"
    },
    {
        "title": "Straight For The Castle 3",
        "genre": "Mix",
        "date": "May 2018",
        "image": "https://img.hearthis.at/1/6/6/_/uploads/8973957/image_user/w1400_h1400_q70_ptrue_v2_----cropped_1511915661.jpg",
        "link": "https://hearthis.at/djbymistake/dj-by-mistake-straight-for-the-castle-3/"
    },
    {
        "title": "Big Man Reggae 2",
        "genre": "Mix",
        "date": "May 2018",
        "image": "https://img.hearthis.at/1/6/6/_/uploads/8973957/image_user/w1400_h1400_q70_ptrue_v2_----cropped_1511915661.jpg",
        "link": "https://hearthis.at/djbymistake/dj-by-mistake-big-man-reggae-2/"
    },
    {
        "title": "Straight For The Castle 4",
        "genre": "Mix",
        "date": "May 2018",
        "image": "https://img.hearthis.at/1/6/6/_/uploads/8973957/image_user/w1400_h1400_q70_ptrue_v2_----cropped_1511915661.jpg",
        "link": "https://hearthis.at/djbymistake/dj-by-mistake-straight-for-the-castle-4/"
    },
    {
        "title": "Venus FM Dancehall set 2nd Aug",
        "genre": "Mix",
        "date": "Apr 2018",
        "image": "https://img.hearthis.at/1/6/6/_/uploads/8973957/image_user/w1400_h1400_q70_ptrue_v2_----cropped_1511915661.jpg",
        "link": "https://hearthis.at/djbymistake/dj-by-mistake-venus-fm-dancehall-set-2nd-aug/"
    },
    {
        "title": "Straight For The Castle vol 2 2018",
        "genre": "Mix",
        "date": "Apr 2018",
        "image": "https://img.hearthis.at/1/6/6/_/uploads/8973957/image_user/w1400_h1400_q70_ptrue_v2_----cropped_1511915661.jpg",
        "link": "https://hearthis.at/djbymistake/dj-by-mistake-straight-for-the-castle-vol-2-2018/"
    },
    {
        "title": "Crunkd Up vol 1",
        "genre": "Mix",
        "date": "Apr 2018",
        "image": "https://img.hearthis.at/3/2/4/_/uploads/8973957/image_track/1829498/w1400_h1400_q70_ptrue_v2_----cropped_1522317078423.jpg",
        "link": "https://hearthis.at/djbymistake/dj-by-mistake-crunkd-up-vol-1/"
    },
    {
        "title": "#WeAreAfrica vol 1",
        "genre": "Mix",
        "date": "Apr 2018",
        "image": "https://img.hearthis.at/8/2/6/_/uploads/8973957/image_track/1829543/w1400_h1400_q70_ptrue_v2_----cropped_1522318998628.jpg",
        "link": "https://hearthis.at/djbymistake/dj-by-mistake-weareafrica-vol-1/"
    },
    {
        "title": "East Africa Stand Up vol 2",
        "genre": "Mix",
        "date": "Apr 2018",
        "image": "https://img.hearthis.at/8/6/7/_/uploads/8973957/image_track/1829671/w1400_h1400_q70_ptrue_v2_----cropped_1522323097768.jpg",
        "link": "https://hearthis.at/djbymistake/dj-by-mistake-east-africa-stand-up-vol-2/"
    },
    {
        "title": "Roots Paradise",
        "genre": "Mix",
        "date": "Apr 2018",
        "image": "https://img.hearthis.at/7/4/2/_/uploads/8973957/image_track/1835863/w1400_h1400_q70_ptrue_v2_----cropped_1522671259247.jpg",
        "link": "https://hearthis.at/djbymistake/dj-by-mistake-roots-paradise/"
    },
    {
        "title": "Big Man Reggae",
        "genre": "Mix",
        "date": "Mar 2018",
        "image": "https://img.hearthis.at/0/5/9/_/uploads/8973957/image_track/1829887/w1400_h1400_q70_ptrue_v2_----cropped_1522331805950.jpg",
        "link": "https://hearthis.at/djbymistake/dj-by-mistake-big-man-reggae/"
    },
    {
        "title": "01 The 1st Chilled Out House Session",
        "genre": "Mix",
        "date": "Mar 2018",
        "image": "https://img.hearthis.at/7/6/2/_/uploads/8973957/image_track/1829870/w1400_h1400_q70_ptrue_v2_----cropped_1522330948267.jpg",
        "link": "https://hearthis.at/djbymistake/01-the-1st-chilled-out-house-session/"
    },
    {
        "title": "Dancehall Set Venus 101.9 FM, 1st Feb 2013",
        "genre": "Mix",
        "date": "Mar 2018",
        "image": "https://img.hearthis.at/8/8/9/_/uploads/8973957/image_track/1829849/w1400_h1400_q70_ptrue_v2_----cropped_1522329997988.jpg",
        "link": "https://hearthis.at/djbymistake/dj-by-mistake-dancehall-set-venus-1019-fm-1st-feb-2013/"
    },
    {
        "title": "East Africa Stand Up !",
        "genre": "Mix",
        "date": "Mar 2018",
        "image": "https://img.hearthis.at/1/6/6/_/uploads/8973957/image_user/w1400_h1400_q70_ptrue_v2_----cropped_1511915661.jpg",
        "link": "https://hearthis.at/djbymistake/dj-by-mistake-east-africa-stand-up/"
    },
    {
        "title": "Carribean aftermath vol 4",
        "genre": "Mix",
        "date": "Mar 2018",
        "image": "https://img.hearthis.at/1/6/6/_/uploads/8973957/image_user/w1400_h1400_q70_ptrue_v2_----cropped_1511915661.jpg",
        "link": "https://hearthis.at/djbymistake/dj-by-mistake-carribean-aftermath-vol-4/"
    },
    {
        "title": "Straight For The Castle vol 1",
        "genre": "Mix",
        "date": "Mar 2018",
        "image": "https://img.hearthis.at/0/5/7/_/uploads/8973957/image_track/1829468/w1400_h1400_q70_ptrue_v2_----cropped_1522315910750.jpg",
        "link": "https://hearthis.at/djbymistake/dj-by-mistake-straight-for-the-castle-vol-1/"
    },
    {
        "title": "Kizomba Magic 1",
        "genre": "Mix",
        "date": "Mar 2018",
        "image": "https://img.hearthis.at/1/6/6/_/uploads/8973957/image_user/w1400_h1400_q70_ptrue_v2_----cropped_1511915661.jpg",
        "link": "https://hearthis.at/djbymistake/dj-by-mistake-kizomba-magic-1/"
    },
    {
        "title": "Ol Skul Ragga Mix",
        "genre": "Mix",
        "date": "Mar 2018",
        "image": "https://img.hearthis.at/8/3/6/_/uploads/8973957/image_track/1808769/w1400_h1400_q70_ptrue_v2_----cropped_1521151704638.jpg",
        "link": "https://hearthis.at/djbymistake/dj-by-mistake-ol-skul-ragga-mix/"
    },
    {
        "title": "Soul Train 1",
        "genre": "Mix",
        "date": "Nov 2017",
        "image": "https://img.hearthis.at/1/6/6/_/uploads/8973957/image_user/w1400_h1400_q70_ptrue_v2_----cropped_1511915661.jpg",
        "link": "https://hearthis.at/djbymistake/dj-by-mistake/"
    }
];

// Pagination and Mobile Scroll Logic

const Portfolio = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const desktopPageSize = 3;
    const totalPages = Math.ceil(mixes.length / desktopPageSize);

    // Desktop: Get current slice
    const currentMixes = mixes.slice(
        (currentPage - 1) * desktopPageSize,
        currentPage * desktopPageSize
    );

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <section id="portfolio" className="py-20 bg-brand-light dark:bg-brand-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            {/* Hearthis.at Logo - Using a simple SVG representation or the official color placeholder */}
                            <img src="https://hearthis.at/images/meta/hearthis_at-logo-w500.png" alt="hearthis.at logo" className="h-8 w-auto mix-blend-multiply dark:mix-blend-normal dark:brightness-200" />
                            <h2 className="text-3xl md:text-4xl font-bold text-kenya-black dark:text-kenya-white">Latest Mixes</h2>
                        </div>
                        <div className="w-20 h-1 bg-kenya-red rounded-full"></div>
                    </div>
                    <a href="https://hearthis.at/djbymistake/" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 text-kenya-green font-semibold hover:underline">
                        View All on hearthis.at <ExternalLink size={16} />
                    </a>
                </div>

                {/* DESKTOP VIEW: Grid with Pagination */}
                <div className="hidden md:block">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {currentMixes.map((mix, index) => (
                            <div key={index} className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                                <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                                    <img
                                        src={mix.image}
                                        alt={mix.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={mix.link} target="_blank" rel="noopener noreferrer" className="bg-kenya-red text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
                                        <Play fill="currentColor" size={24} />
                                    </a>
                                </div>
                                <div className="p-6">
                                    <span className="text-kenya-green text-xs font-bold uppercase tracking-wider block mb-1">{mix.genre}</span>
                                    <h3 className="text-kenya-black dark:text-white text-lg font-bold mb-1 line-clamp-1" title={mix.title}>{mix.title}</h3>
                                    <p className="text-gray-500 text-sm">{mix.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-4">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronLeft size={20} className="text-kenya-black dark:text-white" />
                            </button>
                            <span className="text-kenya-black dark:text-white font-medium">
                                Page {currentPage} of {totalPages}
                            </span>
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronRight size={20} className="text-kenya-black dark:text-white" />
                            </button>
                        </div>
                    )}
                </div>

                {/* MOBILE VIEW: Horizontal Scroll (2 items viewable) */}
                <div className="md:hidden">
                    <div className="flex overflow-x-auto pb-8 -mx-4 px-4 gap-4 snap-x snap-mandatory scrollbar-hide">
                        {mixes.map((mix, index) => (
                            <div key={index} className="flex-none w-[85%] sm:w-[60%] snap-center relative group rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                                <div className="aspect-video bg-gray-200 relative">
                                    <img
                                        src={mix.image}
                                        alt={mix.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20"></div>
                                    <a href={mix.link} target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 bg-kenya-red p-3 rounded-full text-white shadow-lg">
                                        <Play fill="currentColor" size={16} />
                                    </a>
                                </div>
                                <div className="p-4">
                                    <span className="text-kenya-green text-xs font-bold uppercase tracking-wider block mb-1">{mix.genre}</span>
                                    <h3 className="text-kenya-black dark:text-white text-base font-bold mb-1 line-clamp-1">{mix.title}</h3>
                                    <p className="text-gray-500 text-xs">{mix.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-400 text-xs mt-2 italic flex items-center justify-center gap-1">
                        Swipe for more <ChevronRight size={12} />
                    </p>
                    <div className="mt-6 text-center">
                        <a href="https://hearthis.at/djbymistake/" target="_blank" rel="noopener noreferrer" className="text-kenya-green font-semibold hover:underline inline-flex items-center gap-2">
                            View All on hearthis.at <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
