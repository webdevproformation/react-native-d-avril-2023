import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'

const Galerie = () => {
  return (
    <View>
      <Text>Galerie</Text>
      {/* affiche une image qui est stockée dans le dossier assets / image locale => require */}
      <Image source={require("../assets/favicon.png")} />

      <Image source={{ uri : "https://source.unsplash.com/random/200x100" , width:200, height:100  }} />
    </View>
  )
}

export default Galerie

const styles = StyleSheet.create({})