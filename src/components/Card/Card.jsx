import styles from "./Card.module.css"
const Card = ({ apodo, nombreUsuario }) => {
    return (
      <div className={styles.elemento}>
      <h2>Apodo {apodo}</h2>
      <p>Apodo: {apodo}</p>
      <p>Nombre de usuario: {nombreUsuario}</p>
    </div>
    );
  };

  export default Card