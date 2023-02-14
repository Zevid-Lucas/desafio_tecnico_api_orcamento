import fetchUsersApi from "../dataSource/fetchUsersApi";

const getUserService = async () => {
  const users = await fetchUsersApi.fetchUsers();
  return users;
};

export default getUserService;
