import { StyleSheet, Text, View , TextInput , Button } from 'react-native'
import React , {useState} from 'react'

const Form = () => {
    const [titre, setTitre] = useState("")
    const [contenu, setContenu] = useState("")
    function ajouter(){
        setTitre("")
        setContenu("")
    }
  return (
    <View style={styles.box}>
      <Text style={styles.titre}>ajouter une nouvel article</Text>
      <TextInput placeholder='titre' value={titre} onChangeText={(text) => setTitre(text)}  style={styles.input}/>
      <TextInput placeholder='contenu' value={contenu} onChangeText={(text) => setContenu(text) } 
                multiline={true} numberOfLines={5}   style={styles.input} />
       <Button onPress={ajouter} title="ajouter" />
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    titre : {  paddingVertical : 10},
    box : { paddingHorizontal : 10 },
    input : { marginBottom : 10 , borderColor : "black" , borderWidth : 1 , padding : 5 }
})