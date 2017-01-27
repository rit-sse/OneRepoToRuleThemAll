export const createAction = nameSpace => (type, payload) => {
  return {
    type,
    payload,
    error: (payload instanceof Error),
    meta: {
      nameSpace,
    },
  };
};

export const createLoading = nameSpace => (type) => {
  return {
    type,
    meta: {
      nameSpace,
      loading: true,
    },
  };
};
