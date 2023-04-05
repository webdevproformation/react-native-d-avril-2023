import { StyleSheet, Text, View, TextInput , Button } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox"
import React from 'react'

const Exo1 = () => {
  return (
    <View style={[styles.view , styles.delimiter]}>
      <Text style>Exo1</Text>
      <TextInput placeholder='votre email' style={styles.box} />
      <TextInput placeholder='votre sujet' style={styles.box} />
      <TextInput placeholder='description' numberOfLines={5} multiline={true} style={styles.box}/>
      <BouncyCheckbox onPress={() => {}} text="accepter les conditions" style={{ marginBottom : 10 }} />
      <Button title="envoyer" onPress={() => {}} />
    </View>
  )
}
// https://github.com/WrathChaos/react-native-bouncy-checkbox
// npm i react-native-bouncy-checkbox

export default Exo1

const styles = StyleSheet.create({
    box : { borderColor : "black" , borderWidth : 1 , marginBottom : 10 , padding : 5 },
    view : { paddingHorizontal : 10 },
    delimiter : {paddingTop : 10 , marginTop : 10 , borderTopColor : "black" , borderTopWidth : 1}
})