import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getOneEvent from '../../api/Events/GetOneEvent';

const GetOneEventByIdHook = (id) => {
 const dispatch = useDispatch();

 const oneEvent = useSelector((state) => state.getOneEventData.event);


useEffect (() => {
    dispatch(getOneEvent(id))
},[id,dispatch])

  let event = [];

if(oneEvent)
    event = oneEvent;
else
event = []
return[event]
  
}

export default GetOneEventByIdHook
