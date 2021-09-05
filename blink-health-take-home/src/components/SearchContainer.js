import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { getDrugDetails, getSimilarNames } from "../api";
import ResultsContainer from "./ResultsContainer";
import SuggestionsContainer from "./SuggestionsContainer";
import ClipLoader from "react-spinners/ClipLoader";
import LoadingSpinner from "./LoadingSpinner";

const SearchContainer = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    // to avoid contaminating results with outdated responses
    setSuggestions([]);
    setResults([]);
    setError("");
    setLoading(true);

    const res = await getDrugDetails(query);

    if (res?.conceptGroup) {
      setLoading(false);
      return setResults(res?.conceptGroup);
    } else {
      const res = await getSimilarNames(query);

      setLoading(false);
      return res?.suggestion
        ? setSuggestions(res.suggestion)
        : setError(
            `Sorry, no results found! Please check your spelling and try again!`
          );
    }
  };

  return (
    <div className="w-3/5 mx-auto my-48">
      <form onSubmit={(e) => handleSearch(e)} className="flex">
        <input
          className="border w-full px-2 rounded"
          type="text"
          placeholder="Search for drugs"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="mx-2">
          <FaSearch />
        </button>
      </form>
      <LoadingSpinner loading={loading} />
      <ResultsContainer results={results} />
      {suggestions.length ? (
        <SuggestionsContainer
          setQuery={setQuery}
          query={query}
          suggestions={suggestions}
        />
      ) : (
        error && <h3 className="my-4 text-lg">{error}</h3>
      )}
    </div>
  );
};

export default SearchContainer;
