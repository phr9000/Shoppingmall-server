import React from 'react'

type dataType = {
  category: string,
  id: number,
  preview: string,
  item: string,
  state: string,
  price: string,
  before?: string,
  sale?: string
};

type GreetingsProps = {
  datalist: dataType[]
};

const ProductIntro:React.FC<GreetingsProps> = (data)=>{
  return (
    <div className='product-container'>
      <ul className='product-inner'>
        {
          data.datalist.map(
            (list)=>
            <li>
              <a className='display-block' href='./new'>
                  <div className='img-area'>
                      <img src={process.env.PUBLIC_URL + list.preview} alt="app01" />
                  </div>
                  <div className="text-container">
                      <div className="text-area">
                          <div className="brand">{list.category}</div>
                          <div className="product-name">{list.item}</div>
                          <div className="sub-heading">Shrring Unbainanced</div>
                      </div>
                      <div className="price-area">
                          <div className="price">
                              <span className='price__bargain'>{list.before}</span>
                              <span className='price__origin'>{list.price}</span>
                          </div>
                          <div className="percent">{list.sale}</div>
                      </div>
                      <div className="label-area">
                          <div className='line'>뉴시즌</div>
                          <div className='multi-line'>단독</div>
                      </div>
                  </div>
              </a>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default ProductIntro;