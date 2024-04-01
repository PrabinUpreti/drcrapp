import React, { useEffect, useRef, useState } from "react";
import { PartyForm } from "../../components/PartyForm";
import { useLocation, useNavigate } from "react-router-dom";
import { validateParty } from "../../utils/validation";

export const EditTransaction = () => {
  const location = useLocation();
  const focusName = useRef(null);
  const navigate = useNavigate();
  const [isDisable, setIsDisable] = useState(false);
  const [error, setError] = useState(null);
  const [party, setParty] = useState({
    name: null,
    phone: null,
    address: null,
    photo: null,
  });

  useEffect(() => {
    const currentParty = location.state;
    setParty(currentParty);
    focusName.current.focus();
  }, []);

  const handleParty = async (e) => {
    e.preventDefault();
    setIsDisable(true);
    const validParty = validateParty(party);
    console.log(validParty);

    if (!validParty) {
      setIsDisable(false);
      setError("Input nvalid, refill the form");
      return;
    }
    setError(null);
    // const response = await updatePartyRequest(party);
    console.log("Updated");
    navigate(-1);
    setIsDisable(false);
  };
  return (
    <PartyForm
      type="editParty"
      party={party}
      error={error}
      focusName={focusName}
      handleParty={handleParty}
      setParty={setParty}
      isDisable={isDisable}
    />
  );
};
