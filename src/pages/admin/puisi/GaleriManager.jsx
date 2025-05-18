import { useState } from "react"
import { Link } from "react-router-dom";
import { Trash2, PlusCircle } from "lucide-react"

export default function AdminGaleri() {
  const [galeri, setGaleri] = useState([
    { id: 1, judul: "Gambar 1", url: "https://via.placeholder.com/150" },
    { id: 2, judul: "Gambar 2", url: "https://via.placeholder.com/150" },
  ])

  const [judul, setJudul] = useState("")
  const [url, setUrl] = useState("")

  const tambahGambar = () => {
    if (!judul || !url) return
    const gambarBaru = {
      id: Date.now(),
      judul,
      url,
    }
    setGaleri([...galeri, gambarBaru])
    setJudul("")
    setUrl("")
  }

  const hapusGambar = (id) => {
    setGaleri(galeri.filter((g) => g.id !== id))
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-6 text-center">
        Kelola Galeri
      </h1>

      <div className="bg-amber-50 dark:bg-neutral-900 border border-amber-200 dark:border-neutral-700 rounded-xl p-6 mb-8 shadow-lg">
        <h2 className="text-xl font-semibold text-amber-700 dark:text-amber-300 mb-4">
          Tambah Gambar Baru
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Judul Gambar"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className="px-4 py-2 rounded-lg bg-white dark:bg-neutral-800 border border-amber-200 dark:border-neutral-700"
          />
          <input
            type="text"
            placeholder="URL Gambar"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="px-4 py-2 rounded-lg bg-white dark:bg-neutral-800 border border-amber-200 dark:border-neutral-700"
          />
        </div>
        <button
          onClick={tambahGambar}
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-all"
        >
          <PlusCircle size={18} /> Tambah Gambar
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {galeri.map((g) => (
          <div
            key={g.id}
            className="bg-white dark:bg-neutral-800 border border-amber-200 dark:border-neutral-700 rounded-xl p-4 shadow-md relative"
          >
            <img
              src={g.url}
              alt={g.judul}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h3 className="text-md font-semibold text-neutral-700 dark:text-neutral-300">
              {g.judul}
            </h3>
            <button
              onClick={() => hapusGambar(g.id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-600"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/admin"
          className="text-sm text-amber-600 dark:text-amber-400 hover:underline"
        >
          Kembali ke Dashboard Admin
        </Link>
      </div>
    </div>
  )
}
