import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { selectAllProducts, fetchProducts } from './redux/features/product/productSlide'
import { useEffect } from 'react';
import { ProductCard } from './components/common/cards/ProductCard';

function App() {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchProducts())
  }, []);
  //console.log("product", products);
  return <>
  <h1 className="text-3xl font-bold text-blue-800 text-center">
    Our Products
    </h1>
    <section className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 px-20 mt-5'>
    {
        products.map((product, index) =>{
            return (
            <ProductCard 
            key={index} 
            image = {product.image} 
            title = {product.name}
            price = {product.price}
            desc = {product.desc}
            id = {product.id}
            qty = {1}
            />
            )
        })
    }
    </section>
  </>;
}

export default App
