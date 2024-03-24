import { useEffect, useState } from "react";
import { getParties } from "../services/partiesService";
import { useNavigate } from "react-router-dom";

export const Parties = () => {
  const [parties, setParties] = useState<any>([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function partyService() {
      const res: any = await getParties();
      setParties(res.data);
    }
    partyService();
  }, []);

  const partyDetails = (id) => {
    navigate(`transaction/${id}`);
  };

  return (
    <div>
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {parties.map((item, index) => {
          return (
            <>
              <li
                onClick={() => {
                  partyDetails(item._id);
                }}
                key={item._id}
                className="pb-3 sm:pb-4"
              >
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={item.photo}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-blue-400">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {item.address}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-black">
                    {item.phone}
                  </div>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};
