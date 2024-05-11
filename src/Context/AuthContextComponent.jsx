import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
export default function AuthContextComponent({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();


// create user
const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

// log in
const userLogIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

// log out
const logOut =() => {
    return signOut(auth)
}

useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth, (currentUser)=>{
        console.log(currentUser)
        setUser(currentUser)
        setLoading(false)
        return () => {
            unSubscribe()
        }

    })
},[])

// google sign
const googleSignIn =() => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}

// update user profile
const userUpdateProfile = (name, photo) =>{
    return updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: photo,


       })

 }





  const authInfo = { user, loading, createUser, userLogIn, logOut, googleSignIn, setLoading, userUpdateProfile, setUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
