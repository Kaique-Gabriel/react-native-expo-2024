import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { BackHandler, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../hook/Auth';

export default function App() {
  const {signIn, signOut} = useAuth();

  const handleEntrarSuper = async () => {
    try {
    await signIn({email: "super@email.com", password: "A123456a!"});
    router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.container}>Aplicativo Pronto para Usar</Text>
      <Button title="SignIn super" onPress={handleEntrarSuper} />
      <Button 
      title="SignIn admin"
       onPress={()=>
       signIn({email: "adm@email.com", password: "adm123!"})
       } 
      />
      <Button title="SignIn user"
       onPress={()=>
       signIn({email: "user@email.com", password: "user123!"})
       } 
      />
      <Button title="sobre" onPress={()=>	router.push("/about")} />
        <Button title="Sair do aplicativo" 
        onPress={()=> BackHandler.exitApp()} 
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  title: {
    fontFamily: "light",
    fontSize: 20,
  },
});
