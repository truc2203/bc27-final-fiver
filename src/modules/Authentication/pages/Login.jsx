import { Button, Form, Input, notification } from "antd";
// import authAPI from "apis/authAPI";
// import useRequest from "hooks/useRequest";
import { useForm, Controller } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../slices/authSlice";
import { NavLink } from "react-router-dom";
const Login = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.auth);

  const onSubmit = async (values) => {
    try {
      await dispatch(login(values)).unwrap();
      navigate("/");
      notification.success({
        message: "Đăng nhập thành công",
      });
    } catch (error) {
      notification.error({
        message: "Đăng nhập thất bại",
        description: error,
      });
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="login-col">
            <div className="login-box py-5">
              <div className="login-img d-flex align-items-center justify-content-center"></div>
              <h3 className="text-center mb-0">WELCOME</h3>
              <p className="text-center" style={{ fontSize: "16px" }}>
                Sign in by entering the information below
              </p>
              <Form
                className="rounded-2"
                onFinish={handleSubmit(onSubmit)}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
              >
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Tài khoản không được để trống",
                    },
                  }}
                  render={({ field, fieldState: { error } }) => (
                    <Form.Item
                      label="Email :"
                      validateStatus={error ? "error" : ""}
                      help={error?.message}
                    >
                      <Input type="text" {...field} />
                    </Form.Item>
                  )}
                />

                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Mật khẩu không được để trống",
                    },
                  }}
                  render={({ field, fieldState: { error } }) => (
                    <Form.Item
                      label="Mật khẩu :"
                      validateStatus={error ? "error" : ""}
                      help={error?.message}
                    >
                      <Input type="password" {...field} />
                    </Form.Item>
                  )}
                />

                <Form.Item wrapperCol={{ offset: 2 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={isLoading}
                    loading={isLoading}
                    color="black"
                  >
                    <span className=""> Get Started</span>
                  </Button>
                </Form.Item>
              </Form>
              <div className="w-100 text-center mt-4 text">
              <p className="mb-0">Don't have an account?</p>
              <NavLink style={{fontWeight:'500',color:'#b689b0'}} to="/register">SIGN IN</NavLink>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
