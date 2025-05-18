import { motion } from "framer-motion"
import { FadeInUp, StaggerContainer, StaggerChild } from "../utils/motionSettings"
import {
  Instagram,
  Mail,
  Youtube,
  Twitter,
  MessageCircleMore
} from "lucide-react"
import { FaTiktok } from "react-icons/fa";

export default function Kontak() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FadeInUp>
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500 dark:from-amber-400 dark:to-orange-400">
          Contact Person
        </h2>
      </FadeInUp>

      <StaggerContainer className="grid md:grid-cols-2 gap-8">
        {/* Form Kontak */}
        <StaggerChild>
          <motion.div
            whileHover={{ y: -5 }}
            className="relative rounded-2xl p-8 bg-amber-50/80 dark:bg-neutral-900/80 backdrop-blur-lg border border-amber-300/50 dark:border-neutral-700/30 shadow-lg"
          >
            <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[linear-gradient(90deg,transparent_95%,currentColor_95%),linear-gradient(0deg,transparent_95%,currentColor_95%)] rounded-2xl" />

            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
              Form Email
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-amber-100/50 dark:bg-neutral-800/50 border border-amber-300/30 dark:border-neutral-700/30 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
                  Alamat Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-amber-100/50 dark:bg-neutral-800/50 border border-amber-300/30 dark:border-neutral-700/30 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
                  Pesan
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-amber-100/50 dark:bg-neutral-800/50 border border-amber-300/30 dark:border-neutral-700/30 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white font-medium transition-all"
              >
                Kirim
              </button>
            </form>
          </motion.div>
        </StaggerChild>

        {/* Jejak Literasi */}
        <StaggerChild>
          <motion.div
            whileHover={{ y: -5 }}
            className="relative rounded-2xl p-8 bg-amber-50/80 dark:bg-neutral-900/80 backdrop-blur-lg border border-amber-300/50 dark:border-neutral-700/30 shadow-lg h-full"
          >
            <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[linear-gradient(90deg,transparent_95%,currentColor_95%),linear-gradient(0deg,transparent_95%,currentColor_95%)] rounded-2xl" />
            
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
              Jejak Literasi
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-amber-100/50 dark:bg-neutral-800/50 hover:bg-amber-200/30 dark:hover:bg-neutral-700/30 transition-all">
                <div className="p-2 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400">
                  📚
                </div>
                <div>
                  <p className="font-medium">Perpustakaan Digital</p>
                  <p className="text-sm text-neutral-500">Koleksi 500+ Karya</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-amber-100/50 dark:bg-neutral-800/50 hover:bg-amber-200/30 dark:hover:bg-neutral-700/30 transition-all">
                <div className="p-2 rounded-full bg-orange-500/20 text-orange-600 dark:text-orange-400">
                  ✒️
                </div>
                <div>
                  <p className="font-medium">Komunitas Penulis</p>
                  <p className="text-sm text-neutral-500">1.2K Anggota Aktif</p>
                </div>
              </div>
            </div>
          </motion.div>
        </StaggerChild>
      </StaggerContainer>

      {/* Media Sosial */}
      <div className="mt-12">
        <h4 className="text-lg font-semibold mb-4 text-neutral-700 dark:text-neutral-300">
          Follow di Media Sosial
        </h4>
        <div className="flex gap-4 flex-wrap">
          <a
            href="https://instagram.com/rennebula"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-amber-100/40 dark:bg-neutral-800/40 hover:bg-amber-200/30 dark:hover:bg-neutral-700/30 text-amber-600 dark:text-amber-400 transition-all shadow-md"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="mailto:nebula.red25@gmail.com"
            className="p-3 rounded-full bg-amber-100/40 dark:bg-neutral-800/40 hover:bg-amber-200/30 dark:hover:bg-neutral-700/30 text-orange-600 dark:text-orange-400 transition-all shadow-md"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://tiktok.com/@rennebula"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-amber-100/40 dark:bg-neutral-800/40 hover:bg-amber-200/30 dark:hover:bg-neutral-700/30 text-pink-600 dark:text-pink-400 transition-all shadow-md"
          >
            <FaTiktok className="w-5 h-5" />
          </a>
        </div>

        {/* Sosial Media China */}
        <div className="mt-6 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <p><strong>Weibo/Xiaohongshu/Oasis:</strong> 灵悦Ren</p>
        </div>
      </div>
    </div>
  )
}
