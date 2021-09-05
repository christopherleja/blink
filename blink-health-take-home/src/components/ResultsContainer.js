import { useHistory } from "react-router";

const ResultsContainer = ({ results }) => {
  const history = useHistory();

  return (
    <div>
      {results.map((res) => {
        const { conceptProperties } = res;
        if (!conceptProperties) return null;
        return conceptProperties.map((cp) => {
          return (
            <div
              key={cp.rxcui}
              className="my-4 border rounded p-2"
              onClick={() => {
                history.push({
                  pathname: `/drugs/${cp.name}`,
                  state: {
                    drug: cp,
                  },
                });
              }}
            >
              <h1>{cp.name}</h1>
            </div>
          );
        });
      })}
    </div>
  );
};

export default ResultsContainer;
