import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './composant/Form';
import Exo1 from './composant/Exo1';

export default function App() {
  return (
    <View style={styles.container}>
      <Form />
      <Exo1 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop : 25
  },
});

// rdv 15H30 bon café @ toute suite !!
