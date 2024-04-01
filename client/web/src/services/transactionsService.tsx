import axios from "axios";
const result = {
  status: "",
  data: "",
};
export const getTransaction = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/transactionOfParty/${id}`,
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

export const setTransactionRequest = async ({
  amount,
  drcr,
  party,
  description,
}) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/transactions",
      {
        amount,
        description,
        drcr,
        party,
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
