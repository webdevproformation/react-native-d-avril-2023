import { StyleSheet, Text, View , TextInput , Button } from 'react-native'
import React , { useState } from 'react'

const Form = ({db}) => {
    
    const [titre, setTitre] = useState("")
    const [contenu, setContenu] = useState("")
    function ajouter(){
        db.transaction(function(tx){
            tx.executeSql( `INSERT INTO articles ( titre, contenu ) VALUES ( ? , ? );`,
                            [ titre  , contenu ] ,
                            function(transact, resultat){ 
                                console.log( "INSERT réussi" );
                                setTitre("")
                                setContenu("")
                                
                            },
                            function(transact , err){
                                console.log( "INSERT échec" , err );
                            }
                        )
        })
    }
  return (
    <View style={styles.box}>
      <Text style={styles.titre}>ajouter un nouvel article</Text>
      <TextInput placeholder='titre' value={titre} onChangeText={(text) => setTitre(text)}  style={styles.input}/>
      <TextInput placeholder='contenu' value={contenu} onChangeText={(text) => setContenu(text) } 
                multiline={true} numberOfLines={2}   style={styles.input} />
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