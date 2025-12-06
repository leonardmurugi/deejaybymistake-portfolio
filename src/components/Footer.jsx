import { Instagram, Twitter, Facebook, Mail, Phone, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-kenya-black text-white pt-20 pb-8 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-kenya-red/10 rounded-full blur-[128px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-kenya-green/10 rounded-full blur-[128px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                    {/* Brand & Info */}
                    <div>
                        <img src="/favicon.ico" alt="DJ By Mistake Logo" className="w-16 h-16 mb-4 rounded-full border-2 border-kenya-red" />
                        <h2 className="text-4xl font-bold mb-6">
                            <span className="text-white">DJ</span>
                            <span className="text-kenya-red">BY</span>
                            <span className="text-kenya-green">MISTAKE</span>
                        </h2>
                        <p className="text-gray-400 max-w-md mb-8 text-lg">
                            Ready to elevate your event? Whether it's a club night, private rave, or corporate gig, let's make it unforgettable.
                        </p>

                        <h3 className="text-lg font-bold text-kenya-red mb-4">Direct Contact</h3>
                        <ul className="space-y-4 text-gray-300 mb-8">
                            <li className="flex items-center">
                                <Mail size={20} className="mr-3 text-kenya-green" />
                                <a href="mailto:brianmuindi17@gmail.com" className="hover:text-white transition-colors">brianmuindi17@gmail.com</a>
                            </li>
                            <li className="flex items-center">
                                <Phone size={20} className="mr-3 text-kenya-green" />
                                <a href="tel:+254717225285" className="hover:text-white transition-colors">0717225285</a>
                            </li>
                        </ul>

                        <h3 className="text-lg font-bold text-kenya-red mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-kenya-red hover:scale-110 transition-all duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-kenya-red hover:scale-110 transition-all duration-300">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-kenya-red hover:scale-110 transition-all duration-300">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl">
                        <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                        <form action="https://formsubmit.co/brianmuindi17@gmail.com" method="POST" className="space-y-4">
                            {/* FormSubmit Configuration */}
                            <input type="hidden" name="_subject" value="New Booking Inquiry - DJ Website" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_captcha" value="false" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                                    <input type="text" name="name" required className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-kenya-green transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                                    <input type="email" name="email" required className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-kenya-green transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-400">Event Type</label>
                                <select name="subject" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-kenya-green transition-colors">
                                    <option value="Club Gig">Club Gig</option>
                                    <option value="Private Party">Private Party</option>
                                    <option value="Wedding">Wedding</option>
                                    <option value="Corporate Event">Corporate Event</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                                <textarea name="message" rows="4" required className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-kenya-green transition-colors" placeholder="Tell me about your event..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-kenya-red hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-kenya-red/20">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} DJ By Mistake. All rights reserved.</p>
                    <p className="mt-2">
                        Designed by <a href="https://githigi.netlify.app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-kenya-red transition-colors">Leo Githigi</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
