import { Request, Response } from "express";
import getUserAndProducts from "../../controllers/userAndProducts.controller";
import getUserAndProductsService from "../../services/userAndProducts.service";

jest.mock("../../services/userAndProducts.service");

describe("UserAndProducts Controller tests", () => {
  it("should return the total price - sucess case", async () => {
    const mockUserId = "1";
    const mockProductsIds = "1,2";
    const mockTotalPrice = 100;

    const mockRequest = {
      params: {
        userId: mockUserId,
        productsIds: mockProductsIds,
      },
    } as unknown as Request;

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    (getUserAndProductsService as jest.Mock).mockResolvedValue(mockTotalPrice);

    await getUserAndProducts(mockRequest, mockResponse);

    expect(getUserAndProductsService).toHaveBeenCalledWith(
      mockUserId,
      mockProductsIds
    );
    expect(mockResponse.status).toHaveBeenCalledTimes(1);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledTimes(1);
    expect(mockResponse.json).toHaveBeenCalledWith(mockTotalPrice);
  });

  it("should return an error message if user not found - failed case", async () => {
    const mockUserId = "101";
    const mockProductsIds = "1,2";

    const mockRequest = {
      params: {
        userId: mockUserId,
        productsIds: mockProductsIds,
      },
    } as unknown as Request;
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    const errorMessage = "Products not found";

    (getUserAndProductsService as jest.Mock).mockRejectedValue(
      new Error(errorMessage)
    );

    await getUserAndProducts(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: errorMessage,
    });
  });

  it("should return an error message if product not found - failed case", async () => {
    const mockUserId = "1";
    const mockProductsIds = "101,102";

    const mockRequest = {
      params: {
        userId: mockUserId,
        productsIds: mockProductsIds,
      },
    } as unknown as Request;
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    const errorMessage = "User not found";

    (getUserAndProductsService as jest.Mock).mockRejectedValue(
      new Error(errorMessage)
    );

    await getUserAndProducts(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: errorMessage,
    });
  });
});
