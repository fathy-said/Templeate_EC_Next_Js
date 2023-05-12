import { useState } from "react";
// import { searchProduct } from "../../RTK/Thunk/SearchProduct";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";
import { HiOutlineSearch } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import style from "./Header.module.css";
// import { chickSearch } from "../../RTK/Reducer/SearchReducer";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";
const Header = () => {
    let { cart } = useSelector((state) => state.CartReducer);

    let [menuActive, setMenuActive] = useState("");
    let router = useRouter();
    return (
        <>
            <div className={style.navbar_box}>
                <div className="container said">
                    <div className={style.nav_top}>
                        <ul className={style.box_left}>
                            <li>
                                <a href="#a">Seller Center</a>
                            </li>
                            <li>
                                <a href="#a">Download</a>
                            </li>
                            <li>
                                Follow
                                <a href="#a">
                                    <IoLogoFacebook />
                                </a>
                                <a href="#a">
                                    <IoLogoInstagram />
                                </a>
                            </li>
                        </ul>
                        <ul className={style.box_right}>
                            <li>
                                <a href="#a">
                                    <AiFillQuestionCircle />
                                    Support
                                </a>
                            </li>
                            <li>
                                <a href="#a">Register</a>
                            </li>
                            <li>
                                <a href="#a">Log in</a>
                            </li>
                        </ul>
                    </div>
                    <div className={style.nav_bottom}>
                        <div className={style.nav_bottom_box_left}>
                            <span
                                className={style.menu}
                                onClick={(e) => {
                                    setMenuActive(true);
                                }}
                            >
                                <TbMenu2 />
                            </span>

                            <Link href="/">SnapUp.</Link>
                        </div>
                        <div className={style.nav_bottom_box_center}>
                            <form
                                action=""
                                className="d-none d-lg-flex"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Search your preferred items here"
                                    onChange={(e) => {
                                        // if (e.target.value.length > 0) {
                                        //     //     dispatch(
                                        //     //         searchProduct({
                                        //     //             title: e.target.value,
                                        //     //         })
                                        //     //     );
                                        //     //     // dispatch(searchProduct({ title: 'iphone' }))
                                        //     //     dispatch(
                                        //     //         chickSearch({ type: true })
                                        //     //     );
                                        //     //     router.push("/");
                                        //     // } else {
                                        //     //     dispatch(
                                        //     //         chickSearch({ type: false })
                                        //     //     );
                                        // }
                                    }}
                                />
                                <button>
                                    <HiOutlineSearch />
                                </button>
                            </form>
                            <ul
                                className={
                                    ` d-none d-lg-flex ` +
                                    style.nav_bottom_box_center_info
                                }
                            >
                                <Link href="/category/smartphones">
                                    <li>Smartphones</li>
                                </Link>
                                <Link href="/category/laptops">
                                    <li>Laptops</li>
                                </Link>
                                <Link href="/category/fragrances">
                                    <li>Fragrances</li>
                                </Link>
                                <Link href="/category/skincare">
                                    <li>Skincare</li>
                                </Link>
                                <Link href="/category/groceries">
                                    <li>Groceries</li>
                                </Link>
                                <Link href="/category/home-decoration">
                                    <li>Home Decoration</li>
                                </Link>
                                <Link href="/category/furniture">
                                    <li>Furniture</li>
                                </Link>
                                <Link href="/category/tops">
                                    <li>Tops</li>
                                </Link>
                            </ul>
                        </div>

                        <div className={style.nav_bottom_box_right}>
                            <div className={style.nav_bottom_shop}>
                                <Link href="/cart">
                                    <span>{cart.length}</span>

                                    <FaShoppingBag />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={` d-flex  d-lg-none   ${style.box_search}`}>
                        <form
                            action=""
                            className=""
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                        >
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Search your preferred items here"
                                onChange={(e) => {
                                    // if (e.target.value.length > 0) {
                                    //     dispatch(chickSearch({ type: true }));
                                    //     dispatch(
                                    //         searchProduct({
                                    //             title: e.target.value,
                                    //         })
                                    //     );
                                    //     router.push("/");
                                    //     // dispatch(searchProduct({ title: 'iphone' }))
                                    // } else {
                                    //     dispatch(chickSearch({ type: false }));
                                    // }
                                }}
                            />
                            <button>
                                <HiOutlineSearch />
                            </button>
                        </form>
                    </div>
                </div>
                <div
                    className={
                        menuActive
                            ? `${style.over_box} ${style.over_box_active} `
                            : style.over_box
                    }
                    onClick={() => {
                        setMenuActive(false);
                    }}
                ></div>

                <div
                    className={
                        menuActive == true
                            ? `${style.menu_box} ${style.menu_box_active}`
                            : style.menu_box
                    }
                >
                    <div className={style.menu_box_box}>
                        <div className={style.menu_box_title}>
                            <h5>ALL CATEGORIES</h5>
                            <span
                                onClick={(e) => {
                                    setMenuActive(false);
                                }}
                            >
                                <GrFormClose />
                            </span>
                        </div>
                        <ul>
                            <Link href={"/category/smartphones"}>
                                <li>Smartphones</li>
                            </Link>

                            <Link href={"/category/laptops"}>
                                <li>Laptops</li>
                            </Link>

                            <Link href={"/category/fragrances"}>
                                <li>Fragrances</li>
                            </Link>

                            <Link href={"/category/skincare"}>
                                <li>Skincare</li>
                            </Link>

                            <Link href={"/category/groceries"}>
                                <li>Groceries</li>
                            </Link>

                            <Link href={"/category/home-decoration"}>
                                <li>Home Decoration</li>
                            </Link>

                            <Link href={"/category/furniture"}>
                                <li>Furniture</li>
                            </Link>
                            <Link href={"/category/tops"}>
                                <li>tops</li>
                            </Link>

                            <Link href={"/category/womens-dresses"}>
                                <li>Womens Dresses</li>
                            </Link>

                            <Link href={"/category/womens-shoes"}>
                                <li>Womens Shoes</li>
                            </Link>

                            <Link href={"/category/mens-shirts"}>
                                <li>Mens Shirts</li>
                            </Link>

                            <Link href={"/category/mens-shoes"}>
                                <li>Mens Shoes</li>
                            </Link>

                            <Link href={"/category/mens-watches"}>
                                <li>Mens Watches</li>
                            </Link>

                            <Link href={"/category/omens-bags"}>
                                <li>Womens Bags</li>
                            </Link>

                            <Link href={"/category/womens-jewellery"}>
                                <li>Womens Jewellery</li>
                            </Link>

                            <Link href={"/category/sunglasses"}>
                                <li>Sunglasses</li>
                            </Link>

                            <Link href={"/category/automotive"}>
                                <li>Automotive</li>
                            </Link>

                            <Link href={"/category/motorcycle"}>
                                <li>Motorcycle</li>
                            </Link>

                            <Link href={"/category/lighting"}>
                                <li>Lighting</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
