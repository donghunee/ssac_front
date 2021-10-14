import { useState } from "react";
import AuthContext from "../AuthContext";

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    vachine: "",
    gender: "",
    type: "",
    degree: 0,
    imgURL: "",
  });

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
