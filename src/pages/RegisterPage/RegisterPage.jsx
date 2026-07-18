import {register} from "../../api/auth";
import {useNavigate} from "react-router-dom";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import styles from "./RegisterPage.module.css";
import { useState } from "react";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    if (!email || !password) {
      setFormError("Por favor, completa todos los campos.");
      return;
    }
    if (password && password !== confirmPassword) {
      setFormError("Las contraseñas no coinciden.");
      return;
    }
    try {
      const userData = await register({ email, password });
      alert(`Usuario creado correctamente, ${userData.email}!`);
      navigate("/login");
    } catch {
      setFormError("Error al registrar usuario. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className={styles.registerPage}>
      <h1 className={styles.title}>Registrarse</h1>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        {formError && <p className={styles.formError}>{formError}</p>}
        <FormInput
          name="email"
          label="Correo Electrónico"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Introduce tu correo electrónico"
        />
        <FormInput
          name="password"
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Introduce tu contraseña"
        />
        <FormInput
          name="confirmPassword"
          label="Confirmar Contraseña"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Repite la contraseña"
        />
        <Button type="submit">Registrarse</Button>
      </form>
    </div>
  );
}

export default RegisterPage;