import { createContext, useEffect, useReducer, useState } from "react";
import AuthReducer from "./AuthReducer";
import { fetchUserProfile } from "../admin/utils/firebaseUtils";

const getInitialState = () => {
  try {
    const savedUser = localStorage.getItem("User");
    return {
      currentUser: savedUser ? JSON.parse(savedUser) : null,
    };
  } catch {
    return { currentUser: null };
  }
};

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, getInitialState());
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    if (state.currentUser) {
      const timeoutId = setTimeout(() => {
        localStorage.setItem("User", JSON.stringify(state.currentUser));
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [state.currentUser]);

  useEffect(() => {
    if (state.currentUser?.uid) {
      fetchUserProfile(state.currentUser.uid)
        .then((data) => setProfileData(data))
        .catch((error) => console.error("Failed to fetch profile:", error));
    }
  }, [state.currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, profileData, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
