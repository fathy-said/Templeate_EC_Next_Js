import React from 'react';
import style from "./CartEmpty.module.css"
import Img from "../../assets/shopping_cart.png"
import Link from 'next/link';
import Image from 'next/image';
const CartEmpty = () => {
  return (
    <>
      <div className={style.cart_empty}>
        <div className={style.box}>
          <Image src={Img} alt="" width={150} height={150} />
          <h6>Your shopping cart is empty.</h6>
          <Link href={"/"}>
            <button>Go shopping Now</button>
          </Link>

        </div>

      </div>
    </>
  );
}

export default CartEmpty;
