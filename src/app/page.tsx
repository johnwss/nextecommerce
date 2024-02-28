import { ProductType } from "@/types/ProductType";
import Product from "./components/Product";

async function getProducts() {
let resposta = await fetch('https://fakestoreapi.com/products');
if(!resposta.ok){
  throw new Error('Não conseguiu puxar dados');
}
return resposta.json();
}


export default async function Home() {
  let products = await getProducts();
  // console.log(products);
  return (
  <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">

      {products.map((products:ProductType) => (
      <Product product={products} />
        )
      )};

      </div>
  </div>
  );
}
