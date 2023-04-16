import { stringify } from 'rc-field-form/es/useWatch';
import React, {useState} from 'react'

const OriginalLayout:React.FC = ()=>{
    const tabs = ['all', 'brand', 'trend', 'women'];
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>();
    const [products, setProducts] = useState<Product[]>([
        {id: 1, name: 'product1', category:'brand'},
        {id: 2, name: 'product2', category:'trend'},
        {id: 1, name: 'product3', category:'women'}
    ]);
    type Product = any;
    const handleTabClick = (category: string) => {
        setSelectedCategory(category);
        if(category === 'all') {
            setFilteredProducts(undefined);
        } else {
            const productsInCategory = products.filter((product) => product.category === category);
            setFilteredProducts(productsInCategory);
        }
    };
    return (
    //TODO: 인피니티 스크롤 
    <div className='main-layout-container original-container'>
        <div className='original-container__inner'>
            <h2>
                ORIGINAL
            </h2>
            <div className='tab-area'>
            {tabs.map((category) => (
                <button key={category} onClick={() => handleTabClick(category)}>
                    {category}
                </button>
                ))}
            </div>
            <div className='content-area'>
                <ul>
                    {(filteredProducts ?? products).map((product) => (
                        <li key={product.id}>{product.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default OriginalLayout;