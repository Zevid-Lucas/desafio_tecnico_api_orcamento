import fetchProductsApi from "../dataSource/fetchProductsApi";
import fetchUsersApi from "../dataSource/fetchUsersApi";

const getUserAndProductsService = async (
  userId: string,
  productsIds: string
) => {
  const user = await fetchUsersApi.fetchUserForId(userId);
  if (!user) {
    throw new Error("User not found");
  }
  const arrayIds = productsIds.split(",");
  const promises = arrayIds.map((id) => {
    return fetchProductsApi.fetchProductsForId(id);
  });
  const products = await Promise.all(promises);
  if (!products?.length || !products[0]) {
    throw new Error("Product not found");
  }
  const price = products
    .map((product) => {
      return (user.tax * product.price) / 100;
    })
    .reduce((acc, val) => {
      return acc + val;
    });

  return {
    totalPrice: Number(price.toFixed(2)),
  };
};

export default getUserAndProductsService;
