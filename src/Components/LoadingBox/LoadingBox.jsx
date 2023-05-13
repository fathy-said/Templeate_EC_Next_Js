import React from "react";
import style from "./LoadingBox.module.css";
let LoadingBox = () => {
    return (
        <>
            <div className="loading-box">
                <div className={style.container}>
                    <div className={style.loader}>
                        <div className={style.loader_dot}></div>
                        <div className={style.loader_dot}></div>
                        <div className={style.loader_dot}></div>
                        <div className={style.loader_dot}></div>
                        <div className={style.loader_dot}></div>
                        <div className={style.loader_dot}></div>
                        <div className={style.loader_text}></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoadingBox;
