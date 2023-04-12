import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profil = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.titre}>Profil</Text>
    </View>
  )
}

export default Profil

const styles = StyleSheet.create({
    box: { alignItems : "center"},
    titre : {fontSize : 20}
})