import axios from "axios";

const BASE_URL = "https://mockend.com/juunegreiros/BE-test-api/";

async function fetchProducts() {
  const response = await axios.get(`${BASE_URL}products`);
  const { data } = response;
  return data;
}

async function fetchProductsForId(productsIds: string) {
  const response = await axios.get(`${BASE_URL}products/${productsIds}`);
  const { data } = response;
  return data;
}

export default { fetchProducts, fetchProductsForId };
