'use client';

import { Twitter, Linkedin, Facebook, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative z-10 pt-24 pb-12 px-6 text-sm" style={{backgroundColor: '#000'}}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

                    {/* Brand Column */}
                    <div className="md:col-span-4">
                        <h3 className="text-2xl font-bold text-white mb-6 tracking-tighter">Prentice</h3>
                        <p className="text-white/40 leading-relaxed mb-8 max-w-sm">
                            Redefining cardiac care through continuous intelligence. We build the systems that watch over humanity's most vital rhythm.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={Twitter} />
                            <SocialIcon icon={Linkedin} />
                            <SocialIcon icon={Facebook} />
                            <SocialIcon icon={Instagram} />
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="md:col-span-2">
                        <h4 className="font-semibold text-white mb-6">Product</h4>
                        <ul className="space-y-4 text-white/50">
                            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Hardware</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-semibold text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-white/50">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="md:col-span-4">
                        <h4 className="font-semibold text-white mb-6">Stay Updated</h4>
                        <p className="text-white/40 mb-6">Join our newsletter for the latest breakthroughs in cardiac tech.</p>
                        <div className="flex bg-white/5 rounded-lg p-1 border border-white/10 focus-within:border-white/30 transition-colors">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent text-white w-full px-4 outline-none placeholder:text-white/20"
                            />
                            <button className="p-3 bg-white text-black rounded-md hover:bg-gray-200 transition-colors">
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30">
                    <p>© 2026 Prentice Health Inc. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon: Icon }: { icon: any }) {
    return (
        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-black hover:bg-white transition-all duration-300">
            <Icon size={18} />
        </a>
    )
}
