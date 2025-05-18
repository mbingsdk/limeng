import { useParams } from "react-router-dom"
import puisiList from "../data/puisi"
import { FadeInUp } from "../utils/motionSettings"

export default function PuisiDetail() {
  const { id } = useParams()
  const puisi = puisiList.find(p => p.id === id)

  if (!puisi) {
    return <div className="text-center py-20">Poetry not found</div>
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <FadeInUp>
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500 dark:from-amber-400 dark:to-orange-400">
              {puisi.title}
            </h1>
            <div className="mt-4 flex justify-center items-center gap-4 text-neutral-500 dark:text-neutral-400">
              <span className="font-mono bg-amber-500/10 px-3 py-1 rounded-full text-amber-600 dark:text-amber-400">
                #{puisi.category}
              </span>
              <time>{puisi.date}</time>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none text-center">
            <pre className="font-sans whitespace-pre-wrap text-lg leading-relaxed">
              {puisi.content}
            </pre>
          </div>
        </div>
      </FadeInUp>
    </div>
  )
}