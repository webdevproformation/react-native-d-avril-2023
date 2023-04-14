import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from "react-redux"

const Exo3 = () => {

  const dispatch = useDispatch()

  return (
    <View>
      <Text>Exo3</Text>
      <Button onPress={() => dispatch({type : "AUGMENTER_PLUS_CINQ"})} title="+5" />
      <Button onPress={() => dispatch({type : "AUGMENTER_PLUS_CINQ_BIS", payload : 5})} title="+5" />
    </View>
  )
}

export default Exo3

const styles = StyleSheet.create({})