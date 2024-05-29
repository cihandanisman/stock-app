import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import {
  fetchStart,
  fetchFail,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
} from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAxios from "./useAxios";

const useApiRequest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { axiosToken, axiosPublic } = useAxios();
  // const { token } = useSelector((state) => state.auth);
  const login = async (userData) => {
    //   const BASE_URL = "https://10103.fullstack.clarusway.com";
    dispatch(fetchStart());

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        userData
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("Successfully logged in");
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Failed logged in");
      console.log(error);
    }
  };
  const register = async (userInfo) => {
    dispatch(fetchStart());

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users`,
        userInfo
      );
      dispatch(registerSuccess(data));
      toastSuccessNotify("Successfully logged in");
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const logout = async () => {
    dispatch(fetchStart());

    try {
      await axiosToken.get("/auth/logout");
      // await axios(`${process.env.REACT_APP_BASE_URL}/auth/logout`, {
      //   headers: { Authorization: `Token ${token}` },
      // } );
      dispatch(logoutSuccess());

      // navigate("/")
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { login, register, logout };
};

export default useApiRequest;
