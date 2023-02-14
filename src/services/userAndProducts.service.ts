import fetchProductsApi from "../dataSource/fetchProductsApi";
import fetchUsersApi from "../dataSource/fetchUsersApi";

const getUserAndProductsService = async (
  userId: string,
  productsIds: string
) => {
  const user = await fetchUsersApi.fetchUserForId(userId);

  if (productsIds.length) {
    const arrayIds = productsIds.split(",");
    const products = await Promise.all(
      arrayIds.map((id) => {
        return fetchProductsApi.fetchProductsForId(id);
      })
    );

    const price = products
      .map((product) => {
        return (user.tax * product.price) / 100;
      })
      .reduce((acc, val) => {
        return acc + val;
      });

    return {
      totalPrice: price,
    };
  }
};

export default getUserAndProductsService;
