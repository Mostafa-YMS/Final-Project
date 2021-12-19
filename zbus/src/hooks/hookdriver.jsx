import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
// import { Driver } from "../components/Driver";
export const useDriver = () => {
  const apiContext = useContext(ApiContext);

  return async (post) => {
    return await apiContext.post("/mapapi/post/", post);
    
  };
};  