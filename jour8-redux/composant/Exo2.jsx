import {  Text, View , Image, Button } from 'react-native'
import React , {useReducer} from 'react'
function reducer(state, action){
    switch(action){
        case "ZOOM":
            return 120
        case "DEZOOM":
            return 80
        case "HIDE":
            return 0
        case "RESET":
            return 100
        default :
            return state 
    }
}
const Exo2 = () => {
  const [ taille , dispatch] = useReducer( reducer , 100)
  return (
    <View>
      <Text>Exo2</Text>
      <Image source={{ uri : "https://source.unsplash.com/random/300x300"  }} 
             style={{width: taille, height :taille}} />
      <Button onPress={ () => dispatch("ZOOM") } title="zoom" />
      <Button onPress={ () => dispatch("DEZOOM") } title="dezoom" />
      <Button onPress={ () => dispatch("HIDE") } title="HIDE" />
      <Button onPress={ () => dispatch("RESET") } title="remise à zéro" />
    </View>
  )
}

export default Exo2