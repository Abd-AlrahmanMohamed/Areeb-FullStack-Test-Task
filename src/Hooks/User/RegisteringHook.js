import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import notify from "../../Uitily/Use-Notificatation";
import RegisteringApi from "../../api/Authentication/RegestringApi";

const ResgisteringHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.registeringData.isLoading);
  const register = useSelector((state) => state.registeringData.register);
  const error = useSelector((state) => state.registeringData.error);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);

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
    if (number === "") {
      notify("من فضلك ادخل رقم الهاتف ", "error");
      return;
    }
  };

  const onSubmitRegister = async () => {
    if (validationValues()) return;

    setLoading(true);
    try {
      const res = await dispatch(
        RegisteringApi({
          firstname: firstName,
          lastname: lastName,
          username: userName,
          email,
          password,
          contact: number,
        })
      );
     console.log({
       firstName,
       lastName,
       userName,
       email,
       password,
       number,
     });
    } catch (error) {
      notify("حدث خطأ أثناء التسجيل", "error");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!isLoading && register.data) {
      localStorage.setItem("token", register.data.token);
      localStorage.setItem("id", register.data.id);
      localStorage.setItem("name", register.data.name);

      notify("تم تسجيل الحساب بنجاح", "success");
      console.log(register);
      // setTimeout(() => {
      //   navigate("/");
      // }, 2000);
      console.log(register);
    } else if (!isLoading && register?.error) {
      notify("حدث خطأ أثناء التسجيل", "error");
      console.log(register.error);
    }
  }, [isLoading]);

  return [
    firstName,
    lastName,
    userName,
    email,
    password,
    number,
    loading,
    onChangeFirstName,
    onChangeLastName,
    onChangeUserName,
    onChangeEmail,
    onChangePassword,
    onChangeNumber,
    onSubmitRegister,
  ];
};

export default ResgisteringHook;
