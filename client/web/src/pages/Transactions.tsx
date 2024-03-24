import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTransaction } from "../services/transactionsService";

function Transactions() {
  const [transactions, setTransactions] = useState({ amount: "", drcr: "" });
  const param = useParams();
  console.log(param);

  useEffect(() => {
    async function transactionService() {
      const res: any = await getTransaction(param.id);
      setTransactions(res.data);
    }
    transactionService();
    console.log(transactions);
  }, []);

  return (
    <div>
      {transactions ? (
        <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
          <li className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-blue-400">
                  {transactions.amount}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {transactions.drcr}
                </p>
              </div>
            </div>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default Transactions;
