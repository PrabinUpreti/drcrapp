import { useEffect, useRef, useState } from "react";
import { validateTransaction } from "../../utils/validation";
import { setTransactionRequest } from "../../services/transactionsService";
import { useLocation, useNavigate } from "react-router-dom";

import { TransactionForm } from "../../components/TransactionForm";
import { useStore } from "../../utils/store";
import { updatePartyAmountRequest } from "../../services/partiesService";

export const AddTransaction = () => {
  const {
    focusAmount,
    transaction,
    location,
    setTransaction,
    setIsDisable,
    setError,
    navigate,
    isDisable,
    error,
    updatePartyAmountState,
  } = useStore();

  useEffect(() => {
    focusAmount.current.focus();
    setTransaction({ ...transaction, party: location.state.id });
  }, []);

  const handleTransaction = async (e) => {
    e.preventDefault();
    setIsDisable(true);

    const validTransaction = validateTransaction(transaction);
    console.log(validTransaction);

    if (!validTransaction) {
      setIsDisable(false);
      setError("Input nvalid, refill the form");
      return;
    }
    setError(null);
    const response = await setTransactionRequest(transaction);

    const updatedPartyAmount = await updatePartyAmountRequest(transaction);
    if (updatedPartyAmount.status == 200) {
      updatePartyAmountState(updatedPartyAmount.data, transaction.drcr);
    }

    console.log(response);
    navigate(-1);
    setIsDisable(false);
  };
  return (
    <TransactionForm
      type="addTransaction"
      transaction={transaction}
      error={error}
      focusAmount={focusAmount}
      handleTransaction={handleTransaction}
      setTransaction={setTransaction}
      isDisable={isDisable}
    />
  );
};
