import { useState } from "react";
import { createSession } from "../../../services/api-service";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
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
    <form onSubmit={handleRegister}>
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
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;