import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View , Button} from 'react-native';
import Mounted from './composants/Mounted';
import Updated from './composants/Updated';
import { useState } from "react"
import Unmounted from './composants/Unmounted';
import Cocktails from './composants/Cocktails';
import Pays from "./composants/Pays"
export default function App() {

 /*  function texteLong(){
    let texte = '';
    for(let i = 0 ; i < 1000 ; i++){
        texte += "Open up App.js to start working on your app! "
    }
    return texte
  } */
  const [show, setShow] = useState(true);
  return (
    <View style={styles.container}>
      <Pays />
      { false && <Cocktails /> }
      {/*<ScrollView>
        <Text>{texteLong()}</Text>
      </ScrollView> */}
      { false && <>
        <Mounted /> 
        <Updated />
        <View style={{ marginTop : 20 }}>
          <Button onPress={() => {setShow(!show)}} title='show/hide'  />
          { show ? <Unmounted /> : "" }
          {/* show && <Unmounted />  */}
        </View>
      </> }
     
      {/* composant dans lequel on a 
        <TextInput> saisir cocktail
        <Button> 
        <View> => update de la liste 
         <Liste >
      // rdv 13h30 bon appétit 
       => cliquer récupérer le texte saisi input et lancer une requête ajax   */ }
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
