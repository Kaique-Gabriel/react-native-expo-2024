import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Alert, BackHandler, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../hook/Auth';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const {signIn, signOut} = useAuth();
  const [email, setEmail] = useState("super@email.com")
  const [password, setPassword] = useState("A123456a!")
  const [ passwordVisibility, setPasswordVisibility] = useState(false)

  const tooglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  }

  const handleEntrarSuper = async () => {
    try {
    await signIn({email , password });
    router.replace("/");
    } catch (error) {
      Alert.alert("Erro", error.message);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicativo Pronto para Usar</Text>
      <View style={styles.inputbox}>
        <Ionicons name="mail-open-outline" size={20} color="black" />
        <TextInput 
        style={styles.emailinput}
        placeholder="E-mail"
        value={email} 
        onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputbox}>
        <Ionicons name="lock-closed-outline" size={20} color="black" />
        <TextInput 
        style={styles.emailinput}
        placeholder="senha"
        value={password} 
        onChangeText={setPassword}
        secureTextEntry={false} 
        />
        <Ionicons 
        name={passwordVisibility ? "eye-off-outline" : "eye-outline" } 
        size={20} 
        color="black" 
        onPress={tooglePasswordVisibility} />
      </View>

      <Button style={styles.button}
      title="Entrar" 
      onPress={handleEntrarSuper} 
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
  inputbox: {
    flexDIrection: "row",
    gap: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: "center",
  },
  emailinput: {
    flex: 1,
    fontFamily: "regular",
    fontSize: 20,
  },
  button: {
    width: "100%"
  }
});
