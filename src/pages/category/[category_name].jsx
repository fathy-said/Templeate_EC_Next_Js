import CategoryBox from "@/Components/Pages/CategoryBox/CategoryBox";
import axios from "axios";
// import { fun_data } from '@/Util/getDataFromApi';
import React from "react";

const CategoryPage = (props) => {
  return (
    <>
      <CategoryBox {...props} />
    </>
  );
};

export default CategoryPage;

let getDataFromApi = async (api) => {
  try {
    let res = await axios.get(`https://dummyjson.com/${api}`);
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
export async function getStaticPaths(context) {
  //  console.log(context);
  let res = await getDataFromApi("products");

  let pathsTarget = []
  pathsTarget = await res.products.map((el) => {
    return {
      params: { category_name: el.category.toString() }
    }
  })
  // console.log(pathsTarget)

  return {
    paths: pathsTarget,
    fallback: false, // can also be true or 'blocking'
  };
}
export async function getStaticProps(context) {
  let res = await getDataFromApi(`products/category/${context.params.category_name}`);
  return {
    props: { ...res, name: context.params.category_name }, // will be passed to the page component as props
  };
}


// export async function getStaticPaths(context) {
//   //  console.log(context);
//   let res = await getDataFromApi("products");

//   let pathsTarget = []
//   pathsTarget = await res.products.map((el) => {

//     return {
//       params: { category_name: el.id.toString() }
//     }


//   })
//   console.log(pathsTarget)

//   return {
//     paths: pathsTarget,
//     fallback: false, // can also be true or 'blocking'
//   };
// }