import axios from "axios";
import fetchProductsApi from "../../dataSource/fetchProductsApi";

jest.mock("axios");
describe("fetchUsersApi", () => {
  it("should return an array of products", async () => {
    const mockProducts = [
      {
        id: 1,
        name: "explicabo alias hic reprehenderit deleniti quos id reprehenderit consequuntur ipsam iure voluptatem ea culpa excepturi ducimus repudiandae ab",
        price: 6945,
      },
    ];
    axios.get = jest.fn().mockResolvedValue({ data: mockProducts });

    await expect(fetchProductsApi.fetchProducts()).resolves.toEqual(
      mockProducts
    );
  });

  it("should return a product for correct id", async () => {
    const mockProducts = {
      id: 1,
      name: "explicabo alias hic reprehenderit deleniti quos id reprehenderit consequuntur ipsam iure voluptatem ea culpa excepturi ducimus repudiandae ab",
      price: 6945,
    };
    axios.get = jest.fn().mockResolvedValue({ data: mockProducts });

    await expect(fetchProductsApi.fetchProductsForId("1")).resolves.toEqual(
      mockProducts
    );
  });
});
