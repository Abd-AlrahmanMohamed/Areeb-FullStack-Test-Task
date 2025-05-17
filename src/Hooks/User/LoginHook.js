import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "../../Uitily/Use-Notificatation";
import Login from "../../api/Authentication/Login";

const LoginHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.loginData.isLoading);
  const login = useSelector((state) => state.loginData.login);
  const error = useSelector((state) => state.loginData.error);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const validationValues = () => {
    if (email === "") {
      notify("من فضلك ادخل الاميل ", "error");
      return false;
    }
    if (password === "") {
      notify("من فضلك ادخل كلمة السر ", "error");
      return false;
    }
    return true;
  };

  const onSubmitLogin = async () => {
    if (!validationValues()) return;
    console.log("email", email);
    console.log("password", password);

    try {
      const res = await dispatch(
        Login({
          email,
          password,
        })
      );
      console.log( res);


if (res.meta.requestStatus === 'fulfilled') {
  localStorage.setItem("token", res.payload.token);
  localStorage.setItem("roles", JSON.stringify(res.payload.roles.$values));
  localStorage.setItem("id", res.payload.id);
  localStorage.setItem("name", res.payload.name);
  notify("تم تسجيل الدخول بنجاح", "success");
  navigate("/");
} else {
  notify("فشل تسجيل الدخول", "error");
  console.log("Login rejected:", res);
}

      notify("تم تسجيل الدخول بنجاح", "success");
    } catch (err) {
      notify("حدث خطأ أثناء التسجيل", "error");
      console.log(err);
    }
  };


  return [
    email,
    password,
    onChangeEmail,
    onChangePassword,
    isLoading,
    login,
    onSubmitLogin,
  ];
};

export default LoginHook;
