import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllUsers from "../../api/Authentication/GetAllUsers";

const GetAllUsersHook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.getAllUsersData.isLoading);
  const getAll = useSelector((state) => state.getAllUsersData.getAllUsers);
  const error = useSelector((state) => state.getAllUsersData.error);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  console.log(getAll);

  return [isLoading, getAll, error];
};

export default GetAllUsersHook;
