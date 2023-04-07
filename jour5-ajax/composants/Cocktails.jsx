import { StyleSheet, Text, View , TextInput , Button } from 'react-native'
import React , {useState} from 'react'
const Cocktails = () => {
  const [recherche , setRecherche] = useState("")
  return (
    <View style={styles.box}>
        <View style={ styles.search }>
            <TextInput placeholder='rechercher' onChangeText={(nomCocktail) => {setRecherche(nomCocktail)}} style={styles.input} />
            <Button title="rechercher" onPress={() => { console.log(recherche) }} />
        </View>
        <View style={styles.resultat}>
            <Text>utiliser le formulaire ci dessus pour avoir une liste de cocktails</Text>
        </View>
    </View>
  )
}

export default Cocktails

const styles = StyleSheet.create({
    box: { paddingHorizontal : 10},
    search : { flexDirection: "row" },
    input:{ padding : 5,  borderColor : "black", borderWidth : 1 , marginRight :10,   flex:1},
    resultat : {  marginTop : 10 }
})