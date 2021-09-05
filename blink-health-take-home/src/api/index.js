import axios from "./axios";

export const getDrugDetails = async (name) => {
  try {
    const { data } = await axios(`/drugs.json?name=${name}`);
    const hasData = Object.keys(data?.drugGroup)?.length > 1;

    return hasData ? data?.drugGroup : null;
  } catch (error) {
    console.log("error in getDrugDetails", { error });
  }
};

export const getSimilarNames = async (name) => {
  try {
    const { data } = await axios(`/spellingsuggestions?name=${name}`);

    const suggestions = data?.suggestionGroup?.suggestionList;

    return suggestions;
  } catch (error) {
    console.log({ error });
  }
};

export const getNDCs = async (rxcui) => {
  try {
    const { data } = await axios(`/rxcui/${rxcui}/ndcs`);

    return data?.ndcGroup?.ndcList?.ndc;
  } catch (error) {
    console.log({ error });
  }
};
