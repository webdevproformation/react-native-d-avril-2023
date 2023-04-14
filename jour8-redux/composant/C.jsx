import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector , useDispatch } from "react-redux"

const C = () => {
    // permet de récupérer la valeur de notre state
    const valeur = useSelector((store) => { return store.reducerNb })
    const dispatch = useDispatch() ; 
  return (
    <View>
      <Text>C</Text>
      
      <Text>{valeur}</Text>
      <Button onPress={ () => dispatch({type : "AUGMENTER"})} title="augmenter" />
    </View>
  )
}

export default C

const styles = StyleSheet.create({})