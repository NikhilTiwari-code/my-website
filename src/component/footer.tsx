import React from 'react'
import Link from 'next/link'
import { FaLinkedinIn, FaXTwitter, FaFacebookF, FaInstagram, FaArrowUp, FaEnvelope } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="w-full bg-[#0f256e] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand & Links */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8 pb-8 border-b border-white/20">
          
          {/* Brand/About */}
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center bg-white/10 w-8 h-8 rounded-lg border border-white/10">
                <span className="text-[#2ecc71] font-bold text-lg">N</span>
              </div>
              <span className="text-white text-lg font-bold tracking-tight">
                Nikhil <span className="text-[#2ecc71] font-medium">Tiwari</span>
              </span>
            </div>
            <p className="text-[#9ab8d8] text-sm leading-relaxed">
              FullStack Developer dedicated to building scalable and engaging digital experiences. Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links & Contact */}
          <div className="flex flex-col sm:flex-row gap-12 md:gap-24">
            <div className="flex flex-col gap-3">
              <h3 className="text-white font-semibold">Quick Links</h3>
              <Link href="#" className="text-[#9ab8d8] hover:text-white transition-colors text-sm">Portfolio</Link>
              <Link href="#" className="text-[#9ab8d8] hover:text-white transition-colors text-sm">Experience</Link>
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="text-white font-semibold">Connect</h3>
              <a
                href="https://wa.me/9708413995?text=Hi%20Nikhil%2C%20I%20wanted%20to%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9ab8d8] hover:text-white transition-colors text-sm flex items-center gap-2"
              >
                <FaEnvelope size={14} /> Message on WhatsApp
              </a>
              <a
                href="mailto:nikhiltiwari0296@gmail.com"
                className="text-[#9ab8d8] hover:text-white transition-colors text-sm"
              >
                nikhiltiwari0296@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright, Socials, Back to Top */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <span className="text-white/60 text-sm">
            © {new Date().getFullYear()} Nikhil Tiwari. All rights reserved.
          </span>

          <div className="flex items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/30 rounded-full text-white hover:bg-white/10 transition-colors flex items-center justify-center w-8 h-8">
                <FaLinkedinIn size={14} />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/30 rounded-full text-white hover:bg-white/10 transition-colors flex items-center justify-center w-8 h-8">
                <FaXTwitter size={14} />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/30 rounded-full text-white hover:bg-white/10 transition-colors flex items-center justify-center w-8 h-8">
                <FaFacebookF size={14} />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/30 rounded-full text-white hover:bg-white/10 transition-colors flex items-center justify-center w-8 h-8">
                <FaInstagram size={15} />
              </Link>
            </div>

            <div className="w-px h-5 bg-white/20 hidden md:block" />

            {/* Back to Top Box */}
            <Link 
              href="#top"
              className="text-white text-xs flex items-center gap-2 uppercase tracking-wider font-semibold group bg-white/5 hover:bg-white/15 border border-white/20 px-4 py-2 rounded-md transition-all shadow-sm"
            >
              Back to top 
              <span className="bg-white/10 group-hover:bg-white/20 p-1 rounded transition-colors">
                <FaArrowUp size={10} className="group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

