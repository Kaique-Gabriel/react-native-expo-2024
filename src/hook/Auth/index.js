import { createContext, useState, useEffect, useContext } from "react";
import { useUsersDatabase} from "../../database/useUsersDatabase"

const AuthContext = createContext({})

export const Role = {
    SUPER: "super",
    ADMIN: "admin",
    USER: "user"
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState({
      authenticated: null,
      user: null,
      role: null,  
    });

const {authUser} = useUsersDatabase

};
    const signIn = async (email, password) => {
        const response = await authUser({email, password});
        
        if (!response) {
            setUser({
                authenticated: false,
                user: null,
                role: null,
                });
        }   
        setUser({
            authenticated: true,
            user: response,
            role: response.role,
        });
    };
    const signOut = async () => {
        setUser({});
    };

    return ( <AuthContext.Provider value={{ user, signIn, signOut}}>
        {children}
        </AuthContext.Provider> 
        );

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
