export const removeFeature = feature => {
  return {
    type: "REMOVE_FEATURE",
    payload: feature
  };
};

export const buyFeature = feature => {
  return {
    type: "BUY_FEATURE",
    payload: feature
  };
};
