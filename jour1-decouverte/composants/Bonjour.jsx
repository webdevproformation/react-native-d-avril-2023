import { Text , StyleSheet } from "react-native"

export function Bonjour(){
    return <Text style={styles.miseEnFormeP}>Bonjour</Text>
}

const styles = StyleSheet.create({
    miseEnFormeP : {
        color : "green" ,
        fontSize : 60
    }
})
