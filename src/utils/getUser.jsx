import decodeToken from "@/utils/auth";

const getUser = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = decodeToken(token);
      return decoded.username;
    }
  }
  return null;
};

export default getUser;
