import { Link } from "react-router-dom"
import { FadeInUp, StaggerContainer, StaggerChild } from "../utils/motionSettings"

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-24">

      {/* Hero */}
      <FadeInUp>
        <section className="text-center space-y-6">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
            Selamat Datang di Web Gabut Ini
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Ruang sastra digital tempat ide-ide berkembang, puisi dan prosa bersemayam, dan ilustrasi menari bersama makna.
          </p>
          <Link
            to="/cerpen"
            className="inline-block mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 dark:from-orange-400 dark:to-amber-400 text-white hover:scale-105 transition-transform"
          >
            Jelajahi Cerita
          </Link>
        </section>
      </FadeInUp>

      {/* Highlight Konten */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[
          {
            title: "Cerpen",
            desc: "Prosa pendek penuh makna.",
            link: "/cerpen",
            color: "bg-amber-500/10 text-amber-600 dark:text-amber-400"
          },
          {
            title: "Puisi",
            desc: "Kata yang menari indah.",
            link: "/puisi",
            color: "bg-orange-500/10 text-orange-600 dark:text-orange-400"
          },
          {
            title: "Gambar",
            desc: "Visualisasi ekspresi.",
            link: "/gambar",
            color: "bg-rose-500/10 text-rose-600 dark:text-rose-400"
          },
          {
            title: "Tentang",
            desc: "Kenali visi dan semangat di balik Halu.",
            link: "/tentang",
            color: "bg-amber-500/10 text-amber-600 dark:text-amber-400"
          },
          {
            title: "Kontak",
            desc: "Hubungi kami untuk kerja sama atau kritik.",
            link: "/kontak",
            color: "bg-orange-500/10 text-orange-600 dark:text-orange-400"
          },
        ].map((item, idx) => (
          <StaggerChild key={idx}>
            <Link to={item.link}>
              <div className={`group rounded-2xl p-6 h-full ${item.color} shadow-lg hover:shadow-xl transition-shadow`}>
                <h3 className="text-xl text-neutral-800 dark:text-white group-hover:text-amber-600 font-bold mb-2">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            </Link>
          </StaggerChild>
        ))}
      </StaggerContainer>

      {/* Kutipan */}
      <FadeInUp>
        <div className="text-center max-w-xl mx-auto italic text-amber-600 dark:text-amber-400">
          "Sastra bukan hanya kata, tapi jendela menuju semesta lain."
        </div>
      </FadeInUp>
    </div>
  )
}
