import React, { useEffect, useRef, useState } from "react";
import { PartyForm } from "../../components/PartyForm";
import { useLocation, useNavigate } from "react-router-dom";
import { validateParty } from "../../utils/validation";
import { updatePartyRequest } from "../../services/partiesService";
import { useStore } from "../../utils/store";

export const EditParty = () => {
  const {
    setParty,
    party,
    focusName,
    setIsDisable,
    setError,
    location,
    error,
    isDisable,
    navigate,
    updateEditPartyState,
  } = useStore();

  // const location = useLocation()
  useEffect(() => {
    const currentParty = location.state;
    console.log(currentParty);

    setParty({
      ...party,
      name: currentParty.name,
      phone: currentParty.phone,
      address: currentParty.address,
      photo: currentParty.photo,
      id: currentParty._id,
    });
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
    const response = await updatePartyRequest(party);
    response.status === 200 ? updateEditPartyState(response.data) : "";

    console.log(response);

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
