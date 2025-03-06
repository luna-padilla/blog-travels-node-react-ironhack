import React, { useState } from "react";
import { createSession } from "../../../api/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await createSession({ email, password });
      console.log("Inicio de sesión exitoso:", response.data);
      // Aquí puedes guardar la información del usuario en el estado global o en el contexto
    } catch (error) {
      console.error("Error al iniciar sesión:", error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Iniciar Sesión</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
