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