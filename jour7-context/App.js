import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Formulaire from './composant/Formulaire';
import Profil from './composant/Profil';

export default function App() {
  return (
    <View style={styles.container}>
      {/** Formulaire ET Profil composants frères */}
      <Formulaire />
      <Profil />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
