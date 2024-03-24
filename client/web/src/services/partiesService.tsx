import axios from "axios";
const result = {
  status: "",
  data: "",
};
export const getParties = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/parties", {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    });

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
