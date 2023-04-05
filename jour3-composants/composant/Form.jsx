// sfc
// ffc 
// imrn
// snippet 
// import { first } from 'react-native'
// rnfe
// rnfes
// https://github.com/ults-io/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md
import { StyleSheet, Text, View , TextInput, Button } from 'react-native'
import React from 'react'

const Form = () => {
  return (
    <View style={styles.box}>
      <Text>Créer un formulaire</Text>
      {/** https://reactnative.dev/docs/textinput */}
      <TextInput placeholder='votre nom' style={styles.input}  />
      <TextInput placeholder='commentaire' multiline={true}  numberOfLines={5} style={[styles.input ]}/> 
      <Button title="Soumettre" onPress={() => {}} />
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    box : { paddingHorizontal : 10 , alignItems: 'flex-start'},
    input : { borderColor : "black" , padding : 5 , borderWidth : 1 , marginBottom : 10 , width: "100%"  }
})

// cas pratique créer un nouveau composant Exo1
// titre => exo 1
// champ input monologne => email
// champ input monologne => sujet
// champ input multiligne => description
// bouton de soumission
// ajouter ce formulaire sous le formulaire Form