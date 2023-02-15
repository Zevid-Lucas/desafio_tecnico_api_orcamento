import fetchProductsApi from "../../dataSource/fetchProductsApi";
import getProductsService from "../../services/products.service";

jest.mock("../../dataSource/fetchProductsApi");

describe("Products service unit test", () => {
  it("Should return array of products - sucess case", async () => {
    const productsMock = [
      {
        id: 1,
        name: "explicabo alias hic reprehenderit deleniti quos id reprehenderit consequuntur ipsam iure voluptatem ea culpa excepturi ducimus repudiandae ab",
        price: 6945,
      },
    ];

    (fetchProductsApi.fetchProducts as jest.Mock).mockResolvedValue(
      productsMock
    );
    const getProducts = await getProductsService();

    expect(getProducts).toEqual(productsMock);
  });
});
