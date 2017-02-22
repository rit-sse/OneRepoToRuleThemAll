export const createAction = namespace => (type, payload) => {
  return {
    type,
    payload,
    error: (payload instanceof Error),
    meta: {
      namespace,
    },
  };
};

export const createLoading = namespace => (type) => {
  return {
    type,
    meta: {
      namespace,
      loading: true,
    },
  };
};
