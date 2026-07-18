import {login} from "../../api/auth";
import {useNavigate} from "react-router-dom";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import styles from "./LoginPage.module.css";
import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    if (!email || !password) {
      setFormError("Por favor, completa todos los campos.");
      return;
    }
    try {
      const userData = await login({ email, password });
      alert(`Bienvenido, ${userData.user.email}!`);
      navigate("/");
    } catch {
      setFormError("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className={styles.loginPage}>
      <h1 className={styles.title}>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
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
        <Button type="submit">Iniciar Sesión</Button>
      </form>
    </div>
  );
}

export default LoginPage;