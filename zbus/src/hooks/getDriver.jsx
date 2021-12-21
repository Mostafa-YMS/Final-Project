import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
// //////////////////////not used////////////////////////////

export const useGetDriver = () => {
  const apiContext = useContext(ApiContext);

  return async () => {
    const { data } = await apiContext.get("mapapi/get/");
    return data;
  };
};
// mapapi/post/ for post
// mapapi/get/  get all busses
// /mapapi/detial/busname/ get bus with name
