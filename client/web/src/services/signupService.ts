import axios from "axios";
export const signUpRequest = async (username, email, password) => {
  const result = {
    status: "",
    data: {},
  };
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_END_POINT}/api/users`,
      {
        username,
        email,
        password,
      }
    );
    console.log(response);

    return {
      ...result,
      status: response.status,
      data: response.data,
      token: response.headers["x-auth-token"],
    };
  } catch (error: any) {
    console.error("Login error:" + error.response.data);
    return {
      ...result,
      status: error.response.status,
      data: error.response.data,
    };
  }
};
