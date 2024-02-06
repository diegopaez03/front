import { jwtDecode } from "jwt-decode";

// Aca decodificamos el token
const decodeToken = (token) => {
  try {
    const decoded = jwtDecode(token);
    return ({username: decoded.scientistFound});
  } catch (error) {
    console.error("Error al decodificar el token:", error);
    // Maneja el error apropiadamente, como mostrar un mensaje al usuario
  }
};

export default decodeToken;
