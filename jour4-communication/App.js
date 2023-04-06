import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Premier from './composants/Premier';

export default function App() {

  const liste = [
    { largeur : 10 , hauteur : 40 , unite : "cm"},
    { largeur : 30 , hauteur : 30 , unite : "km"},
    { largeur : 60 , hauteur : 12 , unite : "mm"},
    { largeur : 60 , hauteur : 12 , unite : "mm"},
  ]

  return (
    <View style={styles.container}>
        {/* exécute le composant Premier dans App en lui ajoutant des props
        en html => attribut 
        vous pouvez en mettre autant que nécessaire nommer comme vous voulez */}
       {/*<Premier largeur={10} hauteur="40" unite="cm" />
       <Premier largeur={30} hauteur="30" unite="km" />
       <Premier largeur={60} hauteur="12" unite="mm" />
      <Premier largeur={60} hauteur="12" unite="mm" />*/}
      { liste.map(({largeur, hauteur, unite}, index) => {
        return <Premier 
                  largeur={largeur} 
                  hauteur={hauteur} 
                  unite={unite} 
                  key={index} 
                  />
                  {/** props spéciale qui permet à React Native de distinguer les différents éléments <Premier /> de la liste */}
      }) }
      {/*[<Premier largeur={10} hauteur="40" unite="cm" /> ,<Premier largeur={30} hauteur="30" unite="km" /> , <Premier largeur={60} hauteur="12" unite="mm" /> , <Premier largeur={60} hauteur="12" unite="mm" /> ] */}
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
