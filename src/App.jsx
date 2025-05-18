import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Home from "./pages/Home"
import Cerpen from "./pages/Cerpen"
import Puisi from "./pages/Puisi"
import Gambar from "./pages/Gambar"
import About from "./pages/About"
import Kontak from "./pages/Kontak"

import CerpenDetail from "./pages/CerpenDetail"
import PuisiDetail from "./pages/PuisiDetail"

function App() {
  return (
    <div className="flex min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cerpen" element={<Cerpen />} />
            <Route path="/puisi" element={<Puisi />} />
            <Route path="/gambar" element={<Gambar />} />
            <Route path="/tentang" element={<About />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/cerpen/:id" element={<CerpenDetail />} />
            <Route path="/puisi/:id" element={<PuisiDetail />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
