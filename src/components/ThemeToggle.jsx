import { useEffect, useState } from "react"

const GlowEffect = () => (
  <div className="absolute inset-0 rounded-xl opacity-20 pointer-events-none 
    mix-blend-overlay bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] 
    from-cyan-400/30 to-transparent dark:from-cyan-400/10" />
)

export default function ThemeToggle({ mobile = false }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && 
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
    return false
  })

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [isDarkMode])

  // Tambahkan grid pattern robotic
  const GridPattern = () => (
    <div className="absolute inset-0 rounded-xl opacity-10 dark:opacity-5 bg-[linear-gradient(90deg,transparent_95%,currentColor_95%),linear-gradient(0deg,transparent_95%,currentColor_95%)]" />
  )

  // Animasi LED indicator
  const LedIndicator = () => (
    <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full 
      ${isDarkMode ? 'bg-amber-500/80' : 'bg-amber-500/80'} 
      shadow-[0_0_8px] ${isDarkMode ? 'shadow-cyan-400/30' : 'shadow-amber-500/30'}`}
    />
  )

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className={`relative flex items-center justify-center gap-2 
        ${mobile 
          ? 'p-2 rounded-lg' 
          // : 'w-full py-3 px-4 rounded-xl'
          : 'p-2 rounded-lg'
        }
        bg-neutral-200/50 dark:bg-neutral-800/50 
        hover:bg-neutral-300/30 dark:hover:bg-neutral-700/50 
        border border-neutral-300/30 dark:border-neutral-700/30
        transition-all duration-300 
        hover:scale-[0.98] active:scale-95`}
      aria-label={`Toggle ${isDarkMode ? 'Light' : 'Dark'} Mode`}
    >
      <GlowEffect />
      <GridPattern />
      <LedIndicator />
      
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Sun Icon */}
        <svg
          className={`absolute transition-all transform 
            w-5 h-5 ${mobile ? 'w-4 h-4' : ''}
            ${!isDarkMode 
              ? 'opacity-100 rotate-0 text-amber-500' 
              : 'opacity-0 -rotate-180 scale-75'}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
        </svg>

        {/* Moon Icon */}
        <svg
          className={`absolute transition-all transform 
            w-5 h-5 ${mobile ? 'w-4 h-4' : ''}
            ${isDarkMode 
              ? 'opacity-100 rotate-0 text-amber-500' 
              : 'opacity-0 rotate-180 scale-75'}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </div>

      {/* {!mobile && (
        <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
          {isDarkMode ? 'Dark' : 'Light'} Mode
        </span>
      )} */}
    </button>
  )
}