import { useContext, useRef, useState } from "react";
import { createContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const focusAmount = useRef(null);
  const focusName = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const [parties, setParties] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [isDisable, setIsDisable] = useState(false);
  const [spin, setSpin] = useState(false);

  const [error, setError] = useState(null);
  const [party, setParty] = useState({
    name: null,
    phone: null,
    address: null,
    photo: null,
  });

  const [transaction, setTransaction] = useState({
    amount: null,
    drcr: null,
    description: null,
    party: null,
  });

  const getDrSum = (drAmounts) => {
    let sum = 0;
    drAmounts.forEach((drAmount) => {
      sum += drAmount;
    });
    return sum;
  };
  const getCrSum = (crAmounts) => {
    let sum = 0;
    crAmounts.forEach((crAmount) => {
      sum += crAmount;
    });
    return sum;
  };

  const updatePartyAmountState = (data, drcr) => {
    console.log("I am Update AMOUNT Party");

    const updatedParty = parties.map((party, index) => {
      if (party._id === data._id) {
        if (drcr === "DR") {
          return { ...party, drAmounts: data.drAmounts };
        } else {
          return { ...party, crAmounts: data.crAmounts };
        }
      }
      return party;
    });
    setParties(updatedParty);
  };

  const updatePartyState = (res) => {
    console.log("I am Update Party");

    const updatedParty = [...parties, res];
    setParties(updatedParty);
  };

  const updateEditPartyState = (res) => {
    const updatedParty = parties.map((party, index) => {
      if (party._id === res._id) return res;

      return party;
    });
    setParties(updatedParty);
  };

  return (
    <StoreContext.Provider
      value={{
        transactions,
        focusAmount,
        transaction,
        focusName,
        isDisable,
        location,
        parties,
        party,
        error,
        spin,
        setSpin,
        navigate,
        setError,
        setParty,
        getCrSum,
        getDrSum,
        setParties,
        setIsDisable,
        setTransaction,
        setTransactions,
        updatePartyState,
        updateEditPartyState,
        updatePartyAmountState,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
export const useStore = () => {
  return useContext(StoreContext);
};
