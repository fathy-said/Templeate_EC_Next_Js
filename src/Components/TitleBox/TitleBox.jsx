import React from "react";
import style from "./TitleBox.module.css";
const TitleBox = ({ text }) => {
    return (
        <div className={style.title_box}>
            <span></span>
            <h2>{text}</h2>
        </div>
    );
};

export default TitleBox;
