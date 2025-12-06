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
                                <a href="tel:+254717225285" className="hover:text-white transition-colors mr-2">0717225285</a>
                                <span className="text-gray-600 mx-1">|</span>
                                <a
                                    href="https://wa.me/254717225285"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-kenya-green hover:text-white transition-colors inline-block align-middle"
                                    aria-label="WhatsApp"
                                >
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </a>
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
