import { useState } from "react";
import { Link } from "react-router-dom";
import { Pencil, Trash2, PlusCircle } from "lucide-react";

export default function AdminCerita() {
  const [ceritaList, setCeritaList] = useState([
    {
      id: 1,
      judul: "Langit Jingga",
      sinopsis: "Tentang perjalanan anak kecil mencari ibunya di tengah konflik...",
    },
  ]);

  const [form, setForm] = useState({ id: null, judul: "", sinopsis: "" });
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      setCeritaList((prev) =>
        prev.map((item) =>
          item.id === form.id ? { ...item, judul: form.judul, sinopsis: form.sinopsis } : item
        )
      );
    } else {
      setCeritaList((prev) => [
        ...prev,
        { id: Date.now(), judul: form.judul, sinopsis: form.sinopsis },
      ]);
    }
    setForm({ id: null, judul: "", sinopsis: "" });
    setEditMode(false);
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditMode(true);
  };

  const handleDelete = (id) => {
    setCeritaList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-6 text-center">
        Kelola Cerita
      </h1>

      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <input
          type="text"
          name="judul"
          placeholder="Judul Cerita"
          value={form.judul}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg bg-orange-50 dark:bg-neutral-800 border border-orange-200 dark:border-neutral-700"
        />
        <textarea
          name="sinopsis"
          rows="4"
          placeholder="Sinopsis Cerita"
          value={form.sinopsis}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg bg-orange-50 dark:bg-neutral-800 border border-orange-200 dark:border-neutral-700"
        ></textarea>
        <button
          type="submit"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-all"
        >
          <PlusCircle className="w-5 h-5" />
          {editMode ? "Simpan Perubahan" : "Tambah Cerita"}
        </button>
      </form>

      <div className="space-y-4">
        {ceritaList.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-lg bg-orange-100 dark:bg-neutral-800 border border-orange-200 dark:border-neutral-700 shadow"
          >
            <h2 className="text-xl font-semibold text-orange-700 dark:text-orange-300">
              {item.judul}
            </h2>
            <p className="text-sm text-neutral-700 dark:text-neutral-400">
              {item.sinopsis}
            </p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleEdit(item)}
                className="px-3 py-1 rounded bg-amber-400 text-white hover:bg-amber-500"
              >
                <Pencil className="w-4 h-4 inline mr-1" /> Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
              >
                <Trash2 className="w-4 h-4 inline mr-1" /> Hapus
              </button>
            </div>
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
  );
}