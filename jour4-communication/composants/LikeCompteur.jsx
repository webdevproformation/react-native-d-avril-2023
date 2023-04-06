import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LikeCompteur = (props) => {
  return (
    <View>
      <Text>LikeCompteur</Text>
      <Text>{ JSON.stringify(props.compteur) }</Text>
      <Button title="+" onPress={() => { props.augmenter(props.compteur.id) }} />
      {/** exécuter une fonction qui a été transmis comme props du parent => Enfant 
       * je suis entrain d'exécuter une fonction définie dans le Parent depuis l'Enfant 
       */}
    </View>
  )
}

export default LikeCompteur

const styles = StyleSheet.create({})