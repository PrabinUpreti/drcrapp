import React from "react";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="m-auto text-center mt-80">
      <h1 className="py-10">404 Page Not Found !</h1>
      <button
        onClick={() => navigate(-1)}
        className="px-8 py-4 bg-green-600 rounded-md "
      >
        Back
      </button>
    </div>
  );
};
