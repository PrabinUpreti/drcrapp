import React, { useEffect, useState } from "react";
import axios from "axios";
import { Model } from "./components/Model";

export const Wallet = () => {
  const [wallets, setWallets] = useState([]);

  const editWallet = () => {
    console.log("model");
  };
  useEffect(() => {
    async function fetchWallet() {
      try {
        const response = await axios.get("data/wallets.json");
        setWallets(response.data);

        return response;
      } catch (error: any) {
        console.error("Login error:" + error.response.data);
        console.log("ERROR");
        return "ERROR OCCURE";
      }
    }
    fetchWallet();
  }, []);

  return (
    <>
      {wallets.map((wallet) => (
        <div
          onClick={editWallet}
          className="border-4 flex flex-col cursor-pointer justify-between"
        >
          <div className="flex justify-between text-gray-700 ">
            <span>{wallet.icon}</span>
            <span>{wallet.name}</span>
            <span>|</span>
          </div>
          <div>
            <span>{wallet.currency}</span>
            <span>{wallet.amount}</span>
          </div>
        </div>
      ))}
      <Model />
    </>
  );
};
