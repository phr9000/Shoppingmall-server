import React from "react";
import CartHeart from './CartHeart';

type dataType = {
    id: number,
    category: string,
    brand: string,
    front: string,
    product: string,
    discount_price?: string,
    base_price?: string,
    img: string,
    alt?: string,
    sale?:string,
    general_tag?: string,
    make_reservation_tag?: string,
    clearance_tag?: string,
  };
  
  type GreetingsProps = {
    datalist: dataType[];
  };

const ProductCard:React.FC<GreetingsProps> = (data)=>{
    return (
      <>
        {
          data.datalist.map(
            (list)=>
            <li>
              <a className='display-block' href='./new'>
                  <div className='img-area'>
                      <CartHeart/>
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
                              <span className='price__bargain'>{list.discount_price}</span>
                              <span className='price__origin'>{list.base_price}</span>
                          </div>
                          <div className="percent">{list.sale}</div>
                      </div>
                      <div className="label-area">
                        <p className='flex'>
                          {list.clearance_tag && (
                            <span className='line clearance'>{list.clearance_tag}</span>
                          )}
                          {list.make_reservation_tag && (
                            <span className='line make_reservation'>{list.make_reservation_tag}</span>
                          )}
                        </p>
                        <p>
                          {list.general_tag && (
                            <span className='multi-line general_info'>{list.clearance_tag}</span>
                          )}
                        </p>
                      </div>
                  </div>
              </a>
            </li>
          )
        }
    </>
    )
}

export default ProductCard;