import axios from "axios";
import fetchUsersApi from "../../dataSource/fetchUsersApi";

jest.mock("axios");
describe("fetchUsersApi", () => {
  it("should return an array of users", async () => {
    const mockUser = [
      {
        id: 1,
        name: "cvRhuZicvV",
        tax: 79,
      },
    ];
    axios.get = jest.fn().mockResolvedValue({ data: mockUser });

    await expect(fetchUsersApi.fetchUsers()).resolves.toEqual(mockUser);
  });

  it("should return a user for correct id", async () => {
    const mockUser = {
      id: 1,
      name: "cvRhuZicvV",
      tax: 79,
    };
    axios.get = jest.fn().mockResolvedValue({ data: mockUser });

    await expect(fetchUsersApi.fetchUserForId("1")).resolves.toEqual(mockUser);
  });
});
