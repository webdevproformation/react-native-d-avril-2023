//rnfes
import { 
        StyleSheet, 
        Text, 
        View , 
        Image ,
        TouchableHighlight ,
        TouchableNativeFeedback , // ne fonctionne que sur les téléphones android
        TouchableOpacity ,
        TouchableWithoutFeedback
        // site internet => https://icons.getbootstrap.com/
        // télécharger une image de votre choix 
        // stocker dans le dossier assets du projet jour3-composants
    } from 'react-native'
import React from 'react'
// import AndroidLogo from "../assets/android2.svg"

const Touchable = () => {
  return (
    <View style={styles.box}>
      <Text>Touchables</Text>
      <View style={{flexDirection : "row" , justifyContent : "space-evenly"}}>
        <TouchableOpacity style={ styles.touchableOpacity }>
            <Image source={{uri : "https://via.placeholder.com/50x50" , width:50 , height:50 }}/> 
        </TouchableOpacity>
        {/** couleur actuelle =>  */}
        <TouchableNativeFeedback style={{ padding : 20 }}  background={TouchableNativeFeedback.Ripple(
          "#000",
          "#fff",
        )} onPress={() => {}}>
            <Image source={{uri : "https://via.placeholder.com/50x50" , width:50 , height:50 }}/> 
        </TouchableNativeFeedback>
        <TouchableHighlight style={ styles.touchableOpacity } activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() =>{}}>
            <Image source={{uri : "https://via.placeholder.com/50x50" , width:50 , height:50 }}/> 
        </TouchableHighlight>
        <TouchableWithoutFeedback onPress={() => { console.warn("no feed back") }} style={ styles.touchableOpacity } >
            <Image source={{uri : "https://via.placeholder.com/50x50" , width:50 , height:50 }}/>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}
export default Touchable

const styles = StyleSheet.create({
    box: { paddingHorizontal : 10 },
    touchableOpacity : { width : 100 , height :100 , backgroundColor : "#eee", justifyContent :"center" , alignItems: "center" }
})
// rdv 10h45 bon café @ toute !!!
// props // action event // communiquer des composants 
// useState 