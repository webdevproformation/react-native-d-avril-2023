import { StyleSheet, Text, View , TextInput, Button } from 'react-native'
import React from 'react'

const Formulaire = () => {
  return (
    <View style={styles.box}>
      <Text>Formulaire</Text>
      <TextInput placeholder='email' style={styles.input} />
      <TextInput placeholder='password' style={styles.input} />
      <Button title="soumettre" onPress={() => {}}/>
    </View>
  )
}

export default Formulaire

const styles = StyleSheet.create({
    box : { margin : 10},
    input : { borderWidth : 1 , borderColor : "black" , padding : 5 , marginBottom : 10}
})