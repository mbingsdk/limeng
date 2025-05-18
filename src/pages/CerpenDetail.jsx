import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getStory } from "../gsheet/dataFetch";

export default function CerpenDetail() {
  const { id } = useParams()
  const [cerpenSelected, setCerpen] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStory = async () => {
      const data = await getStory();
      const found = data.find(item => item.id === id);
      setCerpen(found);
      setLoading(false);
    };

    fetchStory();
  }, [id]);

  if (loading) {
    return <div className="text-center py-20">Memuat...</div>
  }

  if (!cerpenSelected) {
    return <div className="text-center py-20">Story not found</div>
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <article className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-6">{cerpenSelected.title}</h1>
        <img 
          src={cerpenSelected.image} 
          alt={cerpenSelected.title} 
          className="w-full h-64 object-cover rounded-xl mb-8"
        />
        <div className="space-y-6">
          <div className="p-4 bg-neutral-100/50 dark:bg-neutral-800/30 rounded-lg">
            <p className="font-medium italic">{cerpenSelected.sinopsis}</p>
          </div>
          <pre className="whitespace-pre-wrap font-sans">{cerpenSelected.content}</pre>
        </div>
      </article>
    </div>
  )
}