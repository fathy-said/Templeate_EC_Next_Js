import React from "react";
import style from "./ContainerProduct.module.css";
const ContainerProduct = ({ children }) => {
    return <div className={style.product_container}>{children}</div>;
};

export default ContainerProduct;
