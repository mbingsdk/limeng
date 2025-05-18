import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-6 text-center">
        Halaman Admin
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <Link
          to="/admin/puisi"
          className="block p-6 rounded-xl shadow-lg bg-amber-50 dark:bg-neutral-900 hover:bg-amber-100 dark:hover:bg-neutral-800 transition-all border border-amber-200 dark:border-neutral-700"
        >
          <h2 className="text-xl font-semibold text-amber-700 dark:text-amber-300 mb-2">
            Kelola Puisi
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Tambah, edit, atau hapus puisi kamu.
          </p>
        </Link>

        <Link
          to="/admin/cerita"
          className="block p-6 rounded-xl shadow-lg bg-amber-50 dark:bg-neutral-900 hover:bg-amber-100 dark:hover:bg-neutral-800 transition-all border border-amber-200 dark:border-neutral-700"
        >
          <h2 className="text-xl font-semibold text-amber-700 dark:text-amber-300 mb-2">
            Kelola Cerita
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Atur cerpen atau sinopsis yang ingin ditampilkan.
          </p>
        </Link>

        <Link
          to="/admin/galeri"
          className="block p-6 rounded-xl shadow-lg bg-amber-50 dark:bg-neutral-900 hover:bg-amber-100 dark:hover:bg-neutral-800 transition-all border border-amber-200 dark:border-neutral-700"
        >
          <h2 className="text-xl font-semibold text-amber-700 dark:text-amber-300 mb-2">
            Kelola Galeri
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Upload atau hapus gambar dari galeri.
          </p>
        </Link>
      </div>
    </div>
  );
}