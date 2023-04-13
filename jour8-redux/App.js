import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import A from './composant/A';
import B from './composant/B';
import Exo from './composant/Exo';

export default function App() {
  return (
    <View style={styles.container}>
      <Exo />
      <A />
      <B />
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
});
