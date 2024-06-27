import React, { useEffect } from 'react'
import { ProductDetailCard } from '../../components/common/cards/ProductDetailCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductById, selectProductById } from '../../redux/features/product/productSlide'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
    const param = useParams(); 
    console.log("param", param.id)
    //const product = useSelector((state) => state?.product?.product);
    const product = useSelector(selectProductById);
    console.log("product2",product)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProductById(param?.id));
    }, [])
    console.log("product",product)
  return (
    <div>
        <h1>ProductDetail</h1>
        <ProductDetailCard image={product.image}
        title={product.name}
        price = {product.price}
        desc = {product.desc}
        />
    </div>
  )
}
