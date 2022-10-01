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
      gender:'',
      role:'',
      skill:[],
      certification:[]
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
      notification.error({
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
        className="form-log rounded-2"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
      <p className="pb-5 login-hd text-center">Register</p>

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
          {errors.taiKhoan && <p>{errors.taiKhoan.message}</p>}
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
          {errors.matKhau && <p>{errors.matKhau.message}</p>}
        </div>

        <div>
          <input
            className="form-control form-register mb-3"
            type="text"
            placeholder="Email"
            {...register("email", {
              required: { value: true, message: "Email không được để trống" },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email không đúng định dạng",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <input
            className="form-control form-register "
            type="text"
            placeholder="Birthday"
            {...register("birthday", {
              required: {
                value: true,
                message: "Ngay sinh không được để trống",
              },
            })}
          />
          {errors.hoTen && <p>{errors.hoTen.message}</p>}
        </div>
        <br />
        <div>
          <input
            className="form-control form-register mb-3"
            type="text"
            placeholder="Phone"
            {...register("phone", {
              required: {
                value: true,
                message: "Số Điện Thoại không được để trống",
              },
            })}
          />
          {errors.soDt && <p>{errors.soDt.message}</p>}
        </div>
        <div>
          <input
            className="form-control form-register mb-3"
            type="text"
            placeholder="Gender"
            {...register("gender", {
              required: {
                value: true,
                message: "Gioo tinh không được để trống",
              },
            })}
          />
          {errors.soDt && <p>{errors.soDt.message}</p>}
        </div>
        <div>
          <input
            className="form-control form-register mb-3"
            type="text"
            placeholder="Role"
            {...register("role", {
              required: {
                value: true,
                message: "Số Điện Thoại không được để trống",
              },
            })}
          />
          {errors.soDt && <p>{errors.soDt.message}</p>}
        </div>
        <br />
        
        <button className="ant-btn-primary">Đăng Ký</button>
      </form>
     
    </div>
  );
};

export default Register;
