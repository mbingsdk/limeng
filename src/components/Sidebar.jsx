import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import ThemeToggle from "./ThemeToggle"
import {
  House,
  BookAudio,
  BookHeart,
  Images,
  MessageSquareQuote,
  ContactRound,
} from "lucide-react"

export default function Sidebar() {
  const location = useLocation()
  const [active, setActive] = useState("/")

  useEffect(() => {
    setActive(location.pathname)
  }, [location])

  const navItems = [
    { name: "Home", path: "/", svg: <House /> },
    { name: "Cerpen", path: "/cerpen", svg: <BookAudio /> },
    { name: "Puisi", path: "/puisi", svg: <BookHeart /> },
    { name: "Gambar", path: "/gambar", svg: <Images /> },
    { name: "Tentang", path: "/tentang", svg: <MessageSquareQuote /> },
    { name: "Kontak", path: "/kontak", svg: <ContactRound /> },
  ]

  return (
    <aside className="hidden md:flex flex-col w-64 min-h-screen px-5 py-8 
      bg-amber-50/80 dark:bg-neutral-900/80 
      border-r border-amber-300/50 dark:border-neutral-700/30 
      backdrop-blur-lg shadow-lg dark:shadow-neutral-800/30 
      transition-all"
    >
      <h1 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text 
        bg-gradient-to-r from-amber-600 to-orange-500 
        dark:from-amber-400 dark:to-orange-400 
        tracking-tighter hover:tracking-wide transition-all"
      >
        <span className="text-[0.8em] font-light opacity-75">X</span>Limengasu
      </h1>

      <nav className="flex flex-col gap-2.5">
        {navItems.map((item) => {
          const isActive = active === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                group relative px-4 py-3 rounded-xl font-medium transition-all
                duration-300 hover:pl-6 ${isActive ? 'pl-6' : ''}
                ${isActive 
                  ? "bg-gradient-to-r from-amber-500/20 to-orange-500/10 text-amber-600 dark:text-orange-400 border-l-4 border-amber-500"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-orange-400"}
              `}
            >
              {/* Animated underline */}
              {isActive && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500/30 animate-underline" />
              )}
              
              {/* Icon + Label */}
              <span className="relative z-10 flex items-center gap-3">
                <div className={`w-5 h-5 transition-colors ${isActive ? 'text-amber-500' : 'text-neutral-400 group-hover:text-amber-500'}`}>
                  {item.svg}
                </div>
                {item.name}
              </span>

              {/* Robotic grid pattern */}
              <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[linear-gradient(90deg,_transparent_95%,_currentColor_95%),linear-gradient(0deg,_transparent_95%,_currentColor_95%)] rounded-xl" />
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto pt-8">
        <ThemeToggle />
      </div>
    </aside>
  )
}
