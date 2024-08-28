import { createContext, useState } from "react";

const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [user, setUser] = useState({});

    const signIn = async (email, password) => {
        setUser({id: 1, name: "usuario 1", email,});
    };
    const signOut = async () => {
        setUser({});
    };

    return ( <AuthContext.Provider value={{ user, signIn, signOut}}>
        {children}
        </AuthContext.Provider> );
};

useEffect(() => {
    console.log ("AuthProvider ", user);
}, [user]);

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}