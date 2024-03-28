import axios from "axios";
export const loginRequest = async (email, password) => {
  const result = {
    status: "",
    data: {},
  };
  try {
    const response = await axios.post("http://localhost:8000/api/auth", {
      email,
      password,
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
