import React, {useState} from 'react'
import OriginalData from 'assets/data/originalData.json'

const OriginalLayout:React.FC = ()=> {
    const tabList = [
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

    const [selectedCategory, setSelectedCategory] = useState<string>('all'); //eslint-disable-line no-unused-vars
    const [filteredProducts, setFilteredProducts] = useState<Product[]>();
    
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
        console.log(selectedCategory);
        if(category === 'all') {
            setFilteredProducts(undefined);
        } else {
            const productsInCategory = OriginalData.filter((product) => product.category === category);
            setFilteredProducts(productsInCategory);
        }
    };
    return (
    //TODO: 인피니티 스크롤 
    <div className='container-wrapper original-container'>
        <div className='thumbnail-container original-container__inner'>
            <h4 className='thumbnail-title'>
                ORIGINAL
            </h4>
            <div className='tab-area'>
                {tabList.map((category:any, index:any) => (
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
                    {(filteredProducts ?? OriginalData).map((product) => (
                        <li key={product.id}>
                            <a href="!#">
                                <div className="img-area">
                                    <img src={product.img} alt="" />
                                </div>
                                <div className="txt-area">
                                    <h3>
                                        {product.title}
                                    </h3>
                                    <p>
                                        {product.desc}
                                    </p>
                                    <div className='tag-area flex'>
                                        <h4>#TAG</h4>
                                        <ul className='tag'>
                                            
                                            {product.tag.map((tags) =>(
                                                <li key={tags}>
                                                    <button>
                                                        {tags}
                                                    </button>
                                                </li>
                                                )
                                            )}
                                               
                                        </ul>
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default OriginalLayout;