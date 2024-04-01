import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTransaction } from "../../services/transactionsService";
import { useStore } from "../../utils/store";
import { MdAdd, MdDelete, MdDoDisturb, MdEdit, MdPhone } from "react-icons/md";

export function Transactions() {
  const {
    navigate,
    setTransactions,
    transactions,
    location,
    getCrSum,
    getDrSum,
    parties,
  } = useStore();
  const param = useParams();
  const [indexParty, setIndexParty] = useState(null);
  const handleAddTransaction = () => {
    navigate("/add_transaction", { state: param });
  };
  useEffect(() => {
    console.log(param.id);
    const stateFromParty = location.state;
    console.log(stateFromParty);

    let currentStateIndex;
    parties.map((state, index) => {
      if (state._id === stateFromParty._id) return (currentStateIndex = index);
    });
    console.log(parties, currentStateIndex);
    setIndexParty((p) => currentStateIndex);

    console.log(parties[currentStateIndex]);

    async function transactionService() {
      const res: any = await getTransaction(param.id);
      setTransactions(res.data);
    }
    transactionService();
    console.log(transactions);
  }, []);

  return (
    <div className="">
      <div className="bg-gray-800 text-white p-10">
        <div className="flex justify-between">
          <span className="uppercase text-lg font-bold">Transaction</span>
          <button
            className="bg-blue-400 text-gray-900 p-2 px-4 rounded flex justify-end"
            onClick={() => handleAddTransaction()}
          >
            <MdAdd className="size-6" />
          </button>
        </div>
        <div className="flex space-x-4">
          <img
            className="w-20 h-20 rounded-lg"
            src={parties[indexParty]?.photo}
            alt={parties[indexParty]?.name}
          />
          <div>
            <span className="text-3xl">{parties[indexParty]?.name}</span>

            <div className="flex space-x-3 text-xl">
              <div className="text-green-700">
                Rs {console.log(parties[indexParty])}
                {indexParty !== undefined
                  ? parties.length !== 0
                    ? parties[indexParty]
                      ? getCrSum(parties[indexParty].crAmounts)
                      : ""
                    : ""
                  : ""}
              </div>
              <div className="text-red-700">
                Rs{" "}
                {indexParty !== undefined
                  ? parties.length !== 0
                    ? parties[indexParty]
                      ? getDrSum(parties[indexParty].drAmounts)
                      : ""
                    : ""
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className="w-full dark:divide-gray-700">
        {transactions.length ? (
          transactions.map((item, index) => (
            <li
              key={index}
              className={`px-10 py-3 ${
                item.drcr == "DR" ? "bg-red-400" : "bg-green-500"
              }  justify-center text-4xl`}
            >
              <div className="flex items-center w-full justify-between">
                <p className="text-sm font-medium text-gray-900 truncate ">
                  {index + 1}
                </p>
                <p className="text-sm font-medium text-gray-900 truncate ">
                  {item.createdAt}
                </p>
                <p className="text-sm font-medium text-gray-900 truncate ">
                  {"Rs"} {item.drcr == "DR" ? "-" : ""}
                  {""}
                  {item.amount}
                </p>
                <p className="text-sm font-medium text-gray-900 truncate ">
                  {item.description}
                </p>
                <div>
                  <button className="rounded bg-blue-400 px-3 py-1 text-gray-900 ">
                    <MdEdit className="size-6" />
                  </button>
                  <button className=" ml-2 rounded bg-red-700 px-3 py-1 text-gray-900 ">
                    <MdDelete className="size-6" />
                  </button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <div className="flex h-96 items-center justify-center">
            <p className="font-black text-gray-600 text-2xl">
              No Data Found ! Add new data
            </p>
          </div>
        )}
      </ul>
    </div>
  );
}
