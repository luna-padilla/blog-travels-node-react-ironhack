import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Api from "../../../services/api-service";
import { useAuthContext } from "../../../contexts/auth-context";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const { register, handleSubmit, formState, setError } = useForm();
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const errors = formState.errors;
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (user) => {
    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("avatar", user.avatar[0]);

    try {
      await Api.register(formData);
      const data = await Api.login(user);
      login(data);
      navigate("/");
    } catch (error) {
      console.log(error);
      const { data } = error.response;
      Object.keys(data.errors).forEach((inputName) =>
        setError(inputName, { message: data.errors[inputName] })
      );
    }
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="card shadow p-4 rounded">
      <h3 className="text-center text-primary fw-bold">Crear Cuenta</h3>
      <form onSubmit={handleSubmit(handleRegister)}>

        {/* Nombre */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Nombre</label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa fa-user fa-fw"></i>
            </span>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="John Doe"
              {...register("name", { required: "El nombre es obligatorio" })}
            />
          </div>
          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Correo Electrónico</label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa fa-envelope fa-fw"></i>
            </span>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="user@example.org"
              {...register("email", { required: "El correo es obligatorio" })}
            />
          </div>
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Contraseña</label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa fa-lock fa-fw"></i>
            </span>
            <input
              type={showPassword ? "text" : "password"}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="••••••••"
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
          {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
        </div>

        {/* Avatar */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Foto de Perfil</label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa fa-image fa-fw"></i>
            </span>
            <input
              type="file"
              className={`form-control ${errors.avatar ? "is-invalid" : ""}`}
              accept="image/*"
              {...register("avatar")}
              onChange={handleAvatarChange}
            />
          </div>
          {errors.avatar && <div className="invalid-feedback">{errors.avatar.message}</div>}
          {avatarPreview && (
            <div className="text-center mt-2">
              <img src={avatarPreview} alt="Avatar Preview" className="rounded-circle" width={80} />
            </div>
          )}
        </div>

        {/* Botón de Registro */}
        <div className="d-grid">
          <button className="btn btn-primary" type="submit">
            Registrarse
          </button>
        </div>
      </form>

      {/* Opción para iniciar sesión */}
      <div className="text-center mt-3">
        <p className="mb-0">
          ¿Ya tienes cuenta?{" "}
          <a href="/login" className="text-decoration-none text-primary">
            Inicia sesión aquí
          </a>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;
