import React, {useState} from 'react'

const OriginalLayout:React.FC = ()=> {
    type tabs = {
        category: string,
        name: string
    };
    const tabs = [
        {
            category: 'all',
            name: 'ALL'
        }, 
        {
            category: 'brand',
            name: 'BRAND WE LIKE'
        }, 
        {
            category: 'trend',
            name: 'TREND WE PICK'
        }, 
        {
            category: 'women',
            name: 'WOMEN WE LOVE'
        }, 
        {
            category: 'love',
            name: 'LOVE WE MEET'
        }, 
        {
            category: 'place',
            name: 'PLACE WE CHILL'
        }
    ];
    
    const [clickedIndex, setClickedIndex] = useState<number>(0);

    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>();
    const [products, setProducts] = useState<Product[]>([
        {id: 1, name: 'brand-product', category:'brand'},
        {id: 2, name: 'trend-product', category:'trend'},
        {id: 3, name: 'women-prduct', category:'women'},
        {id: 3, name: 'love-prduct', category:'love'},
        {id: 3, name: 'place-prduct', category:'place'}
    ]);
    type Product = {
        id: number,
        name: string,
        category: string
    };
    const handleTabClick = (category: string, index: number) => {
        setClickedIndex(index);
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
            <ul className='tab-area'>
            {tabs.map((category, index) => (
                <li>
                    <button key={category.category}
                        type="button"
                        className={index === clickedIndex? 'active': ''}
                        onClick={() => handleTabClick(category.category, index)}
                    >
                    {category.name}
                </button>
                </li>
                ))}
            </ul>
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