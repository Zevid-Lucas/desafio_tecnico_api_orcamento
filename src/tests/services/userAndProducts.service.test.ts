import fetchProductsApi from "../../dataSource/fetchProductsApi";
import fetchUsersApi from "../../dataSource/fetchUsersApi";
import getUserAndProductsService from "../../services/userAndProducts.service";

jest.mock("../../dataSource/fetchProductsApi");
jest.mock("../../dataSource/fetchUsersApi");

describe("getUserAndProducts Service unit test", () => {
  it("Should the total price for a user with products - sucess case", async () => {
    const userMock = {
      id: 1,
      name: "cvRhuZicvV",
      tax: 79,
    };
    const productMock = {
      id: 1,
      name: "explicabo alias hic reprehenderit deleniti quos id reprehenderit consequuntur ipsam iure voluptatem ea culpa excepturi ducimus repudiandae ab",
      price: 6945,
    };

    (fetchUsersApi.fetchUserForId as jest.Mock).mockResolvedValue(userMock);
    (fetchProductsApi.fetchProductsForId as jest.Mock).mockResolvedValue(
      productMock
    );

    const getPrice = await getUserAndProductsService("1", "1");
    expect(getPrice).toEqual({ totalPrice: 5486.55 });
  });

  it("should return an error message if user not found - failed case", async () => {
    const mockUserId = "101";
    const mockProductsIds = "1,2";

    (fetchUsersApi.fetchUserForId as jest.Mock).mockResolvedValue(null);
    (fetchProductsApi.fetchProductsForId as jest.Mock).mockResolvedValue(
      mockProductsIds
    );

    await expect(
      getUserAndProductsService(mockUserId, mockProductsIds)
    ).rejects.toThrowError("User not found");
  });

  it("should return an error message if product not found - failed case", async () => {
    const mockUserId = "1";
    const mockProductsIds = "101,102";
    const mockUser = {
      id: 1,
      name: "cvRhuZicvV",
      tax: 79,
    };

    (fetchUsersApi.fetchUserForId as jest.Mock).mockResolvedValue(mockUser);
    (fetchProductsApi.fetchProductsForId as jest.Mock).mockResolvedValue(null);

    await expect(
      getUserAndProductsService(mockUserId, mockProductsIds)
    ).rejects.toThrowError("Product not found");
  });
});
