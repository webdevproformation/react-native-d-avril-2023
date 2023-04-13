import { StyleSheet, Text, View , Image, Button } from 'react-native'
import React , {useReducer} from 'react'
import { reducer } from "../reducer/imageReducer"

const Exo = () => {
  const [style, dispatch] = useReducer( reducer , {width: 100, height : 100})
  return (
    <View>
      <Text>Exo</Text>
      <Image source={{ uri : "https://source.unsplash.com/random/300x300"  }} style={style} />
      <Button onPress={ () => dispatch("ZOOM") } title="zoom" />
      <Button onPress={ () => dispatch("DEZOOM") } title="dezoom" />
      <Button onPress={ () => dispatch("HIDE") } title="HIDE" />
      <Button onPress={ () => dispatch("RESET") } title="remise à zéro" />
    </View>
  )
}

export default Exo

const styles = StyleSheet.create({})