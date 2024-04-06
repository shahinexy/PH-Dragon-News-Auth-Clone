import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const authContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user
    const createUser = (email, pass) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    // sign in 
    const userSignIN = (email,  pass) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }
    // log out
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    // save user
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            if(currentUser){
                setUser(currentUser)
                setLoading(false)
            }
            else{
                setUser(null)
                setLoading(false)
            }
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {createUser, userSignIN, user, logOut, loading}
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;