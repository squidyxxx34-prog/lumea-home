import { supabase } from "@/lib/supabase";

export default async function ProductsPage() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="p-10">
        Erreur chargement produits
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black p-10">
      <h1 className="text-3xl font-light mb-10">Products</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products?.map((product) => (
          <div key={product.id} className="border p-4 rounded-xl">
            
            {product.image_url && (
              <img
                src={product.image_url}
                className="h-48 w-full object-cover rounded-lg"
              />
            )}

            <h2 className="mt-4 text-lg font-medium">
              {product.title}
            </h2>

            <p className="text-gray-500 text-sm mt-2">
              {product.description}
            </p>

            <p className="mt-3 font-medium">
              €{product.price}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}