import React, { useEffect } from "react";
// import useAxios from "../services/useAxios";
import useStockRequest from "../services/useStockRequest";
// const {axiosToken} = useAxios()

// const getFirms = async () => {
//   try {
//     const {data} = axiosToken("/firms ")
//   } catch (error) {
//     console.log(error);
    
//   }
// }

const Firms = () => {
  const { getFirms } = useStockRequest();


  
  useEffect(() => {
    getFirms();
  }, []);
  return <div>Firms</div>;
};

export default Firms;
