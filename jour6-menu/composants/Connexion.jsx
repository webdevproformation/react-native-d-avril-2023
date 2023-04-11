import { StyleSheet, Text, View , TextInput , Button } from 'react-native'
import React from 'react'

const Connexion = ({navigation}) => {
  return (
    <View>
      <Text>Connexion</Text>
      <TextInput placeholder='login' style={styles.input}/>
      <TextInput placeholder='password' style={styles.input}/>
      <Button onPress={() => navigation.navigate("creer-compte")} title="créer un compte ??" />
    </View>
  )
}

export default Connexion

const styles = StyleSheet.create({
    input : {
        borderWidth : 1,
        padding : 10 ,
        borderColor : "black",
        backgroundColor : "white",
        marginBottom : 10
    }
})