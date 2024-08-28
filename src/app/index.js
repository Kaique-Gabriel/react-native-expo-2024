import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const {} = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.container}>Aplicativo Pronto para Usar
      </Text>
      <button title="SignIn" />
      <button title="SignOut" />
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
  },
  title: {
    fontFamily: "light",
    fontSize: 20,
  },
});
