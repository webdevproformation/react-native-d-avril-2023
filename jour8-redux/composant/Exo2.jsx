import {  Text, View , Image, Button } from 'react-native'
import React , {useReducer} from 'react'
function reducer(state, action){
    switch(action){
        case "ZOOM":
            return {width: 120, height :120}
        case "DEZOOM":
            return {width: 80, height :80}
        case "HIDE":
            return {width: 0, height :0}
        case "RESET":
            return {width: 100, height :100 }
        case "PERSONNALISE":
              return {width: 120, height :200}
        default :
            return state 
    }
}
const Exo2 = () => {
  const [ taille , dispatch] = useReducer( reducer , {width: 100, height :100})
  return (
    <View>
      <Text>Exo2</Text>
      <Image source={{ uri : "https://source.unsplash.com/random/300x300"  }} 
             style={taille} />
      <Button onPress={ () => dispatch("ZOOM") } title="zoom" />
      <Button onPress={ () => dispatch("DEZOOM") } title="dezoom" />
      <Button onPress={ () => dispatch("HIDE") } title="HIDE" />
      <Button onPress={ () => dispatch("RESET") } title="remise à zéro" />
      <Button onPress={ () => dispatch("PERSONNALISE") } title="question" />
    </View>
  )
}

export default Exo2