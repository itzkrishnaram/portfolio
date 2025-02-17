"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MoonIcon, SunIcon, Bars3Icon as MenuIcon, XMarkIcon as XIcon } from "@heroicons/react/24/solid"
import { useTheme } from "next-themes"

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -70 // Adjust this value based on your header height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = ["About", "Education", "Experience", "Skills", "Projects", "Honors", "Contact"]

  if (!mounted) return null

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold font-heading">Krishna Ram S.</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-2 py-1"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <MenuIcon className="h-6 w-6" />
        </button>

        {/* Theme Toggle Button */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hidden md:block"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Side Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-900 shadow-lg z-50 flex flex-col"
          >
            <div className="p-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Close menu"
              >
                <XIcon className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex-grow">
              <ul className="space-y-2 p-4">
                {navItems.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="w-full text-left py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="p-4">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-full py-2 px-4 rounded-md bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <>
                    <SunIcon className="w-5 h-5 mr-2" /> Light Mode
                  </>
                ) : (
                  <>
                    <MoonIcon className="w-5 h-5 mr-2" /> Dark Mode
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header

