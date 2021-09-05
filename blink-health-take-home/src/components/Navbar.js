import { useHistory, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const history = useHistory();

  const isSearch = location.pathname === "/drugs/search";
  return (
    <div className="w-full bg-gray-300 h-20 flex justify-evenly items-center">
      <div className="w-2/5 mx-4" onClick={() => history.push(`/drugs/search`)}>
        <h2 className="text-xl underline justify-self-start">Blink Takehome</h2>
      </div>

      <h2 className="text-xl underline w-full mx-4">
        {isSearch ? "Drug Search" : "Drug Details"}
      </h2>
    </div>
  );
};

export default Navbar;
