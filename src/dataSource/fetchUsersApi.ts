import axios from "axios";

const BASE_URL = "https://mockend.com/juunegreiros/BE-test-api/";

async function fetchUsers() {
  try {
    const response = await axios.get(`${BASE_URL}users`);
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function fetchUserForId(userId: string) {
  try {
    const response = await axios.get(`${BASE_URL}users/${userId}`);
    const { data } = response;
    return data;
  } catch (AxiosError) {
    console.error(AxiosError);
  }
}

export default {
  fetchUsers,
  fetchUserForId,
};
