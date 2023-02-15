import fetchProductsApi from "./fetchProductsApi";
import fetchUsersApi from "./fetchUsersApi";

const fetchUserAndProducts = async (userId: string, productsIds: string) => {
  const userResponse = await fetchUsersApi.fetchUserForId(userId);
  const productsResponse = await fetchProductsApi.fetchProductsForId(
    productsIds
  );

  return {
    userResponse,
    productsResponse,
  };
};

export default fetchUserAndProducts;
