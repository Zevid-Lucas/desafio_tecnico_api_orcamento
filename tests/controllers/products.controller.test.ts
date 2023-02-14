import { Request, Response } from "express";
import getProducts from "../../src/controllers/products.controller";
import getProductsService from "../../src/services/products.service";

jest.mock("../../src/services/products.service");
describe("Users tests", () => {
  it("Should return an array of users", async () => {
    const productsMock = {
      data: [
        {
          id: 1,
          name: "explicabo alias hic reprehenderit deleniti quos id reprehenderit consequuntur ipsam iure voluptatem ea culpa excepturi ducimus repudiandae ab",
          price: 6945,
        },
      ],
    };
    const mockRequest = {} as Request;
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    (getProductsService as jest.Mock).mockResolvedValue(productsMock);
    await getProducts(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledTimes(1);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledTimes(1);
    expect(mockResponse.json).toHaveBeenCalledWith(productsMock);
  });
});
