import { useEffect, useState } from "react";
import updateOneUser from "../../api/Authentication/UpdateUser";
import notify from "../../Uitily/Use-Notificatation";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getOneUser from "../../api/Authentication/GetUserById";

const UpdateUserHook = (id) => {
  const navigate = useNavigate();

  const oneUser = useSelector((state) => state.getOneUserData.user);
  const isLoading = useSelector((state) => state.updatUserData.isLoading);
  const updateUser = useSelector((state) => state.updatUserData.updateUser);

  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [number, setNumber] = useState("");

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeOldPassword = (e) => {
    setOldPassword(e.target.value);
  };
  const onChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const validationValues = () => {
    if (firstName === "") {
      notify("من فضلك ادخل الاسم الاول", "error");
      return;
    }
    if (lastName === "") {
      notify("من فضلك ادخل اسم العائله", "error");
      return;
    }
    if (userName === "") {
      notify("من فضلك ادخل اسم المستخدم", "error");
      return;
    }
    if (email === "") {
      notify("من فضلك ادخل الاميل ", "error");
      return;
    }
    if (password === "") {
      notify("من فضلك ادخل كلمة السر ", "error");
      return;
    }
    if (oldPassword === "") {
      notify("من فضلك ادخل كلمة السر ", "error");
      return;
    }
    if (number === "") {
      notify("من فضلك ادخل رقم الهاتف ", "error");
      return;
    }
  };

  const onSubmitUpdate = async () => {
    if (validationValues()) return;

    try {
      await dispatch(
        updateOneUser({
          id,
          data: {
            id,
            firstName,
            lastName,
            userName,
            email,
            password,
            oldPassword,
            contact: number,
          },
        })
      );

      console.log({
        data: {
          id,
          firstName,
          lastName,
          userName,
          email,
          password,
          oldPassword,
          contact: number,
        },
      });
    } catch (error) {
      notify("حدث خطأ أثناء التسجيل", "error");
    }
  };

  // useEffect(() => {
  //   if (updateUser?.user && updateUser.user.isAuthenticated === true) {
  //     notify("Data edit successfully", "success");
  //     console.log(updateUser.user.isAuthenticated);
  //     setTimeout(() => {
  //       navigate(`/user/${id}`);
  //     }, 2000);
  //   } else if (updateUser?.error) {
  //     notify("something wrong heppend please try again later", "error");
  //     console.log(updateUser.error);
  //   }
  // }, [updateUser, navigate, id]);

  useEffect(() => {
    const run = async () => {
      await dispatch(getOneUser(id));
    };
    run();
  }, [dispatch, id]);

  useEffect(() => {
    if (oneUser) {
      setFirstName(oneUser.firstName);
      setLastName(oneUser.lastName);
      setUserName(oneUser.userName);
      setEmail(oneUser.email);
      setPassword(oneUser.password);
      setNumber(oneUser.phoneNumber);
      console.log(oneUser);
    }
  }, []);

  return [
    onSubmitUpdate,
    firstName,
    lastName,
    userName,
    email,
    password,
    oldPassword,
    number,
    onChangeFirstName,
    onChangeLastName,
    onChangeUserName,
    onChangeEmail,
    onChangePassword,
    onChangeOldPassword,
    onChangeNumber,
    isLoading
  ];
};

export default UpdateUserHook;
