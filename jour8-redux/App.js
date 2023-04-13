import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import A from './composant/A';
import B from './composant/B';
import Exo from './composant/Exo';
import Exo2 from './composant/Exo2';
import { ExoContextProvider } from './contexts/exoContext';
import { Provider } from 'react-redux';
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <ExoContextProvider>
        <View style={styles.container}>
          <Exo2 />
          {false && <>
            <Exo />
            <A />
            <B />
          </>}
          <StatusBar style="auto" />
        </View>
      </ExoContextProvider>
    </Provider>
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
