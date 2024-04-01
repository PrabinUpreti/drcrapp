import { useEffect, useRef, useState } from "react";
import { getParties } from "../../services/partiesService";
import { NavLink, useNavigate } from "react-router-dom";
import { useStore } from "../../utils/store";
import { MdAdd, MdDelete, MdDoDisturb, MdEdit, MdPhone } from "react-icons/md";
import React from "react";

export const Parties = () => {
  const { parties, setParties, navigate, getDrSum, getCrSum } = useStore();

  const dr = useRef();
  const cr = useRef();
  useEffect(() => {
    async function partyService() {
      const res: any = await getParties();
      setParties(res.data);
    }

    !parties.length ? partyService() : console.log(parties);
  }, []);

  const partyDetails = (id, party) => {
    navigate(`../transaction/${id}`, { state: party });
  };

  const editPartyHandler = (item) => {
    navigate("/edit_party", { state: item });

    // console.log(item);
  };

  return (
    <div className="w-full  p-4 bg-white border border-gray-200 shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between mb-5">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-3xl font-bold uppercase leading-none text-gray-900 dark:text-white">
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
          className="divide-y flex flex-wrap lg:justify-between sm:justify-around  divide-gray-200 dark:divide-gray-700"
        >
          {parties.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <li className="max-w-lg">
                  <div className="py-5 sm:space-x-5 space-x-40 flex justify-between cursor-pointer">
                    <div
                      onClick={() => {
                        partyDetails(item._id, item);
                      }}
                      className="max-h-36 min-w-36 "
                    >
                      <img
                        className="max-w-36 max-h-36 rounded-xl"
                        src={item.photo}
                        alt={item.name}
                      />
                    </div>
                    <div
                      onClick={() => {
                        partyDetails(item._id, item);
                      }}
                      className=" flex flex-col sm:w-96 max-w-48 space-y-1"
                    >
                      <p className="text-xl font-bold text-gray-900 truncate dark:text-white">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {item.address}
                      </p>
                      <div className="flex space-x-5">
                        <p className="text-red-500 truncate">
                          Dr. {(dr.current = getDrSum(item.drAmounts))}
                        </p>
                        <p className="text-green-500 truncate">
                          Cr. {(cr.current = getCrSum(item.crAmounts))}
                        </p>
                      </div>
                      <p className=" text-white text-2xl font-bold truncate">
                        <span
                          className={`${
                            parseInt(cr.current) - parseInt(dr.current) < 1
                              ? parseInt(cr.current) - parseInt(dr.current) == 0
                                ? "text-white"
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
                    <div className="flex-col  align-middle text-base font-semibold text-gray-900 dark:text-white">
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
  );
};
