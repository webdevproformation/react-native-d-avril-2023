import { StyleSheet, Text, View , Button , TextInput } from 'react-native'
import React , { useReducer , useState } from 'react'

function reduce( state , action ){ // regroupé dans une seule fonction 
    switch (action.type) {
        /* case "AUGMENTER" : 
            return state + 1 ;
        case "DIMINUER" :
            return state - 1 ;
        case "ZERO" :
            return 0 ; */
        case "AUGMENTER_P" :
            return state + parseInt(action.payload )
        default :
            return state ; 
    }
}
// expliquer le hook useReducer 
// il a la même fonction que useState => hook permet de gérer 
// state manager gérer l'état du composant 
// dans React quand vous utilisez useState => useReducer 
// comme pour useState => useReducer lorsqu'il est exécuté 
// il retourne un tableau avec 2 valeurs 
// nb => state 
// fonction que l'on appeler un dispatcher 
// par contre useReducer prend 2 paramètres ( fonction , valeur initial de l'état )
// la fonction fonction reductrice 
// dans la fonction réductrice que l'on va stocker l'ensemble des traitements que l'on veut effectuer sur l'état
// Contexte + useReducer => Redux  
const B = () => {
  // const [nb, setNb] = useState(0)
  const [ nb , dispatch ] = useReducer( reduce , 0 )
  const [ t , setT ] = useState( "" )
  return (
    <View>
      <Text>composant b</Text>
      <Text>{ nb }</Text>
      <Button onPress={() => dispatch("AUGMENTER")} title="augmenter" color="purple" />
      <Button onPress={() => dispatch("DIMINUER")} title="diminuer" color="pink" />
      <Button onPress={() => dispatch("ZERO")} title="remise à 0"  />
      <TextInput value={t} onChangeText={(texte) => setT(texte)} />
      <Button onPress={() => dispatch({ type : "AUGMENTER_P" , payload : t })} title="+ 12"  />
    </View>
  )
}

export default B

const styles = StyleSheet.create({})