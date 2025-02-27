import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import logo from '../../../public/assets/logo-3.png'

export default function Footer() {
  return (
    <footer className=" text-white py-10 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column - Company Info */}
        <div>
          <div className="flex items-center gap-3">
            <Image src={logo} width="144" height="144" alt="Vaaniwave AI" />
            {/* <h2 className="text-2xl font-bold">Vaaniwave AI</h2> */}
          </div>
          <p className="text-gray-400 mt-3 text-sm">
            The most realistic AI Text-to-Speech (TTS) platform, offering self-hosted solutions with full control.
          </p>
        </div>

        {/* Middle Column - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Right Column - Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="https://facebook.com" target="_blank" className="hover:text-blue-500 transition-colors">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-blue-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="https://github.com" target="_blank" className="hover:text-gray-300 transition-colors">
              <Github className="w-6 h-6" />
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Vaaniwave AI. All rights reserved.
      </div>
    </footer>
  );
}
