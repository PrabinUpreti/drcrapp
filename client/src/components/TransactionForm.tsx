export const TransactionForm = (props) => {
  console.log(props);

  let {
    type,
    handleTransaction,
    focusAmount,
    transaction,
    setTransaction,
    error,
    isDisable,
  } = props;
  return (
    <form onSubmit={handleTransaction} className="w-full max-w-xl m-auto mt-10">
      <div className="-px-3 mb-6">
        <div className="w-full px-3  mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="Amount"
          >
            Amount
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="name"
            type="number"
            ref={focusAmount}
            placeholder="Amount"
            value={transaction.amount || ""}
            onChange={(e) =>
              setTransaction({ ...transaction, amount: e.target.value })
            }
          />
        </div>

        <div className="w-full px-3  mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="Amount"
          >
            Description
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="name"
            type="text"
            placeholder="Description"
            value={transaction.description || ""}
            onChange={(e) =>
              setTransaction({ ...transaction, description: e.target.value })
            }
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-blue-500 h-5 w-5"
                name="transactionType"
                value="DR"
                onChange={(e) =>
                  setTransaction({ ...transaction, drcr: e.target.value })
                }
              />
              <span className="ml-2">DR</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-blue-500 h-5 w-5"
                name="transactionType"
                value="CR"
                onChange={(e) =>
                  setTransaction({ ...transaction, drcr: e.target.value })
                }
              />
              <span className="ml-2">CR</span>
            </label>
          </div>
        </div>
      </div>

      <div className="px-3">
        <button
          disabled={isDisable}
          className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md disabled:bg-black"
        >
          {type == "addTransaction" ? "Save" : "Update"}
        </button>
      </div>
    </form>
  );
};
