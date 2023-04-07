import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

 /*  function texteLong(){
    let texte = '';
    for(let i = 0 ; i < 1000 ; i++){
        texte += "Open up App.js to start working on your app! "
    }
    return texte
  } */

  return (
    <View style={styles.container}>
      {/*<ScrollView>
        <Text>{texteLong()}</Text>
      </ScrollView> */}
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
