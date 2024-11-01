import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter } from './Icons'

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="sm:mx-14 sm:px-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Border */}
          <div className="max-w-7xl mx-auto border-t"></div>

          {/* Main Footer Content */}
          <div className="pt-16 pb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
              {/* Logo and Description */}
              <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-black rounded-lg"></div>
                  <span className="text-xl font-bold">REVISION</span>
                </div>
                <p className="text-gray-600 text-sm mb-6 max-w-md lg:max-w-xs">
                  Welcome to ultimate source for fresh perspectives! Explore
                  curated content to enlighten, entertain and engage global
                  readers.
                </p>
                <div className="flex space-x-4 mb-8 sm:mb-0">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Homepages */}
              <div className="col-span-1">
                <h3 className="text-sm font-medium tracking-wider text-gray-900 uppercase mb-4">
                  Homepages
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Classic List
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Classic Grid
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Classic Overlay
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Hero Slider
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Featured Posts
                    </a>
                  </li>
                </ul>
              </div>

              {/* Categories */}
              <div className="col-span-1">
                <h3 className="text-sm font-medium tracking-wider text-gray-900 uppercase mb-4">
                  Categories
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Technology
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Travel
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Sport
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Business
                    </a>
                  </li>
                </ul>
              </div>

              {/* Pages */}
              <div className="col-span-1">
                <h3 className="text-sm font-medium tracking-wider text-gray-900 uppercase mb-4">
                  Pages
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Categories
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Contacts
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Section with Copyright */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm text-center">
                © 2024 — Teerawit Laothong. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
