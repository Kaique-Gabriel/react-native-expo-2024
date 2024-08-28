import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Drawer} from 'expo-router/drawer';

const DrawerLayout = () => {
    return (
        <GestureHandlerRootView>
            <Drawer />
        </GestureHandlerRootView>
    );
}

export default function Layout(){
    return DrawerLayout();
}
