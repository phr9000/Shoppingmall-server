import React, {useState} from 'react'
import originalData from "../../data/originalData.json";

const OriginalLayout:React.FC = ()=> {
    type tabs = {
        category: string,
        name: string
    };
    const tabs = [
        {
            category: 'all',
            name: 'All'
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
        {
            "category": "brand",
            "id": 1,
            "img": "/images/preshow_modern01.jpg",
            "tag": ["스프링", "데님"],
            "title": "LE17SEPTEMBPE", 
            "desc" : "시그니처 미학에 충실한 23봄 두번째 컬렉션"
        },
        {
            "category": "trend",
            "id": 2,
            "img": "/images/preshow_modern01.jpg",
            "tag": ["스프링", "데님"],
            "title": "LE17SEPTEMBPE", 
            "desc" : "시그니처 미학에 충실한 23봄 두번째 컬렉션"
        },
        {
            "category": "women",
            "id": 3,
            "img": "/images/preshow_modern01.jpg",
            "tag": ["스프링", "데님"],
            "title": "LE17SEPTEMBPE", 
            "desc" : "시그니처 미학에 충실한 23봄 두번째 컬렉션"
        },
        {
            "category": "love",
            "id": 4,
            "img": "/images/preshow_modern01.jpg",
            "tag": ["스프링", "데님"],
            "title": "LE17SEPTEMBPE", 
            "desc" : "시그니처 미학에 충실한 23봄 두번째 컬렉션"
        },
        {
            "category": "place",
            "id": 2,
            "img": "/images/preshow_modern01.jpg",
            "tag": ["스프링", "데님"],
            "title": "LE17SEPTEMBPE", 
            "desc" : "시그니처 미학에 충실한 23봄 두번째 컬렉션"
        },
        {
            "category": "trend",
            "id": 5,
            "img": "/images/preshow_modern01.jpg",
            "tag": ["스프링", "데님"],
            "title": "LE17SEPTEMBPE", 
            "desc" : "시그니처 미학에 충실한 23봄 두번째 컬렉션"
        }
    ]);
    type Product = {
        category: string,
        id: number,
        img: string, 
        tag: Array<string>,
        title: string, 
        desc: string,


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
            <div className='tab-area'>
                {tabs.map((category, index) => (
                    <button key={category.category}
                            className={index === clickedIndex? 'active': ''}
                            onClick={() => handleTabClick(category.category, index)}
                        >
                        {category.name}
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