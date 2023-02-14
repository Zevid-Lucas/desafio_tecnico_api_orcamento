import { Request, Response } from "express";
import getUserAndProductsService from "../../src/services/userAndProducts.service";
import getUserAndProducts from "../../src/controllers/userAndProducts.controller";

jest.mock("../../src/services/userAndProducts.service");

describe("UserAndProducts Controller tests", () => {
  test("should return the total price", async () => {
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
});
