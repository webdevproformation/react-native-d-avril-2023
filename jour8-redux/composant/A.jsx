import { StyleSheet, Text, View , Button } from 'react-native'
import React , {useState} from 'react'

const A = () => {

    const [nb, setNb] = useState(0)

  return (
    <View>
      <Text>{ nb }</Text>
      <Button onPress={() => setNb(nb + 1)} title="augmenter" color="purple" style={styles.btn} />
      <Button onPress={() => setNb(nb - 1)} title="diminuer" color="pink" style={styles.btn} />
      <Button onPress={() => setNb(0)} title="remise à 0"  style={styles.btn} />
    </View>
  )
}
export default A

const styles = StyleSheet.create({
    btn : { paddingBottom : 10 }
})