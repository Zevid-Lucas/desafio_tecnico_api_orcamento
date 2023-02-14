import fetchProductsApi from "../dataSource/fetchProductsApi";

const getProductsService = async () => {
  const products = await fetchProductsApi.fetchProducts();
  return products;
};

export default getProductsService;
