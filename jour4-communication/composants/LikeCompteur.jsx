import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LikeCompteur = (props) => {
  return (
    <View>
      <Text>LikeCompteur</Text>
      <Text>{ JSON.stringify(props.compteur) }</Text>
    </View>
  )
}

export default LikeCompteur

const styles = StyleSheet.create({})