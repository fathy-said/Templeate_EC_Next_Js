import DetailsBox from '@/Components/Pages/DetailBox/DetailsBox';
import axios from 'axios';
import Head from 'next/head';
import React from 'react';

const Detail = (props) => {
  return (
    <>
      <Head>
        <title>My store </title>
        <meta name="description" content="My page detail description" />

      </Head>
      <DetailsBox {...props} />
    </>
  );
}

export default Detail;
let getDataFromApi = async (api) => {
  try {
    let res = await axios.get(`https://dummyjson.com/${api}`);
    return {
      loading: false,
      status: 200,
      detailsData: res.data,
      products: res.data?.products || [],

    };
  } catch (error) {
    return {
      loading: false,
      status: error?.response?.status || 0,
      detailsData: {},
      products: res.data?.products || [],

    };
  }
};
export async function getStaticPaths(context) {
  //  console.log(context);
  let res = await getDataFromApi("products");

  let pathsTarget = []
  pathsTarget = await res.products.map((el) => {

    return {
      params: { detail_product: el.id.toString() }
    }
  })

  return {
    paths: pathsTarget,
    fallback: false, // can also be true or 'blocking'
  };

}
export async function getStaticProps(context) {
  let res = await getDataFromApi(`products/${context.params.detail_product}`);
  // console.log(context.params.detail)
  return {
    props: { ... await res }, // will be passed to the page component as props
  };
}