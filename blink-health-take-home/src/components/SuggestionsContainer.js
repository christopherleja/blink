import React from "react";

const SuggestionsContainer = ({ suggestions, setQuery, query }) => {
  return (
    <div className="border-red-100">
      <h3 className="my-4">Did you mean one of these?</h3>
      {suggestions.map((sug, i) => {
        return (
          <div
            key={sug}
            className="my-4 border rounded p-2"
            onClick={() => setQuery(sug)}
          >
            <p> {sug}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SuggestionsContainer;
