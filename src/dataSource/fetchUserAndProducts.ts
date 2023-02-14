import fetchProductsApi from "./fetchProductsApi";
import fetchUsersApi from "./fetchUsersApi";

async function fetchUserAndProducts(userId: string, productsIds: string) {
  try {
    const userResponse = await fetchUsersApi.fetchUserForId(userId);
    const productsResponse = await fetchProductsApi.fetchProductsForId(
      productsIds
    );

    return {
      userResponse,
      productsResponse,
    };
  } catch (error) {
    console.error(error);
  }
}

export default fetchUserAndProducts;
