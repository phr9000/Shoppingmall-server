import React, {useEffect, useState} from 'react'
import MainCarousel from './MainCarousel';

export default function MainLayout() {
  const [products, setProducts] = useState([]);
  
  // USEEFFECT에 담고, []를 작성해야 한번만 호출됨, 여기 안에 안담기면 무한 루프에 빠짐 
  useEffect(()=>{
    fetch('data/products.json')
    .then(res=>res.json())
    .then(data=> {
      console.log('ok');
      setProducts(data);
    });
    return () => {
      console.log('unmount 될 때 청소하는 일을 담당');
    };
  }, []);

  return (
    <div className='main-layout-container'>
      <MainCarousel/>
      <ul>
        {
          products.map((product) => 
            <li key={product.id}>{product.name}</li>
          )
        }
      </ul>
    </div>
  )
}
