import React from "react";
import style from "./ProductBox.module.css";
import img1 from "../../assets/pexels-helena-lopes-933964.jpg";
import Image from "next/image";
const ProductBox = ({
    img,
    name,
    id,
    brand,
    category,
    price,
    discountPercentage,
}) => {
    return (
        <>
            <div className={style.product_box}>
                <div className={style.box}>
                    <span className={style.title}>{category}</span>

                    <div className={style.box_img}>
                        <Image src={img} alt={name} width={200} height={200} />
                    </div>
                    <div className={style.info}>
                        <h5>
                            brand: <span>{brand}</span>
                        </h5>
                        <hr />
                        <h5>{name}</h5>

                        <div className={style.box_span}>
                            <span>$ {price}</span>
                            <span>${discountPercentage}</span>
                            <span>(%{Math.trunc(discountPercentage)})</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductBox;
