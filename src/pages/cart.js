import CartBox from "@/Components/Pages/CartBox/CartBox";
import Head from "next/head";

const Cart = () => {
  return (
    <>
      <Head>
        <title>My store </title>
        <meta name="description" content="My page cart description" />

      </Head>
      <CartBox />
    </>
  );
}

export default Cart;
