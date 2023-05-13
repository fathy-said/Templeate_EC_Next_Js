import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import style from "./CartBox.module.css";
import { RemoveFromCart, ClearCart, ChangeProductCount } from "../../../../RTK/Reducer/CartReducer";
import Image from "next/image";
import CartEmpty from "@/Components/CartEmpty/CartEmpty";
import { useRouter } from "next/router";
const CartBox = () => {
  // const [count, setCount] = useState(1);
  let { cart } = useSelector((state) => state.CartReducer)
  let dispatch = useDispatch()
  let router = useRouter()
  let totalPrice = cart.reduce((acc, product) => {

    acc = Number(acc) + (product.price * product.productCount);
    return (
      acc
    )
  }, [0])
  return (
    <>
      {
        cart.length ? (<div className={style.cart_box}>

          <div className="container">
            <div className={style.box_table}>
              <Table className={style.table}>
                <thead>
                  <tr>
                    <th>
                      <div>#</div>
                    </th>
                    <th>
                      <div>Product</div>
                    </th>
                    <th>
                      <div>image</div>
                    </th>
                    <th>
                      <div>Unit Price</div>
                    </th>

                    <th>
                      <div>Quantity</div>
                    </th>
                    <th>
                      <div>Total Price
                      </div>
                    </th>
                    <th>
                      <div>Actions</div>
                    </th>
                  </tr>
                </thead>
                <div className={style.table_empty}></div>
                {
                  cart.map((el, index) => {
                    return (

                      <tbody key={el.id}>
                        <tr>
                          <td className="pt-3 ps-4 fw-bolder">
                            {index + 1}
                          </td>
                          <td>
                            <div>
                              <p>
                                {el.description}
                              </p>
                            </div>
                          </td>
                          <td>
                            <div>

                              <Image src={el.thumbnail} alt={el.title} width={100} height={67} onClick={() => {
                                router.push("/detail/" + el.id)

                              }} />
                            </div>
                          </td>
                          <td>
                            <div>
                              ${el.price}
                            </div>
                          </td>
                          <td>
                            <div>
                              <div className={style.quantity}>
                                <div>
                                  <button onClick={(e) => {
                                    if (e.target.parentElement.querySelector("span").innerHTML > 1) {
                                      e.target.parentElement.querySelector("span").innerHTML -= 1
                                      dispatch(ChangeProductCount({ type: 'decrease', id: el.id, }))
                                    }
                                  }}>-</button> <span>{el.productCount}</span><button onClick={(e) => {
                                    e.target.parentElement.querySelector("span").innerHTML = parseInt(e.target.parentElement.querySelector("span").innerHTML) + 1
                                    dispatch(ChangeProductCount({ type: 'increase', id: el.id, }))

                                  }

                                  }>+</button>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div>
                              ${
                                el.price * el.productCount
                              }
                            </div>
                          </td>
                          <td>
                            <div>
                              <button onClick={(e) => {
                                dispatch(RemoveFromCart(el.id))
                              }}>delete</button>
                            </div>
                          </td>

                        </tr>


                      </tbody>
                    )

                  })

                }

              </Table>
            </div>

            <div className={style.info}>
              <div className={style.info_box}>
                <h6>Total ({cart.length}) items: <span>$ {totalPrice}</span></h6>
                <button>check out</button>
              </div>
              <button onClick={(e) => {
                dispatch(ClearCart())
              }}>
                <RiDeleteBinLine />
                clear Cart
              </button>

            </div>
          </div>
        </div>) : (<CartEmpty />)


      }

    </>
  );
};

export default CartBox;
