// composant racine (root) de notre projet
// divisé en 3 parties 
// import importer des fonctionnalités qui sont stockées dans le dossier node_modules
// React Native utilise le système de module ES6 
//  il n'y a ./ devant les noms des librairies => node_modules  
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// le composant => fonction javascript 
// App() il faut OBLIGATOIREMENT s'appeler App 
// return (
//  pas html  pas du javascript pas xml 
// JSX mix entre html / js et xml 
//)
// HMR => Hot Module Reload react et expo 

import { Bonjour } from "./composants/Bonjour"
import { Exo1 } from "./composants/Exo1"
import { deuxieme as Toto } from "./composants/Deuxieme"
import { Boucle } from './composants/Boucle';

export default function App() {
  return (
    <View style={styles.container}>
      <Bonjour />
      <Toto />
      <Boucle />
      {/* Composant => un peu comme si on crée une balise  */}
      {/* function Bonjour(){} Bonjour() => <Bonjour /> */}
      {/* commentaire en jsx  */}
      <Text>Formation Doranco 2023</Text>
      <Text>groupe CDA</Text>
      <Exo1 />
      <View>
        {[<Text>tutu</Text>, <Text>toto</Text>]}
      </View>
      <View>
        <Text>tutu</Text>
        <Text>toto</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

// facultative 
// permet de mettre en forme le composant 
// pas du css => css à la sauce javascript 
// <Text> => html balise => React Composant 
// <Text> => <p> <h1> <h2> <li>
// <View> => <div>
// <StatusBar> => zone de haut de l'écran 
// <Text>  </Text> composant ouvert et fermant
// <StatusBar style="auto" /> composant orphelin ne pas oublier le / dans le composant 
// <p class="first" >coucou</p> => attribut de la balise p 
// <View style={styles.container}> => style  attribut ou props

// https://reactnative.dev/
// https://github.com/eramudeep/react-native-ecommerce

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
