import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";


export const useLines = () => {
  const apiContext = useContext(ApiContext);

  return async () => {
    const { data } = await apiContext.get("/lines");
    return data;
  };
};


export const useStops = () => {
  const apiContext = useContext(ApiContext);

  return async () => {
    const { data } = await apiContext.get("/stations");
    return data;
  };
};


export const useCords = () => {
  const apiContext = useContext(ApiContext);

  return async () => {
    const { data } = await apiContext.get("/cords");
    return data;
  };
};
