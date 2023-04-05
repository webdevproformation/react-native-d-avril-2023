import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'

const Exo2 = () => {
  return (
    <View>
      <Text>Exo2</Text>
      <View style={styles.galerie}>
            <Image source={{ uri : "https://source.unsplash.com/random/110x110" , width:110, height:110 }} style={styles.mb} />
            <Image source={{ uri : "https://source.unsplash.com/random/110x111" , width:110, height:110 }} style={styles.mb}/>
            <Image source={{ uri : "https://source.unsplash.com/random/110x112" , width:110, height:110 }} style={styles.mb}/>
            <Image source={{ uri : "https://source.unsplash.com/random/110x113" , width:110, height:110 }} style={styles.mb}/>
            <Image source={{ uri : "https://source.unsplash.com/random/110x114" , width:110, height:110 }} style={styles.mb}/>
            <Image source={{ uri : "https://source.unsplash.com/random/110x115" , width:110, height:110 }} style={styles.mb}/>
      </View>
    </View>
  )
}

export default Exo2

const styles = StyleSheet.create({
    galerie : {
        flexDirection : "row",
        justifyContent: "space-around",
        flexWrap : "wrap"
    } ,
    mb :{
        marginBottom : 10
    }

})