import { StyleSheet, Text, View , TouchableWithoutFeedback } from 'react-native'
import React , {useState} from 'react'
import Hand from "../assets/hand.svg"
const Like = () => {
    const [nb , setNb] = useState(0)
    return (
        <View style={styles.box}>
            <TouchableWithoutFeedback onPress={() => { setNb(nb + 1) }}>
                <Hand width={30} height={30} fill="#3b5998" />
            </TouchableWithoutFeedback>
            <Text style={styles.espace}>{ nb }</Text>
        </View>
    )
}
export default Like
const styles = StyleSheet.create({
    box : {flexDirection : "row" , alignItems: "flex-end" , marginBottom: 30},
    espace : {marginLeft: 10}
})

/**
npm i react-native-svg react-native-svg-transformer
npx expo install react-native-svg@13.4.0

npx expo customize metro.config.js

svg 

npm i 

npx create-expo-app --template => ajouter svg en + 

// props => App => Composant (Premier)
// Like state local que l'on modifier avec setNb => mettre à jour la vue 
// Essayer d'envoyer des info° => parent => Enfant => enfant lorsque l'on va cliquer sur 
// une action > modidifier la valeur stockée dans le parent 

*/