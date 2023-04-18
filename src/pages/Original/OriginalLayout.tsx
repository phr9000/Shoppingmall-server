import React, {useState} from 'react'

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
            "img": "/images/original_brand01.jpg",
            "tag": ["아디다스", "ADIDAS"],
            "title": "BRAND WE LIKE", 
            "desc" : "아디다스의 부활"
        },
        {
            "category": "brand",
            "id": 2,
            "img": "/images/original_brand02.jpg",
            "tag": ["보카바카", "VOCAVACA","익스클루시브"],
            "title": "BRAND WE LIKE", 
            "desc" : "마이 리틀 로맨스"
        },
        {
            "category": "trend",
            "id": 3,
            "img": "/images/original_trend01.jpg",
            "tag": ["스프링", "데님"],
            "title": "TREND WE PICK", 
            "desc" : "올봄, 당신에게 꼭 필요한 데님"
        },
        {
            "category": "trend",
            "id": 4,
            "img": "/images/original_trend02.jpg",
            "tag": ["스프링", "men","맨통합"],
            "title": "TREND WE PICK", 
            "desc" : "더 자유로울 수 있게"
        },
        {
            "category": "women",
            "id": 5,
            "img": "/images/original_women01.jpg",
            "tag": ["닐비아피", "정은채","NILBYP"],
            "title": "WOMEN WE LOVE", 
            "desc" : "정은채와 함께한 어느 봄날"
        },
        {
            "category": "women",
            "id": 6,
            "img": "/images/original_women02.jpg",
            "tag": ["던스트", "Dunst","23SS"],
            "title": "WOMEN WE LOVE", 
            "desc" : "던스트가 사랑한 지수"
        },
        {
            "category": "love",
            "id": 7,
            "img": "/images/original_love01.jpg",
            "tag": ["화이트데이", "LOVE"],
            "title": "LOVE WE MEET", 
            "desc" : "다샤, 조나단 부부의 특별한 일상"
        },
        {
            "category": "love",
            "id": 8,
            "img": "/images/original_love02.jpg",
            "tag": ["화이트데이", "LOVE"],
            "title": "LOVE WE MEET", 
            "desc" : "헤이주패밀리 화이트데이 홈파티"
        },
        {
            "category": "place",
            "id": 9,
            "img": "/images/original_place01.jpg",
            "tag": ["을지로맛집", "W핫플","더블유핫플","을지로전축","전축","LP바"],
            "title": "PLACE WE CHILL", 
            "desc" : "Whotple 전축"
        },
        {
            "category": "place",
            "id": 10,
            "img": "/images/original_place02.jpg",
            "tag": ["에치세로소스", "회현맛집","Whotple","더블유핫플"],
            "title": "PLACE WE CHILL", 
            "desc" : "Whotple 에치세로 소스"
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