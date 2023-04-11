import { StyleSheet, Text, View , Button , TextInput } from 'react-native'
import React from 'react'

const CreerCompte = ({navigation}) => {
  return (
    <View>
      <Text>CreerCompte</Text>
      <TextInput placeholder='password' style={styles.input}/>
      <Button onPress={ () => navigation.goBack() } color="pink" title="annuler" />
    </View>
  )
}

export default CreerCompte

const styles = StyleSheet.create({
    input : {
        borderWidth : 1,
        padding : 10 ,
        borderColor : "black",
        backgroundColor : "white",
        marginBottom : 10
    }
})