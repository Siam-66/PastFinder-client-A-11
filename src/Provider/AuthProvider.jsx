import { 
    createContext, 
    useEffect, 
    useState 
} from "react";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut, 
    updateProfile, 
    GoogleAuthProvider, 
    signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
    const auth = getAuth(app);

    const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(user, loading);

    const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
    };

    const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
    setLoading(true);
    return signOut(auth).then(() => setUser(null));
    };

    const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
    };

    const googleSignIn = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
        .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        setLoading(false);
        return loggedUser;
        })
        .catch((error) => {
        console.error("Google Sign-In Error:", error);
        setLoading(false);
        throw error;
        });
    };

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
    });
    return () => unsubscribe();
    }, []);

    const authInfo = {
    user,
    setUser,
    createNewUser,
    userLogin,
    googleSignIn,
    logOut,
    loading,
    updateUserProfile,
    };

    return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;