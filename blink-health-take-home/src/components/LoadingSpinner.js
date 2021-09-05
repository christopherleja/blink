import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingSpinner = ({ loading }) => {
  return (
    <div className="w-full flex justify-center my-4">
      <ClipLoader
        color="black"
        css="mx-auto my-40 self-center"
        loading={loading}
      />
    </div>
  );
};

export default LoadingSpinner;
