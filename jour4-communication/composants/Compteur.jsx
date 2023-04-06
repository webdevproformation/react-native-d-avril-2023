import { Button, StyleSheet, Text, View } from 'react-native'
import React , { useState } from 'react' // récupérer une fonction depuis React
const Compteur = () => {
  // creer notre local State => état local
    const [ nb , setNb ] = useState(0) ;
    // nb => récupérer l'état getter
    // setNb => modifier l'état => setter 
    // useState(0) => retourne toujours un tableau de longueur 2 
    // que l'on destructure [ nb , setNb ]
    // nb => la valeur du state = 0
    // fonction setNb => fonction va permettre de modifier le state (nb)
    // setNb () modifier la valeur du state => nb ET rerender / réexécuter le composant et effectuer update de l'interface graphique
  return (
    <View>
      <Text>Compteur </Text>
      <Text style={{ fontSize : 40 , color : "red"}}>Coucou Jacques André !!</Text>
      <View style={{flexDirection:"row" , alignItems:"baseline"}}>
        <Text style={{ marginRight : 10 }} >{ nb }</Text>
        <Button title="+" onPress={() => { setNb( nb + 1 ) }}  />
      </View>
    </View>
  )
}
export default Compteur
// expo publish

const styles = StyleSheet.create({})
// pour modifier une valeur affichée dans le composant 
// on ne va pas utiliser le DOM => document.querySelector("#id").innerHTML  => NON 
// sur les projets REACT => utilisé le local state => etat local
// ce sont des données qui sont stockées dans le composant et qui permet d'alimenter les valeurs affichées 
// pour créer un local state => il faut utiliser une fonction spéciale de React => hook
// use....
// useState()  => fonction de React 

// expo publish 