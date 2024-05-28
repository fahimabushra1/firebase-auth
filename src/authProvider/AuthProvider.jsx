import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider,signInWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";
import { app} from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    };


 const signIn = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
 };

 const logout =()=>{
    return signOut(auth).then(()=>setUser(null));
 }


    const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                setUser(currentUser);
                setLoading(false)
                console.log(currentUser);

            }else{
                setLoading(false);
            }
        })
        return ()=>{
            return unsubscribe();
        }
    }),[];

    const authInfo = {user,loading,createUser,signIn,logout,googleLogin};
    return(
    <AuthContext.Provider 
    value ={authInfo}>{children}
    </AuthContext.Provider>
    )
}

export default AuthProvider;