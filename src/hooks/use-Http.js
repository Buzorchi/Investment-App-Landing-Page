import { useCallback, useReducer } from "react";

const httpReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      status: "pending",
    };
  }

  if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      error: null,
      status: "completed",
    };
  }

  if (action.type === "ERROR") {
    return {
      data: null,
      error: action.errorMessage,
      status: "completed",
    };
  }
  return state;
};

const useHttp = (requestFn, startWithPending = false) => {
  const [httpState, dispatchFn] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : "null",
    data: null,
    error: null,
  });

  const sendRequest = useCallback(async () => {
    dispatchFn({ type: "SEND" });

    try {
      const respondData = await requestFn();
      dispatchFn({ type: "SUCCESS", respondData });
    } catch (error) {
      dispatchFn({
        type: "ERROR",
        errorMessage: error.message || "Something went wrong",
      });
    }
  }, [requestFn]);

  return { sendRequest, ...httpState };
};

export default useHttp;
