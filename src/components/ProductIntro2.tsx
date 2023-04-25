import React from 'react'

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
        {
          data.datalist.map(
            (list)=>
            <li>
              <a className='display-block' href='./new'>
                  <div className='img-area'>
                      <img src={process.env.PUBLIC_URL + list.img} alt={list.alt} />
                  </div>
                  <div className="text-container">
                      <div className="text-area">
                          <div className="brand">{list.brand}</div>
                          <div className="product-name">{list.front}</div>
                          <div className="sub-heading">{list.product}</div>
                      </div>
                      <div className="price-area">
                          <div className="price">
                              <span className='price__bargain'>{list.discout_price}</span>
                              <span className='price__origin'>{list.base_price}</span>
                          </div>
                          <div className="percent">{list.sale}</div>
                      </div>
                      <div className="label-area">
                        <p>
                            <span className='line clearance'>{list.clearance_tag}</span>
                            <span className='line make_reservation'>{list.make_reservation_tag}</span>
                        </p>
                        <p>
                            <span className='multi-line general_info'>{list.clearance_tag}</span>
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