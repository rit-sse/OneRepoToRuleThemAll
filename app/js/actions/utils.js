export const createAction = namespace => (type, payload, message) => {
  return {
    type,
    payload,
    error: (payload instanceof Error),
    meta: {
      message,
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
