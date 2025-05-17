import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getOneUser from '../../api/Authentication/GetUserById';

const GetOneUserHook = (id) => {
    const dispatch = useDispatch();

 const oneUser = useSelector((state) => state.getOneUserData.user);


useEffect (() => {
    dispatch(getOneUser(id))
},[id,dispatch])

  let user = [];

if(oneUser)
    user = oneUser;
else
user = []
return[user]
}

export default GetOneUserHook
