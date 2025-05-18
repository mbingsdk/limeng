import { Link } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { motion } from "framer-motion"

import {
  House,
  BookAudio,
  BookHeart,
  Images,
  MessageSquareQuote,
  ContactRound,
} from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: "Home", path: "/", svg: <House /> },
    { name: "Cerpen", path: "/cerpen", svg: <BookAudio /> },
    { name: "Puisi", path: "/puisi", svg: <BookHeart /> },
    { name: "Gambar", path: "/gambar", svg: <Images /> },
    { name: "Tentang", path: "/tentang", svg: <MessageSquareQuote /> },
    { name: "Kontak", path: "/kontak", svg: <ContactRound /> },
  ]

  return (
    <nav className="md:hidden flex flex-col sticky top-0 z-50">
      <div className="flex justify-between items-center p-4 bg-amber-50/80 dark:bg-neutral-900/80 backdrop-blur-lg border-b border-amber-300/50 dark:border-neutral-700/30 shadow-sm dark:shadow-neutral-800/30">
        <Link 
          to="/" 
          className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500 dark:from-amber-400 dark:to-orange-400 transition-all hover:tracking-wide"
        >
          <span className="text-[0.8em] font-light opacity-75">X</span>Limengasu
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle mobile />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg bg-neutral-200/50 dark:bg-neutral-800/50 hover:bg-neutral-300/30 dark:hover:bg-neutral-700/50 transition-all border border-neutral-300/30 dark:border-neutral-700/30"
          >
            <svg 
              className="w-6 h-6 text-neutral-600 dark:text-neutral-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-amber-50/80 dark:bg-neutral-900/80 backdrop-blur-lg border-b border-amber-300/50 dark:border-neutral-700/30 shadow-sm dark:shadow-neutral-800/30"
        >
          <nav className="flex flex-col p-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    group relative px-4 py-3 rounded-xl font-medium transition-all
                    duration-300 hover:pl-6 ${isActive ? 'pl-6' : ''}
                    ${isActive 
                      ? "bg-gradient-to-r from-amber-500/20 to-orange-500/10 text-amber-600 dark:text-orange-400 border-l-4 border-amber-500"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-orange-400"}
                  `}
                >
                  {/* Robotic underline */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500/30 animate-underline" />
                  )}

                  {/* Icon + label */}
                  <span className="relative z-10 flex items-center gap-3">
                    <div className={`w-5 h-5 transition-colors ${isActive ? 'text-amber-500' : 'text-neutral-400 group-hover:text-amber-500'}`}>
                      {item.svg}
                    </div>
                    {item.name}
                  </span>

                  {/* Robotic grid overlay */}
                  <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[linear-gradient(90deg,_transparent_95%,_currentColor_95%),linear-gradient(0deg,_transparent_95%,_currentColor_95%)] rounded-xl pointer-events-none" />
                </Link>
              )
            })}
          </nav>
        </motion.div>
      )}
    </nav>
  )
}
