import axios from "axios";
const result = {
  status: "",
  data: "",
};
export const getTransaction = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/transactions/${id}`,
      {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      }
    );
    console.log(response);

    return { ...result, status: response.status, data: response.data };
  } catch (error: any) {
    console.error("Login error:" + error.response.data);
    return {
      ...result,
      status: error.response.status,
      data: error.response.data,
    };
  }
};
