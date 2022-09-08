import api from "./api";

export interface iData {
  email?: string;
  name?: string;
  gold: number;
  id?: string | number;
}

const apiPatchUser = async (userId: string | number, data: iData) => {
  try {
    const response = await api.patch(`/Users/${userId}`, data);

    return response;
  } catch (err) {
    console.log(err);
  }
};

export default apiPatchUser;
