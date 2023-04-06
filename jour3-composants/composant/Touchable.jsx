//rnfes
import { 
        StyleSheet, 
        Text, 
        View , 
        TouchableHighlight ,
        TouchableNativeFeedback , // ne fonctionne que sur les téléphones android
        TouchableOpacity ,
        TouchableWithoutFeedback
    } from 'react-native'
import React from 'react'

const Touchable = () => {
  return (
    <View>
      <Text>Touchable</Text>
    </View>
  )
}

export default Touchable

const styles = StyleSheet.create({})