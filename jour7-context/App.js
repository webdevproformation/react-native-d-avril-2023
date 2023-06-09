import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { ProfilContextProvider } from './contexts/profilContext';
import { SelectionContextProvider } from './contexts/selectionContext';
import Menu from './composant/Menu';

export default function App() {

  return (
    <View style={styles.container}>
      <ProfilContextProvider>
        <SelectionContextProvider>
          <Menu />
        </SelectionContextProvider>
      </ProfilContextProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
