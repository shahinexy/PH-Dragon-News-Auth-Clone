import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const authContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    // create user
    const createUser = (email, pass) =>{
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    // sign in 
    const userSignIN = (email,  pass) =>{
        return signInWithEmailAndPassword(auth, email, pass)
    }
    // log out
    const logOut = () =>{
        return signOut(auth)
    }
    // save user
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            if(currentUser){
                setUser(currentUser)
            }
            else{
                setUser(null)
            }
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {createUser, userSignIN, user, logOut}
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;