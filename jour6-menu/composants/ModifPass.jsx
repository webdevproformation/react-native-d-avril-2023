import { StyleSheet, Text, View , TextInput } from 'react-native'
import React from 'react'

const ModifPass = () => {
  return (
    <View style={styles.box}>
      <Text>ModifPass</Text>
      <TextInput placeholder='changer password' />
    </View>
  )
}

export default ModifPass

const styles = StyleSheet.create({
    box : {
        flex : 1,
        justifyContent: "center",
        alignItems : "center"
    }
})