import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FadeInUp, StaggerContainer, StaggerChild } from "../utils/motionSettings"
import puisiList from "../data/puisi"

export default function Puisi() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FadeInUp>
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500 dark:from-amber-400 dark:to-orange-400">
          Digital Poetry
        </h2>
      </FadeInUp>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {puisiList.map((puisi) => (
          <StaggerChild key={puisi.id}>
            <Link to={`/puisi/${puisi.id}`} className="h-full block">
              <motion.article 
                whileHover={{ y: -5 }}
                className="group relative flex flex-col h-full rounded-2xl p-6 bg-amber-50/80 dark:bg-neutral-900/80 backdrop-blur-lg border border-amber-300/50 dark:border-neutral-700/30 shadow-lg dark:shadow-neutral-800/30 hover:shadow-xl transition-all"
              >
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[linear-gradient(90deg,transparent_95%,currentColor_95%),linear-gradient(0deg,transparent_95%,currentColor_95%)] rounded-2xl" />

                {/* Konten */}
                <div className="relative flex flex-col flex-1 space-y-4 z-10">
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-mono px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      #{puisi.category}
                    </span>
                    <time className="text-sm text-neutral-500 dark:text-neutral-400">
                      {puisi.date}
                    </time>
                  </div>

                  <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {puisi.title}
                  </h3>

                  <div className="text-neutral-600 dark:text-neutral-400 line-clamp-3">
                    <pre className="font-sans whitespace-pre-wrap">
                      {puisi.content}
                    </pre>
                  </div>

                  <div className="mt-auto inline-flex items-center gap-2 text-amber-600 dark:text-amber-400">
                    <span>Baca Selengkapnya</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.article>
            </Link>
          </StaggerChild>
        ))}
      </StaggerContainer>
    </div>
  )
}
