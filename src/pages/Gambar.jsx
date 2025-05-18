import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FadeInUp, StaggerContainer, StaggerChild } from "../utils/motionSettings"
import { getGallery } from "../gsheet/dataFetch"

export default function Gambar() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [galeriData, setGaleriData] = useState([])

  useEffect(() => {
    const fetchGallery = async () => {
      const data = await getGallery()
      setGaleriData(data);
    }

    fetchGallery()
  }, [])

  if (galeriData.length === 0) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <FadeInUp>
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500 dark:from-amber-400 dark:to-orange-400">
          Digital Gallery
        </h2>
      </FadeInUp>

      <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {galeriData.map((img) => (
          <StaggerChild key={img.id}>
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative cursor-pointer rounded-xl bg-neutral-50/80 dark:bg-neutral-900/80 backdrop-blur-lg border border-neutral-300/50 dark:border-neutral-700/30 shadow-lg hover:shadow-xl transition-all"
              onClick={() => setSelectedImage(img)}
            >
              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[linear-gradient(90deg,transparent_95%,currentColor_95%),linear-gradient(0deg,transparent_95%,currentColor_95%)] rounded-xl" />
              
              <div className="overflow-hidden rounded-xl">
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-neutral-900/80 to-transparent">
                <p className="text-sm font-medium text-white truncate">
                  {img.title}
                </p>
              </div>
            </motion.div>
          </StaggerChild>
        ))}
      </StaggerContainer>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-w-3xl w-full mx-4 relative"
            >
              <div className="bg-neutral-50/80 dark:bg-neutral-900/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-neutral-300/50 dark:border-neutral-700/30 p-4">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="rounded-xl w-full h-[70vh] object-contain"
                />
                
                <div className="mt-4 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                    {selectedImage.title}
                  </h3>
                  
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="p-2 rounded-full bg-neutral-200/50 dark:bg-neutral-800/50 hover:bg-neutral-300/30 dark:hover:bg-neutral-700/50 transition-all border border-neutral-300/30 dark:border-neutral-700/30"
                  >
                    <svg
                      className="w-6 h-6 text-neutral-600 dark:text-neutral-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}