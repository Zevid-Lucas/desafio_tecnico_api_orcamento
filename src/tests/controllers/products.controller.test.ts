import { Request, Response } from "express";
import getProducts from "../../controllers/products.controller";
import getProductsService from "../../services/products.service";

jest.mock("../../services/products.service");
describe("Products controller tests", () => {
  it("Should return an array of products - sucess case", async () => {
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

  it("should return an error message if product not found - failed case", async () => {
    const mockRequest = {} as Request;
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    const errorMessage = "Products not found";

    (getProductsService as jest.Mock).mockRejectedValue(
      new Error(errorMessage)
    );

    await getProducts(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.json).toHaveBeenCalledWith({ message: errorMessage });
  });
});
