import { useEffect, useRef, useState } from "react";
import { validateParty } from "../../utils/validation";
import { setPartyRequest } from "../../services/partiesService";
import { useNavigate } from "react-router-dom";
import { PartyForm } from "../../components/PartyForm";
import { useStore } from "../../utils/store";

export const AddParty = () => {
  const {
    focusName,
    isDisable,
    setIsDisable,
    setError,
    navigate,
    party,
    error,
    setParty,
    updatePartyState,
  } = useStore();

  useEffect(() => {
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
    const response = await setPartyRequest(party);
    response.status === 200
      ? updatePartyState(response.data)
      : console.log("else");
    console.log(response);
    navigate(-1);
    setIsDisable(false);
  };
  return (
    <PartyForm
      type="addParty"
      party={party}
      error={error}
      focusName={focusName}
      handleParty={handleParty}
      setParty={setParty}
      isDisable={isDisable}
    />
  );
};
