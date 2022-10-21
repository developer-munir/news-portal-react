import React, { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import app from "../../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const singInWithGoogle = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const logOut = () => {
    return signOut(auth);
}
    useEffect(() => {
       const unsbuscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
       })
        return () => unsbuscribe();
    },[])
  const userInfo = { user, singInWithGoogle ,logOut};
  return (
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
