import React, { createContext } from "react";
import { getAuth, signInWithPopup } from 'firebase/auth';
import app from "../../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const user = { displayName: "Munir" };
    const singInWithGoogle = (provider) => {
        return signInWithPopup(auth, provider);
    }
  const userInfo = { user, singInWithGoogle };
  return (
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
