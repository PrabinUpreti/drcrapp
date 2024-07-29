import { useEffect, useRef, useState } from "react";
import { getParties } from "../../services/partiesService";
import { NavLink, useNavigate } from "react-router-dom";
import { useStore } from "../../utils/store";
import { MdAdd, MdDelete, MdDoDisturb, MdEdit, MdPhone } from "react-icons/md";
import React from "react";
import { Spinner } from "../../components/Spinner";

export const Parties = () => {
  const { parties, setParties, navigate, getDrSum, getCrSum, spin, setSpin } =
    useStore();

  const dr = useRef();
  const cr = useRef();
  useEffect(() => {
    setSpin(true);
    async function partyService() {
      const res: any = await getParties();
      setParties(res.data);
      setSpin(false);
    }

    !parties.length ? partyService() : setSpin(false);
  }, []);

  const partyDetails = (id, party) => {
    navigate(`../transaction/${id}`, { state: party });
  };

  const editPartyHandler = (item) => {
    navigate("/edit_party", { state: item });

    // console.log(item);
  };

  return !spin ? (
    <div className="w-full p-4 sm:p-8">
      <div className="flex justify-between mb-5">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-3xl font-bold uppercase leading-none text-gray-900">
            Parties
          </h5>
        </div>
        <div>
          <button
            className="bg-blue-400 p-2 px-4 rounded flex justify-end font-medium uppercase"
            onClick={() => navigate("/add_party")}
          >
            <MdAdd />
          </button>
        </div>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className=" flex flex-wrap justify-center max-w-full divide-gray-200"
        >
          {parties.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <li className="max-w-full">
                  <div className="p-5 space-x-3 flex justify-between md:justify-start cursor-pointer  shadow-md rounded-lg ">
                    <div
                      onClick={() => {
                        partyDetails(item._id, item);
                      }}
                      className="max-h-24 min-w-24 self-center "
                    >
                      <img
                        className="h-24 rounded-xl"
                        src={item.photo}
                        alt="Img"
                      />
                    </div>
                    <div
                      onClick={() => {
                        partyDetails(item._id, item);
                      }}
                      className=" flex flex-col w-36 justify-center space-y-0"
                    >
                      <p className="text-xl font-bold text-gray-900 truncate">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {item.address}
                      </p>
                      <div className="flex space-x-3">
                        <p className="text-red-500 truncate text-sm">
                          Dr. {(dr.current = getDrSum(item.drAmounts))}
                        </p>
                        <p className="text-green-500 truncate text-sm">
                          Cr. {(cr.current = getCrSum(item.crAmounts))}
                        </p>
                      </div>
                      <p className=" text-white text-xl font-bold truncate">
                        <span
                          className={`${
                            parseInt(cr.current) - parseInt(dr.current) < 1
                              ? parseInt(cr.current) - parseInt(dr.current) == 0
                                ? "text-gray-700"
                                : "text-red-500"
                              : " text-green-500"
                          }`}
                        >
                          Rs{" "}
                          {Math.abs(
                            parseInt(cr.current) - parseInt(dr.current)
                          )}
                        </span>
                      </p>
                    </div>
                    <div className=" flex flex-col justify-center max-w-32 space-y-1 text-base font-semibold text-gray-900">
                      <div>
                        <p className="flex">
                          <MdPhone className="size-6" />
                          <span className="text-base pl-2 truncate">
                            {item.phone}
                          </span>
                        </p>
                      </div>
                      <div className=" flex flex-col mt-4 space-y-2">
                        <button
                          onClick={() => editPartyHandler(item)}
                          className="ml-3 bg-blue-400 rounded px-3 py-1 self-end  text-gray-900"
                        >
                          <MdEdit className="size-6" />
                        </button>
                        <button
                          // to={"/delete_party"}
                          className=" ml-3 bg-red-500 rounded px-3 py-1 self-end text-gray-900"
                        >
                          <MdDelete className="size-6 items-center" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};
