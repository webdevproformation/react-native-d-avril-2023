import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch , useSelector } from "react-redux"

const Exo3 = () => {
    const profil = useSelector(store => store.reducerProfil)
  const dispatch = useDispatch()

  return (
    <View>
      <Text>Exo3</Text>
      <Button onPress={() => dispatch({type : "AUGMENTER_PLUS_CINQ"})} title="+5" />
      <Button onPress={() => dispatch({type : "AUGMENTER_PLUS_CINQ_BIS", payload : 5})} title="+5" />
      <Text>{JSON.stringify(profil)}</Text>
      <Button onPress={() => dispatch({type : "LOGIN"})} title="login" />
      <Button onPress={() => dispatch({type : "LOGOUT"})} title="logout" />
    </View>
  )
}

export default Exo3

const styles = StyleSheet.create({})