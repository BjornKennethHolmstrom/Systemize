"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Map, Book, Info, Mail } from 'lucide-react';

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center">
            <svg className="w-8 h-8 mr-2" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="20" fill="#f8fafc"/>
              <g transform="translate(10, 20)">
                <path d="M 0,0 C 5,-5 10,-2.5 15,0 C 20,2.5 25,5 30,0" 
                      fill="none" 
                      stroke="#3b82f6" 
                      strokeWidth="2.5"
                      strokeLinecap="round"/>
                <path d="M 0,0 C 5,5 10,2.5 15,0 C 20,-2.5 25,-5 30,0" 
                      fill="none" 
                      stroke="#8b5cf6" 
                      strokeWidth="2.5"
                      strokeLinecap="round"/>
                <circle cx="15" cy="0" r="2" fill="#1e3a8a"/>
              </g>
            </svg>
            <span className="text-xl font-bold text-gray-900">Systemize</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            <Link
              href="/explore"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${pathname === '/explore' 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <Map className="w-4 h-4" />
              Explore
            </Link>

            <Link
              href="/learn"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${pathname === '/learn' 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <Book className="w-4 h-4" />
              Learn
            </Link>

             {/*<Link
              href="/community"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${pathname === '/community' 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <Users className="w-4 h-4" />
              Community
            </Link>*/}

            <Link
              href="/about"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${pathname === '/about' 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <Info className="w-4 h-4" />
              About
            </Link>

            <Link
              href="/contact"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${pathname === '/contact' 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <Mail className="w-4 h-4" />
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
