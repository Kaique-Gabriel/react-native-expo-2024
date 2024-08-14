import { createContext } from "react";
import { ActivityIndicator } from "react-native";

const FontContext = React.createContext({});

export function FontProvider({ children }) {

    const [loaded, error] = useFonts({
        regular: require("../../assets/fonts/Montserrat-Regular.ttf"),
        bold: require("../../assets/fonts/Montserrat-Bold.ttf"),
        black: require("../../assets/fonts/Montserrat-Black.ttf"),
        semibold: require("../../assets/fonts/Montserrat-SemiBold.ttf"),
        light: require("../../assets/fonts/Montserrat-Light.ttf"),
        Medium: require("../../assets/fonts/Montserrat-Medium.ttf"),
        thin: require("../../assets/fonts/Montserrat-Thin.ttf"),
        extralight: require("../../assets/fonts/Montserrat-ExtraLight.ttf"),
        italic: require("../../assets/fonts/Montserrat-Italic.ttf"),
        boldItalic: require("../../assets/fonts/Montserrat-BoldItalic.ttf"),
        blackItalic: require("../../assets/fonts/Montserrat-BlackItalic.ttf"),
    });
    if (!loaded && !error) {
        return ( <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={{ fontSize: 28, marginTop: 15}}>
                Carregando as fontes
            </Text>
            <ActivityIndicator size="large" color="#0000ff" />;
            </View>
            );
    }
    return <FontContext.Provider value= {{loaded}}>{children}</FontContext.Provider>;
}


export function useFont() {
    const context = useContext(FontContext);
    if (!context) {
        throw new Error("useFont must be used within a FontProvider");
    }
    return context;
}
