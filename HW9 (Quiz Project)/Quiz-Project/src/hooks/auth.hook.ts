import { useNavigate } from "react-router";
interface IUser {
  username: string;
  role: "admin" | "user";
}
const useAuth = () => {
  const storeData = (data: { username: string; role: string }, key: string) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const readData = (key: string) => {
    const strData = localStorage.getItem(key);
    return strData ? JSON.parse(strData) : null;
  };

  const navigate = useNavigate();

  const readUser = () => {
    return readData("users") as IUser;
  };

  const login = (username: string, password: string) => {
    if (username.toLowerCase() === "admin" && password === "1234") {
      const user = {
        username,
        role: "admin",
      };
      storeData(user, "users");
      navigate(`/start-quiz`);
    } else if (username.toLowerCase() === "user" && password === "1234") {
      const user = {
        username,
        role: "user",
      };

      storeData(user, "users");
      navigate(`/start-quiz`);
    } else {
      alert("Wrong username or password!");
      localStorage.removeItem("username");
    }
  };

  return {
    login,
    user: readUser(),
  };
};

export default useAuth;
