import React from "react";
import style from "./Footer.module.css";
import { RiCopyrightLine } from "react-icons/ri";

const Footer = () => {
    return (
        <>
            <div className={style.footer}>
                <div className={style.container}>
                    <div className={style.box_link}>
                        <a href="#a">PRIVACY POLICY</a>
                        <a href="#a">TERM OF SERVICE</a>
                        <a href="#a">ABOUT SNAPUP.</a>
                    </div>
                    <h6>
                        <RiCopyrightLine />
                        2022 SnapUp. All Rights Reserved.
                    </h6>
                </div>
            </div>
        </>
    );
};

export default Footer;
