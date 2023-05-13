import React, { useCallback, useEffect, useState } from 'react';
import style from "./DetailsBox.module.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, } from 'react-redux';
import Img from "../../../assets/correct.png"
import Image from 'next/image';

const DetailsBox = ({ detailsData }) => {
  const [count, setCount] = useState(1);
  const [imgBg, setImgBg] = useState(null);

  const handleImeTarget = useCallback(
    (e) => {
      setImgBg(detailsData?.images[e])
    },
    [detailsData?.images]
  ); return (
    <>

      {
        detailsData.id ? (
          <>
            <div className={style.detail_box + " detail-box"}>
              <div className={style.container + " container"}>
                <div className={style.box_img}>
                  <div className={style.img_top}>
                    {
                      imgBg !== null ? (
                        <Image src={imgBg} alt={detailsData.title} width={630}
                          height={500} />
                      ) : (<Image src={detailsData.thumbnail} alt={detailsData.title} width={380}
                        height={500} />)
                    }

                  </div>
                  <div className={style.img_info}>

                    {
                      detailsData.images ? (
                        detailsData.images.map((el, index) => {
                          return (
                            <Image alt={detailsData.title} width={150} height={120} src={el} key={index} onClick={(e) => {
                              handleImeTarget(index)
                            }} />
                          )
                        })
                      ) : (null)
                    }
                  </div>
                </div>
                <div className={style.box_content}>
                  <h5 className={style.name}>
                    {detailsData.title}
                  </h5>
                  <p>
                    {detailsData.description}
                  </p>
                  <div className={style.info}>
                    <h6>

                      <span>Rating:</span>{detailsData.rating}

                    </h6>
                    <h6>
                      <span>brand:</span>{detailsData.brand}
                    </h6>
                    <h6>
                      <span>Category:</span>{detailsData.category}
                    </h6>
                  </div>

                  <div className={style.content_detail}>
                    <div>
                      <h5>${detailsData.price}</h5>
                      <h6>Inclusive of all taxes</h6>

                    </div>
                    <div>
                      <h5>${detailsData.price}</h5>
                      <span>{detailsData.discountPercentage}% off</span>

                    </div>
                  </div>
                  <div className={style.quantity}>
                    <h6>Quantity :</h6>
                    <div>
                      <button onClick={(e) => {
                        let res = count - 1
                        if (res > 0) {
                          setCount(res)
                        }

                      }}>-</button> <span>{count}</span><button onClick={(e) => {
                        let res = count + 1
                        setCount(res)

                      }}>+</button>
                    </div>
                  </div>
                  <div className={style.button_box}>
                    <button onClick={(e) => {
                      // dispatch(CartAction(detailsData))
                      // dispatch(ChangeProductCount({ type: 'count', id: detailsData.id, quantity: count }))
                      document.querySelector('.detail-box .add-cart').classList.add("add_cart_active")
                      setTimeout((el) => {
                        document.querySelector('.detail-box .add-cart').classList.remove("add_cart_active")
                      }, [1500])



                    }}><AiOutlineShoppingCart /> add to cart</button>
                    <button>buy now</button>
                  </div>

                </div>
              </div>
              <div className={style.add_cart + " add-cart"}>
                <div className={style.box}>
                  <Image src={Img} alt={Img} />
                  <h6>added to cart.</h6>
                </div>
              </div>
            </div>
          </>
        ) : (null)
      }

    </>
  );
}

export default DetailsBox;
{/* <>
  <div className="detail-box">
    <div className="container">
      <div className="box-img">
        <div className="img-top">
          <img src="https://i.dummyjson.com/data/products/5/1.jpg" alt="" />

        </div>
        <div className="img-info">
          <img src="https://i.dummyjson.com/data/products/5/1.jpg" alt="" />
          <img src="https://i.dummyjson.com/data/products/5/1.jpg" alt="" />
          <img src="https://i.dummyjson.com/data/products/5/1.jpg" alt="" />
        </div>
      </div>
      <div className="box-content">
        <h5 className='name'>iphone 8</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eius odit ipsa sapiente officia aut asperiores. Expedita iste </p>
        <div className="info">
          <h6>

            <span>Rating:</span>499

          </h6>
          <h6>
            <span>brand:</span>L'Oreal Paris
          </h6>
          <h6>
            <span>Category:</span>Skincare
          </h6>
        </div>

        <div className="content-detail">
          <div>
            <h5>$00</h5>
            <h6>Inclusive of all taxes</h6>

          </div>
          <div>
            <h5>$11</h5>
            <span>10.4 %off</span>

          </div>
        </div>
        <div className="quantity">
          <h6>Quantity :</h6>
          <div>
            <button onClick={(e) => {
              let res = count - 1
              if (res > 0) {
                setCount(res)
              }
            }}>-</button> <span>{count}</span><button onClick={(e) => {
              let res = count + 1
              setCount(res)
            }}>+</button>
          </div>
        </div>
        <div className="button-box">
          <button><AiOutlineShoppingCart /> add to cart</button>
          <button>buy now</button>
        </div>

      </div>
    </div>

  </div>
</> */}