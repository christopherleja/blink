import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getNDCs } from "../api";
import LoadingSpinner from "./LoadingSpinner";

const DrugDetails = () => {
  const location = useLocation();
  const [ndc, setNdc] = useState([]);
  const [loading, setLoading] = useState(false);
  const drug = location?.state?.drug;

  const handleGetNDCs = async () => {
    setLoading(true);
    const res = await getNDCs(drug?.rxcui);

    setNdc(res);
    setLoading(false);
  };

  useEffect(() => {
    handleGetNDCs();
  }, []);

  return (
    <div className="w-3/5 h-3/5 mx-auto my-24">
      <h1 className="text-2xl my-4">{drug?.name}</h1>
      <p className="my-2">id: {drug?.rxcui}</p>
      <p className="my-2">name: {drug?.name}</p>
      <p className="my-2">synonym: {drug?.synonym}</p>

      <LoadingSpinner loading={loading} />
      <h1 className="text-2xl my-4">Associated NDCs</h1>
      {ndc &&
        ndc.map((n, i) => {
          return (
            <p className="my-2">
              {i + 1}. {n}
            </p>
          );
        })}
    </div>
  );
};

export default DrugDetails;
