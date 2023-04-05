import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView } from 'react-native';
import Form from './composant/Form';
import Exo1 from './composant/Exo1';
import Galerie from './composant/Galerie';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Form />
      <Exo1 />
      <Galerie />
      <StatusBar style="auto" />
    </ScrollView>
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
