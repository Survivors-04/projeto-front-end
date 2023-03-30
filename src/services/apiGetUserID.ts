import api from "./api";

const apiGetUserID = async (userId: string | number) => {
  try {
    const response = await api.get(`users/${userId}`);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default apiGetUserID;
