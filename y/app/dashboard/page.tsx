import { supabase } from "@/lib/supabase";
import ProductForm from "@/components/ProductForm";

export default async function Dashboard() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="p-10">
        <h1 className="text-2xl">Erreur chargement dashboard</h1>
        <p className="text-red-500">{error.message}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      
      {/* HEADER */}
      <h1 className="text-3xl font-light mb-10">
        Dashboard Admin
      </h1>

      {/* FORMULAIRE AJOUT PRODUIT */}
      <ProductForm />

      {/* LISTE PRODUITS */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {products?.length === 0 && (
          <p>Aucun produit pour le moment</p>
        )}

        {products?.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow overflow-hidden"
          >
            {p.image_url && (
              <img
                src={p.image_url}
                alt={p.title}
                className="h-44 w-full object-cover"
              />
            )}

            <div className="p-4">
              <h2 className="font-medium text-lg">{p.title}</h2>

              <p className="text-sm text-gray-500 mt-1">
                {p.description}
              </p>

              <p className="mt-3 font-bold">
                €{p.price}
              </p>

              {p.alibaba_url && (
                <a
                  href={p.alibaba_url}
                  target="_blank"
                  className="text-blue-500 text-sm mt-2 inline-block"
                >
                  Voir source Alibaba
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}