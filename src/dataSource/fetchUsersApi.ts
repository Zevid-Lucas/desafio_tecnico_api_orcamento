import axios from "axios";

const BASE_URL = "https://mockend.com/juunegreiros/BE-test-api/";

const fetchUsers = async () => {
  const response = await axios.get(`${BASE_URL}users`);
  const { data } = response;
  return data;
};

const fetchUserForId = async (userId: string) => {
  const response = await axios.get(`${BASE_URL}users/${userId}`);
  const { data } = response;
  return data;
};

export default {
  fetchUsers,
  fetchUserForId,
};
