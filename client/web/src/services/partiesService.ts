import axios from "axios";
const result = {
  status: "",
  data: "",
};
export const getParties = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/userParties", {
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

export const setPartyRequest = async ({ name, phone, address, photo }) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/parties",
      {
        name,
        phone,
        photo,
        address,
      },
      {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      }
    );

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

export const updatePartyRequest = async ({
  name,
  phone,
  address,
  photo,
  id,
}) => {
  try {
    const response = await axios.put(
      `http://localhost:8000/api/parties/${id}`,
      {
        name,
        phone,
        photo,
        address,
      },
      {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      }
    );

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

export const updatePartyAmountRequest = async ({ amount, drcr, party }) => {
  try {
    const response = await axios.put(
      `http://localhost:8000/api/userPartiesAmount/${party}`,
      {
        amount,
        drcr,
      },
      {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      }
    );

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
