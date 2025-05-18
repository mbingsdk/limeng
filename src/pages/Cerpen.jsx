import { Link } from "react-router-dom"
import cerpenList from "../data/cerpen"
import { 
  FadeInUp,
  StaggerContainer,
  StaggerChild
} from "../utils/motionSettings"

export default function Cerpen() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <FadeInUp>
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500 dark:from-amber-400 dark:to-orange-400">
          Short Story
        </h2>
      </FadeInUp>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {cerpenList.map((cerpen) => (
          <StaggerChild key={cerpen.id}>
            <article className="group relative rounded-2xl overflow-hidden bg-amber-50/80 dark:bg-neutral-900/80 backdrop-blur-lg border border-amber-300/50 dark:border-neutral-700/30 shadow-lg dark:shadow-neutral-800/30 transition-all hover:shadow-xl flex flex-col h-full">
              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[linear-gradient(90deg,transparent_95%,currentColor_95%),linear-gradient(0deg,transparent_95%,currentColor_95%)]" />
              
              {/* Image */}
              <div className="h-48 overflow-hidden relative shrink-0">
                <img
                  src={cerpen.image}
                  alt={cerpen.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 space-y-4">
                <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
                  {cerpen.title}
                </h3>
                
                <p className="text-neutral-600 dark:text-neutral-400 line-clamp-3">
                  {cerpen.sinopsis}
                </p>

                <div className="mt-auto">
                  <Link
                    to={`/cerpen/${cerpen.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500/20 to-orange-500/10 hover:from-amber-500/30 hover:to-orange-500/20 text-amber-600 dark:text-orange-400 border border-amber-500/30 hover:border-amber-500/50 transition-all relative z-10"
                  >
                    <span>Baca</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          </StaggerChild>
        ))}
      </StaggerContainer>
    </div>
  )
}