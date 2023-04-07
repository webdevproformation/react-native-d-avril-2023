import { StyleSheet, Text, View , Button } from 'react-native'
import React from 'react'

const Article = ({id , titre , contenu , nb , augmenter}) => {
  return (
    <View style={styles.article}>
      <Text>{titre}</Text>
      <Text>{contenu}</Text>
      <View style={styles.likeBox}>
        <Button onPress={() => augmenter(id)} title="+" />
        <Text>{nb}</Text>
      </View>
    </View>
  )
}

export default Article

const styles = StyleSheet.create({
    article : { paddingHorizontal : 10 , marginVertical : 20 },
    likeBox : { flexDirection : "row" , alignItems : "baseline"}
})