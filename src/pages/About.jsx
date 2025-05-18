import { motion } from "framer-motion"
import { FadeInUp, StaggerContainer, StaggerChild } from "../utils/motionSettings"

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <FadeInUp>
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500 dark:from-amber-400 dark:to-orange-400">
          About Limengasu
        </h2>
      </FadeInUp>

      <StaggerContainer className="grid md:grid-cols-2 gap-8">
        
        {/* Biodata & Story */}
        <StaggerChild>
          <motion.div 
            whileHover={{ y: -5 }}
            className="relative rounded-2xl p-8 bg-amber-50/80 dark:bg-neutral-900/80 backdrop-blur-lg border border-amber-300/50 dark:border-neutral-700/30 shadow-lg"
          >
            <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[linear-gradient(90deg,transparent_95%,currentColor_95%),linear-gradient(0deg,transparent_95%,currentColor_95%)] rounded-2xl" />
            
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-500">
                Ruang Kreativitas
              </span>
            </h3>
            
            <div className="text-neutral-600 dark:text-neutral-400 space-y-3">
              <p>Hello, I’m RenArsha A.K.A Rennebula</p>
              <p>
                I come from the vibrant heart of Indonesia, carrying stories shaped by fantasy, silence, and dreams. I find solace in ancient Chinese culture, in poetry whispered through time, and in art that speaks louder than words.
              </p>
              <p>
                I started this blog in 2025 as a sanctuary for my creations, short stories, poems, illustrations, and fragments of my soul.
              </p>
              <p>
                Welcome to my world. I hope you find a piece of yourself in the pieces I share.
              </p>
            </div>

            {/* Topik Karya */}
            <div className="mt-6 flex gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm">
                #Prosa
              </span>
              <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm">
                #Puisi
              </span>
              <span className="px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 text-sm">
                #Sinopsis
              </span>
            </div>
          </motion.div>
        </StaggerChild>

        {/* Proses & Skill */}
        <StaggerChild>
          <motion.div 
            whileHover={{ y: -5 }}
            className="relative rounded-2xl p-8 bg-amber-50/80 dark:bg-neutral-900/80 backdrop-blur-lg border border-amber-300/50 dark:border-neutral-700/30 shadow-lg"
          >
            <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[linear-gradient(90deg,transparent_95%,currentColor_95%),linear-gradient(0deg,transparent_95%,currentColor_95%)] rounded-2xl" />
            
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
                Proses & Keahlian
              </span>
            </h3>
            
            <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
              <p>📖 Workshop Penulis Bulanan</p>
              <p>✍️ Komunitas Diskusi Sastra</p>
              <p>📅 Lomba Menulis Mingguan</p>
              <p>🎨 Kolaborasi dengan Ilustrator</p>
            </div>

            {/* Skill Chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Creative Writing",
                "Storyboarding",
                "Digital Illustration",
                "Concept Design",
                "Narrative Design",
                "Editing & Layout",
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 font-serif italic text-amber-600 dark:text-amber-400">
              "Kata-kata adalah lukisan tak kasat mata" — Anonim
            </div>
          </motion.div>
        </StaggerChild>
      </StaggerContainer>
    </div>
  )
}
