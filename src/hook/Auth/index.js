import { createContext, useState, useEffect, useContext } from "react";
import { useUsersDatabase} from "../../database/useUsersDatabase"
import { ActivityIndicator, Text, View } from "react-native";

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

const {authUser} = useUsersDatabase();

    useEffect(() => {
        const loadStoragedData = async () => {
            const storagedUser = await AsyncStorage.getItem("@payment:user");
            if (storagedUser) {
                setUser({
                    authenticated: true,
                    user: JSON.parse(userStoraged),
                    role: JSON.parse(userStoraged).role,
                });
            } else {
                setUser({
                    authenticated: false,
                    user: null,
                    role: null,
                });
            }
        };

        loadStoragedData();
    }, []);

    useEffect(() =>{
        console.log("AuthProvider", user);
    }, [user]);

};
    const signIn = async ({email, password}) => {
        const response = await authUser({email, password});
        console.log(response);
        
        if (!response) {
            setUser({
                authenticated: false,
                user: null,
                role: null,
                });
                throw new Error("Usuário ou senha inválidos");
        }   

        await AsyncStorage.setItem("@payment:user", JSON.stringify(response));

        setUser({
            authenticated: true,
            user: response,
            role: response.role,
        });
    };
    const signOut = async () => {
        await AsyncStorage.removeItem("@payment:user");
        setUser({});
    };
    useEffect(() => {
        console.log ("AuthProvider ", user);
    }, [user]);

    if (!loaded && !error) {
        return ( <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={{ fontSize: 28, marginTop: 15}}>
                Carregando Dados do Usuario
            </Text>
            <ActivityIndicator size="large" color="#0000ff" />;
            </View>
            );
    }

    return ( <AuthContext.Provider value={{ user, signIn, signOut}}>
        {children}
        </AuthContext.Provider> 
        );

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
