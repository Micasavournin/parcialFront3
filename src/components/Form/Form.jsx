import { useState } from "react";
import Card from "../Card/Card";
import styles from "./Form.module.css"

const Form = () => {
    const [formData, setFormData] = useState({
        apodo: "",
        nombreUsuario: ""
    });

    const [errors, setErrors] = useState("");
    const [showCard, setShowCard] = useState(false); 

    const handleInputChange = (event) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value
    });
    };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const apodoRegex = /^\S.{2,}$/; 
    const nombreUsuarioRegex = /^.{6,}$/; 
  
    if (!apodoRegex.test(formData.apodo) || !nombreUsuarioRegex.test(formData.nombreUsuario)) {
      setErrors("Por favor, verificar que la info ingresada sea correcta");
    } else {
      setErrors("");
      setShowCard(true);
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Crea tu apodo!</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="apodo" className={styles.label}>Apodo:</label>
          <input
            type="text"
            id="apodo"
            placeholder="más de 3 caracteres"
            name="apodo"
            value={formData.apodo}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="nombreUsuario" className={styles.label}>Nombre de usuario:</label>
          <input
            type="text"
            id="nombreUsuario"
            placeholder="más de 6 caracteres"
            name="nombreUsuario"
            value={formData.lastName}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.submitButton}>Enviar</button>
      </form>
      {errors && <p className={styles.error}>{errors}</p>}
      {showCard && formData.apodo && formData.nombreUsuario && (
        <Card apodo={formData.apodo} nombreUsuario={formData.nombreUsuario} />
      )}
    </div>
  );
};


export default Form