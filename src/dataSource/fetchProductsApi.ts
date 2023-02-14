import axios from "axios";

const BASE_URL = "https://mockend.com/juunegreiros/BE-test-api/";

async function fetchProducts() {
  try {
    const response = await axios.get(`${BASE_URL}products`);
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function fetchProductsForId(productsIds: string) {
  try {
    const response = await axios.get(`${BASE_URL}products/${productsIds}`);
    const { data } = response;
    return data;
  } catch (AxiosError) {
    console.error(AxiosError);
  }
}

export default { fetchProducts, fetchProductsForId };
