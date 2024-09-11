import {Button, text, view } from'react-native';
import { useAuth } from '../../hook/Auth';

export default function Home() {
    const { signOut } = useAuth();
    
    return ( 
        <view style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home</Text>
        </view>
    );
}