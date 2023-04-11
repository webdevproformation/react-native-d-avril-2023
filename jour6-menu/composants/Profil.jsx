import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profil = () => {
  return (
    <View style={styles.box}>
      <Text  style={styles.titre}>Profil</Text>
    </View>
  )
}

export default Profil

const styles = StyleSheet.create({
    box : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titre : {
        fontSize : 30,
    }
})