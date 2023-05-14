import { listenerCount } from 'process';
import React from 'react'
import ProductCard from './ProductCard';

type dataType = {
  id: number,
  category: string,
  brand: string,
  front: string,
  product: string,
  discout_price?: string,
  base_price?: string,
  img: string,
  alt?: string,
  sale?:string,
  general_tag?: string,
  make_reservation_tag?: string,
  clearance_tag?: string,
};

type GreetingsProps = {
  datalist: dataType[]
};

const ProductIntro:React.FC<GreetingsProps> = (data)=>{
  return (
    <div className='product-container'>
      <ul className='product-inner'>
        <div>
        </div>
        <ProductCard datalist={data.datalist}/>
      </ul>
    </div>
  )
}

export default ProductIntro;