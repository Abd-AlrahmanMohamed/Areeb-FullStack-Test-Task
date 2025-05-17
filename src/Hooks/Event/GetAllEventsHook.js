import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllEvents from "../../api/Events/GetAllEvents";

const GetAllEventsHook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.getAllEventsData.isLoading);
  const getAll = useSelector((state) => state.getAllEventsData.getEvents);
  const error = useSelector((state) => state.getAllEventsData.error);


  useEffect(() => {
    dispatch(getAllEvents());
    console.log(getAll);
  }, [dispatch, getAll]);

 
  return [isLoading, getAll, error];
};

export default GetAllEventsHook;
