import { StyleSheet, Text, View, TextInput , Button } from 'react-native'
import React from 'react'

const Exo1 = () => {
  return (
    <View style={[styles.view , styles.delimiter]}>
      <Text style>Exo1</Text>
      <TextInput placeholder='votre email' style={styles.box} />
      <TextInput placeholder='votre sujet' style={styles.box} />
      <TextInput placeholder='description' numberOfLines={5} multiline={true} style={styles.box}/>
      <Button title="envoyer" onPress={() => {}} />
    </View>
  )
}

export default Exo1

const styles = StyleSheet.create({
    box : { borderColor : "black" , borderWidth : 1 , marginBottom : 10 , padding : 5 },
    view : { paddingHorizontal : 10 },
    delimiter : {paddingTop : 10 , marginTop : 10 , borderTopColor : "black" , borderTopWidth : 1}
})