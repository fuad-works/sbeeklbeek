import MainLayout from "./layout/MainLayout";
import ProductCard from "./components/ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const productData: Product[] = Array.from({ length: 40 }, (_, index) => ({
  id: index + 1,
  name: `منتج ${index + 1}`,
  price: Math.floor(Math.random() * 100) + 1000,
  imageUrl: `https://picsum.photos/300/200?random=${index}`, // Using Lorem Picsum for food images
}));

function App() {
  return (
    <MainLayout>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4  mb-16">
        {productData.map((product) => (
          <ProductCard
            key={product.id}
            productName={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>

    </MainLayout>
  )
}

export default App