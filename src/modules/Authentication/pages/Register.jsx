import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import authAPI from "../../../apis/authAPI";
import useRequest from "../../../hook/useRequest";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: null,
      role: "USER",
      skill: ["HTML"],
      certification: ["TOEIC"],
    },
    mode: "onTouched",
  });
  const navigate = useNavigate();

  const { data: handleRegister, isLoading } = useRequest(
    (values) => authAPI.register(values),
    { isManual: true }
  );

  const onSubmit = async (values) => {
    try {
      await handleRegister(values);
      navigate("/login");
      notification.success({
        message: "Đăng ký thành công",
      });
    } catch (error) {
      notification.error({
        message: "Đăng ký thất bại",
        description: error,
      });
    }
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <div className="log">
      <form
        className="form-reg rounded-2"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <p className="pb-5 login-hd text-center">Register</p>

        <div className="d-flex">
          <div className="col-6 p-3">
            <div>
              <input
                className="form-control form-register mb-3"
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Tài khoản không được để trống",
                  },
                  minLength: {
                    value: 5,
                    message: "Tài khoản phải từ 5 đến 20 ký tự",
                  },
                  maxLength: {
                    value: 20,
                    message: "Tài khoản phải từ 5 đến 20 ký tự",
                  },
                })}
              />
              {errors.name && (
                <p className="pb-3" style={{ color: "red" }}>
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <input
                className="form-control form-register mb-3"
                type="text"
                placeholder="Password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Mật khẩu không được để trống",
                  },
                })}
              />
              {errors.password && (
                <p className="pb-3" style={{ color: "red" }}>
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <input
                className="form-control form-register mb-3"
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email không được để trống",
                  },
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Email không đúng định dạng",
                  },
                })}
              />
              {errors.email && (
                <p className="pb-3" style={{ color: "red" }}>
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="col-6 p-3">
            <div>
              <input
                className="form-control form-register mb-3"
                type="text"
                placeholder="Birthday"
                {...register("birthday", {
                  required: {
                    value: true,
                    message: "Ngày sinh không được để trống",
                  },
                })}
              />
              {errors.birthday && (
                <p className="pb-3" style={{ color: "red" }}>
                  {errors.birthday.message}
                </p>
              )}
            </div>

            <div>
              <input
                className="form-control form-register mb-3"
                type="text"
                placeholder="Phone"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Số điện thoại không được để trống",
                  },
                })}
              />
              {errors.phone && (
                <p className="pb-3" style={{ color: "red" }}>
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
             
              <select className="form-selected form-register mb-3" {...register("gender", {
                  required: {
                    value: true,
                    message: "Vui lòng chọn giới tính",
                  },
                })} >
                <option selected >Select Gender</option>
                <option value="true" >Male</option>
                <option value="false" >Female</option>
              </select>
              {errors.gender && (
                <p className="pb-3" style={{ color: "red" }}>
                  {errors.gender.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <button className="ant-btn-primary">Đăng Ký</button>
      </form>
    </div>
  );
};

export default Register;
