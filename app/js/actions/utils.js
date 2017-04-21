export const createAction = namespace => (type, payload, message, ignore = false) => {
  return {
    type,
    payload,
    error: (payload instanceof Error),
    meta: {
      ignore,
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
