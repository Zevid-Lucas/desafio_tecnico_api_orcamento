import fetchUsersApi from "../../dataSource/fetchUsersApi";
import getUserService from "../../services/user.service";

jest.mock("../../dataSource/fetchUsersApi");
describe("User service unit test", () => {
  it("Should return array of users - sucess case", async () => {
    const userMock = [
      {
        id: 1,
        name: "cvRhuZicvV",
        tax: 79,
      },
    ];
    (fetchUsersApi.fetchUsers as jest.Mock).mockResolvedValue(userMock);
    const getUsers = await getUserService();

    expect(getUsers).toEqual(userMock);
  });
});
