import { Request, Response } from "express";
import getUsers from "../../controllers/users.controller";
import getUserService from "../../services/user.service";

jest.mock("../../services/user.service");

describe("Users Controller tests", () => {
  it("Should return an array of users - sucess case", async () => {
    const userMock = [
      {
        id: 1,
        name: "cvRhuZicvV",
        tax: 79,
      },
    ];
    const mockRequest = {} as Request;
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    (getUserService as jest.Mock).mockResolvedValue(userMock);
    await getUsers(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledTimes(1);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledTimes(1);
    expect(mockResponse.json).toHaveBeenCalledWith(userMock);
  });

  it("should return an error message if user not found - failed case", async () => {
    const mockRequest = {} as Request;
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    const errorMessage = "User not found";

    (getUserService as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await getUsers(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.json).toHaveBeenCalledWith({ message: errorMessage });
  });
});
