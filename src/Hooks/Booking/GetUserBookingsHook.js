import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getUserBookings from '../../api/Bookings/GetUserBookings';

const GetUserBookingsHook = (id) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.getUserBookingsData.isLoading);
  const getAllUserBookings = useSelector(
    (state) => state.getUserBookingsData.userBookings
  );
  const error = useSelector((state) => state.getUserBookingsData.error);


  useEffect(() => {
    // const token = localStorage.getItem("token");
    dispatch(getUserBookings(id));
    console.log(getAllUserBookings);
  }, [dispatch,id]);

 
  return [isLoading, getAllUserBookings, error];
}

export default GetUserBookingsHook
