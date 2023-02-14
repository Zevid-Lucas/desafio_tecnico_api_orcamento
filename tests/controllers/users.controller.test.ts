import { Request, Response } from "express";
import getUsers from "../../src/controllers/users.controller";
import getUserService from "../../src/services/user.service";

jest.mock("../../src/services/user.service");

describe("Users Controller tests", () => {
  it("Should return an array of users", async () => {
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
});
