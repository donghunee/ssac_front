import { useState } from "react";
import ProfileContext from "../ProfileContext";

const ProfileProvider = ({ children }) => {
  const [profileInfo, setProfleInfo] = useState({
    age: 0,
    gender: "",
    type: "",
    degree: 0,
    imgURL: "",
    inoDate: null,
  });

  return (
    <ProfileContext.Provider
      value={{
        profileInfo,
        setProfleInfo,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
