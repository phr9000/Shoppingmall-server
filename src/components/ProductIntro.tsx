import React from 'react'

type dataType = {
  category: string,
  id: number,
  preview: string,
  item: string,
  state: string,
  originPrice: string,
  bargainPrice?: string,
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
                      <img src={list.preview} alt="app01" />
                  </div>
                  <div className="text-container">
                      <div className="text-area">
                          <div className="brand">{list.category}</div>
                          <div className="product-name">{list.item}</div>
                          <div className="sub-heading">Shrring Unbainanced</div>
                      </div>
                      <div className="price-area">
                          <div className="price">

                          {list.bargainPrice === ''?<span>{list.originPrice}</span>:
                              <><span className='price__bargain'>{list.bargainPrice}</span><span className='price__origin'>{list.originPrice}</span></>
                          }
                          </div>
                          <div className="percent">{list.sale}</div>
                      </div>
                      <div className="label-area">
                        <p>
                            <span className='line clearance'>뉴시즌</span>
                            <span className='line make_reservation'>예약</span>
                        </p>
                        <p>
                            <span className='multi-line general_info'>단독</span>
                        </p>
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