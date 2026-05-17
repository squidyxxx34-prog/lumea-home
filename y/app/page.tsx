export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight">
          Modern Living
        </h1>

        <p className="mt-6 text-lg text-gray-500 max-w-xl">
          Minimalist furniture designed for modern interiors. Clean forms, timeless materials.
        </p>

        <div className="mt-10 flex gap-4">
          <a className="px-6 py-3 bg-black text-white rounded-full">
            Shop Collection
          </a>
          <a className="px-6 py-3 border border-black rounded-full">
            View Catalog
          </a>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-2xl font-light mb-10">Collections</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Living Room", "Bedroom", "Lighting"].map((item) => (
            <div key={item} className="h-64 bg-gray-100 flex items-end p-6">
              <span className="text-lg">{item}</span>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}