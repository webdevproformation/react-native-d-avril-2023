import {  Text, View , Image, Button } from 'react-native'
import React , {useContext} from 'react'
import { ExoContext } from "../contexts/exoContext"

const Exo2 = () => {
  const {taille , dispatch} = useContext(ExoContext); 
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