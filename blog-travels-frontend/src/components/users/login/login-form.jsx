import { useState } from "react";
import { useForm } from "react-hook-form";
import * as IronBriteAPI from "../../../services/api-service";
import { useAuthContext } from "../../../contexts/auth-context";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (user) => {
    try {
      user = await IronBriteAPI.login(user);
      login(user);
      navigate("/");
    } catch (error) {
      if (error.response?.status === 401) {
        const { data } = error.response;
        Object.keys(data.errors).forEach((inputName) =>
          setError(inputName, { message: data.errors[inputName] })
        );
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="card shadow p-4 rounded mx-auto mt-5" style={{width: `700px`}}>
      <h3 className="text-center text-primary fw-bold">Log in</h3>
      <form onSubmit={handleSubmit(handleLogin)} data-testid="login-form">
        {/* Email */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa fa-user fa-fw"></i>
            </span>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="user@example.org"
              data-testid="email-input"
              {...register("email", { required: "El correo es obligatorio" })}
            />
          </div>
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Password</label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa fa-lock fa-fw"></i>
            </span>
            <input
              type={showPassword ? "text" : "password"}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="••••••••"
              data-testid="password-input"
              {...register("password", { required: "La contraseña es obligatoria" })}
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
            </button>
          </div>
          {errors.password && (
            <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>

        {/* Recuérdame y Olvidé mi contraseña */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <a href="/forgot-password" className="text-decoration-none text-primary">
          Forgot password?
          </a>
        </div>

        {/* Botón de Login */}
        <div className="d-grid">
          <button className="btn btn-primary" type="submit">
            Log in
          </button>
        </div>
      </form>

      {/* Opción de registro */}
      <div className="text-center mt-3">
        <p className="mb-0">
        Register now{" "}
          <a href="/register" className="text-decoration-none text-primary">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;