import { Stack, useSegments, router } from "expo-router";
import {AppProvider} from "../hook"
import {useAuth} from "../hook/Auth";
import { useEffect } from "react";


const StackLayout = () => {

    const {user} = useAuth();
    const segments = useSegments();

    useEffect (() => {
        const inAuthGroup = segments[0] === "(protected)";

        if (!user?.autenticated && inAuthGroup) {
            router.replace("/");
        } else {
            if (user?.autenticated){
                router.replace("/(protected)");
            }
        }
    }, [user]); 

    return (
     <Stack>
        <Stack.Screen name = "index" options={{headerShown: false}} />
        <Stack.Screen name = "(protected)" options={{ headerShown: false}}/>
     </Stack>
    );
};
export default function layout() {

     

    return ( <AppProvider>
             <StackLayout />  
            </AppProvider>
    );
}