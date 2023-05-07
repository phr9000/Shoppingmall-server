import React from "react";
const CartHeart: React.FC = () => {
    const heartClick = () => {
        alert('장바구니로 이동됩니다.');
    }
    return (
        <button className="icon heart-icon"  onClick={() => heartClick()}>
        </button>
    );
};
export default CartHeart;