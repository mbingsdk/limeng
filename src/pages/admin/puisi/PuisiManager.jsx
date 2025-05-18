import { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminPuisi() {
  const [puisiList, setPuisiList] = useState([
    { id: 1, judul: "Senja", isi: "Langit jingga menyapa hati..." },
    { id: 2, judul: "Hujan", isi: "Tetes bening jatuh bersama rindu..." },
  ]);

  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      setPuisiList((prev) =>
        prev.map((p) =>
          p.id === editId ? { ...p, judul, isi } : p
        )
      );
      setEditId(null);
    } else {
      setPuisiList((prev) => [
        ...prev,
        { id: Date.now(), judul, isi },
      ]);
    }
    setJudul("");
    setIsi("");
  };

  const handleEdit = (puisi) => {
    setJudul(puisi.judul);
    setIsi(puisi.isi);
    setEditId(puisi.id);
  };

  const handleDelete = (id) => {
    setPuisiList((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-6 text-center">
        Kelola Puisi
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-amber-50 dark:bg-neutral-900 border border-amber-200 dark:border-neutral-700 rounded-xl p-6 shadow mb-10"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
            Judul Puisi
          </label>
          <input
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className="w-full p-2 rounded bg-white dark:bg-neutral-800 border border-amber-300 dark:border-neutral-700"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
            Isi Puisi
          </label>
          <textarea
            value={isi}
            onChange={(e) => setIsi(e.target.value)}
            rows="4"
            className="w-full p-2 rounded bg-white dark:bg-neutral-800 border border-amber-300 dark:border-neutral-700"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all"
        >
          {editId ? "Update Puisi" : "Tambah Puisi"}
        </button>
      </form>

      <div className="space-y-4">
        {puisiList.map((puisi) => (
          <div
            key={puisi.id}
            className="p-4 bg-amber-100 dark:bg-neutral-800 border border-amber-300 dark:border-neutral-700 rounded-xl shadow"
          >
            <h3 className="text-lg font-bold text-amber-700 dark:text-amber-300">{puisi.judul}</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 whitespace-pre-line mb-4">{puisi.isi}</p>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(puisi)}
                className="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(puisi.id)}
                className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded"
              >
                Hapus
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
