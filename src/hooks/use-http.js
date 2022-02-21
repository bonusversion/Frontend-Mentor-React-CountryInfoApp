import { useCallback, useReducer } from "react";
import { useContext } from "react";
import { ModeContext } from "../store/mode-context";

const httpReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      status: "pend",
      data: null,
      error: null,
    };
  }
  if (action.type === "SUCCESS") {
    return {
      status: "completed",
      data: action.data,
      error: null,
    };
  }
  if (action.type === "ERROR") {
    return {
      status: "completed",
      data: null,
      error: action.errorMessage,
    };
  }
  return {
    status: "pend",
    data: null,
    error: null,
  };
};

const useHttp = (url) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: "pend",
    data: null,
    error: null,
  });

  const sendRequest = useCallback(async () => {
    dispatch({ type: "SEND" });

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      dispatch({ type: "SUCCESS", data });
    } catch (error) {
      dispatch({ type: "ERROR", errorMessage: error.message });
      alert(error.message);
    }
  }, [url]);

  return {
    sendRequest,
    ...httpState,
  };
};

export default useHttp;
