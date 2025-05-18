// src/pages/admin/PuisiManager.jsx
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function PuisiManager() {
  const [puisi, setPuisi] = useState([])

  useEffect(() => {
    fetch("/api/puisi") // contoh API
      .then(res => res.json())
      .then(setPuisi)
  }, [])

  const handleDelete = async (id) => {
    await fetch(`/api/puisi/${id}`, { method: "DELETE" })
    setPuisi(puisi.filter(p => p.id !== id))
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Kelola Puisi</h2>
      <Link to="/admin/puisi/new" className="text-blue-500">+ Tambah Puisi</Link>
      <ul className="mt-4 space-y-2">
        {puisi.map(p => (
          <li key={p.id} className="border p-2 rounded">
            <div className="font-semibold">{p.judul}</div>
            <div className="flex gap-2 mt-1">
              <Link to={`/admin/puisi/edit/${p.id}`} className="text-green-500">Edit</Link>
              <button onClick={() => handleDelete(p.id)} className="text-red-500">Hapus</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
