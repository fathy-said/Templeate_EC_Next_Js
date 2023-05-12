import Head from 'next/head'
import Image from 'next/image'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { testAction } from "../../RTK/Reducer/CartReducer";
import SliderBox from "@/Components/SliderBox/SliderBox";
import TitleBox from "@/Components/TitleBox/TitleBox";
import ContainerProduct from "@/Components/ContainerProduct/ContainerProduct";
import Link from "next/link";
import ProductBox from "@/Components/ProductBox/ProductBox";
import axios from "axios";

export default function Home(props) {
    let dispatch = useDispatch();
    return (
        <>
            {/* <Button
                onClick={() => {
                    dispatch(testAction());
                }}
            >
                body
            </Button> */}
            <Head>
                <title>My page </title>
                <meta name="description" content="My page title" />
                <meta name="Googlebot" content="noindex" />
                <meta name="robots" content="noindex" />
            </Head>
            <div className="container">
                <SliderBox />
                <TitleBox text={`SEE OUR PRODUCTS`} />
                {props.loading ? (
                    "loading"
                ) : props.status == 200 ? (
                    <ContainerProduct>
                        {props.products.length
                            ? props.products.map((pro) => {
                                  return (
                                      <Link
                                          href={"/detail/" + pro.id}
                                          key={pro.id}
                                      >
                                          <ProductBox
                                              img={pro.thumbnail}
                                              price={pro.price}
                                              discountPercentage={
                                                  pro.discountPercentage
                                              }
                                              category={pro.category}
                                              id={pro.id}
                                              name={pro.title}
                                              brand={pro.brand}
                                          />
                                      </Link>
                                  );
                              })
                            : null}
                    </ContainerProduct>
                ) : (
                    "Not found"
                )}
                {/* =========================== */}
                <TitleBox text={`SMART PHONES`} />
                {props.loading ? (
                    "loading"
                ) : props.status == 200 ? (
                    <ContainerProduct>
                        {props.products.length
                            ? props.products.map((pro) => {
                                  if (pro.category === "smartphones") {
                                      return (
                                          <Link
                                              href={"/detail/" + pro.id}
                                              key={pro.id}
                                          >
                                              <ProductBox
                                                  img={pro.thumbnail}
                                                  price={pro.price}
                                                  discountPercentage={
                                                      pro.discountPercentage
                                                  }
                                                  category={pro.category}
                                                  id={pro.id}
                                                  name={pro.title}
                                                  brand={pro.brand}
                                              />
                                          </Link>
                                      );
                                  }
                              })
                            : null}
                    </ContainerProduct>
                ) : (
                    "Not found"
                )}
                {/* =========================== */}
                <TitleBox text={`LAPTOPS`} />
                {props.loading ? (
                    "loading"
                ) : props.status == 200 ? (
                    <ContainerProduct>
                        {props.products.length
                            ? props.products.map((pro) => {
                                  if (pro.category === "laptops") {
                                      return (
                                          <Link
                                              href={"/detail/" + pro.id}
                                              key={pro.id}
                                          >
                                              <ProductBox
                                                  img={pro.thumbnail}
                                                  price={pro.price}
                                                  discountPercentage={
                                                      pro.discountPercentage
                                                  }
                                                  category={pro.category}
                                                  id={pro.id}
                                                  name={pro.title}
                                                  brand={pro.brand}
                                              />
                                          </Link>
                                      );
                                  }
                              })
                            : null}
                    </ContainerProduct>
                ) : (
                    "Not found"
                )}
                {/* =========================== */}
                <TitleBox text={`FRAGRANCES`} />
                {props.loading ? (
                    "loading"
                ) : props.status == 200 ? (
                    <ContainerProduct>
                        {props.products.length
                            ? props.products.map((pro) => {
                                  if (pro.category === "fragrances") {
                                      return (
                                          <Link
                                              href={"/detail/" + pro.id}
                                              key={pro.id}
                                          >
                                              <ProductBox
                                                  img={pro.thumbnail}
                                                  price={pro.price}
                                                  discountPercentage={
                                                      pro.discountPercentage
                                                  }
                                                  category={pro.category}
                                                  id={pro.id}
                                                  name={pro.title}
                                                  brand={pro.brand}
                                              />
                                          </Link>
                                      );
                                  }
                              })
                            : null}
                    </ContainerProduct>
                ) : (
                    "Not found"
                )}
                {/* =========================== */}
                <TitleBox text={`SKINCARE`} />
                {props.loading ? (
                    "loading"
                ) : props.status == 200 ? (
                    <ContainerProduct>
                        {props.products.length
                            ? props.products.map((pro) => {
                                  if (pro.category === "skincare") {
                                      return (
                                          <Link
                                              href={"/detail/" + pro.id}
                                              key={pro.id}
                                          >
                                              <ProductBox
                                                  img={pro.thumbnail}
                                                  price={pro.price}
                                                  discountPercentage={
                                                      pro.discountPercentage
                                                  }
                                                  category={pro.category}
                                                  id={pro.id}
                                                  name={pro.title}
                                                  brand={pro.brand}
                                              />
                                          </Link>
                                      );
                                  }
                              })
                            : null}
                    </ContainerProduct>
                ) : (
                    "Not found"
                )}
            </div>
        </>
    );
}
let fun_data = async (api) => {
    try {
        let res = await axios.get(`https://dummyjson.com/${api}/`);
        return {
            loading: false,
            status: 200,
            data: res.data,
            products: res.data.products,
        };
    } catch (error) {
        return {
            loading: false,
            status: error.response.status,
            data: {},
            products: [],
        };
    }
};
export async function getStaticProps(context) {
    let loading = true;
    let status = 0;
    let res = [];

    res = await fun_data("products");
    return {
        props: { ...res }, // will be passed to the page component as props
    };
}