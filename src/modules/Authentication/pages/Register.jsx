import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import authAPI from "../../../apis/authAPI";
import useRequest from "../../../hook/useRequest";
import { DatePicker, Space } from "antd";
import { useState } from "react";

const Register = () => {
  const [pickDate, setPickDate] = useState("");
  const onChange = (date, dateString) => {
    return setPickDate(dateString);
  };
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
      skill: [],
      certification: [],
    },
    mode: "onTouched",
  });
  const navigate = useNavigate();

  const { data: handleRegister, isLoading } = useRequest(
    (values) => authAPI.register(values),
    { isManual: true }
  );

  const onSubmit = async (values) => {
    const newValue = {...values,birthday:pickDate} 
    try {
      await handleRegister(newValue);
      navigate("/login");
      notification.success({
        message: "Đăng ký thành công",
      });
      console.log(newValue);
    } catch (error) {
      notification.error({
        message: "Đăng ký thất bại",
        description: error,
      });
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5"></div>
        </div>
        <div className="row justify-content-center">
          <div className="register-col">
            <div className="login-box py-5">
              <div className="login-img d-flex align-items-center justify-content-center"></div>
              <h3 className="text-center mb-0">Regigter</h3>
              <p className="text-center" style={{ fontSize: "16px" }}>
                Sign in by entering the information below
              </p>
              <form
                className="form-reg rounded-2"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="d-flex flex-column flex-md-row">
                  <div className="col-12 col-md-6 pe-md-3 ">
                    <div>
                      <input
                        className="ant-input mb-3"
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
                        className="ant-input mb-3"
                        type="password"
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
                        className="ant-input mb-3"
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

                  <div className="col-12 col-md-6 ps-md-3">
                    <div>
                      
                      <Space direction="vertical">
                        <DatePicker
                        placeholder="Birthday"
                          className="ant-input mb-3"
                          onChange={onChange}
                        />
                      </Space>
                    </div>

                    <div>
                      <input
                        className="ant-input mb-3"
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
                      <select
                        className="form-selected ant-input mb-3"
                        {...register("gender", {
                          required: {
                            value: true,
                            message: "Vui lòng chọn giới tính",
                          },
                        })}
                      >
                        <option className="jobDetail-gig" value="" selected="">
                          Select Gender
                        </option>
                        <option className="jobDetail-gig" value="true">
                          Male
                        </option>
                        <option className="jobDetail-gig" value="false">
                          Female
                        </option>
                      </select>
                      {errors.gender && (
                        <p className="pb-3" style={{ color: "red" }}>
                          {errors.gender.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <button className="ant-btn-primary mt-3">Regigter</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
