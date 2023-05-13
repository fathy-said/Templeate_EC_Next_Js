let fun_data = async (api) => {
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
      status: error?.response?.status || 0,
      data: {},
      products: [],
    };
  }
};
export default fun_data
