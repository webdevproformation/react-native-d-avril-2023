import { StyleSheet, Text, View , TextInput , Button } from 'react-native'
import React , { useState , useContext, useEffect } from 'react'
import {ArticleContext} from "../context/articleContext"

const Form = ({db}) => {
    const [titre, setTitre] = useState("")
    const [contenu, setContenu] = useState("")
    const [ update , setUpdate ] = useState(false )

    const {articleAModifier , viderArticle} = useContext( ArticleContext );

    useEffect( function() {
        setTitre(articleAModifier.titre)
        setContenu(articleAModifier.contenu)
        setUpdate(true);
    }, [articleAModifier.id])

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
    function annuler(){
        setTitre("")
        setContenu("")
        setUpdate(false);
        // viderArticle()
    }

    function updateArticle(){
        // requete SQL UPDATE 
        // console.log(articleAModifier.id , titre, contenu); 
        db.transaction(function(tx){
            tx.executeSql(`UPDATE articles SET titre = ? , contenu = ? WHERE id = ? ; ` ,
                    [ titre , contenu , articleAModifier.id ] ,
                    function(transact, resultat){
                        console.log("UPDATE success");
                        annuler()
                    },
                    function(transact , err){
                        console.log("UPDATE échec")
                    }
            )
        })
    }
    // rdv 15h30 bon café !!!!!!!!!!!!!!!!!!!!!!


  return (
    <View style={styles.box}>
      <Text style={styles.titre}>ajouter un nouvel article</Text>
      <TextInput placeholder='titre' value={titre} onChangeText={(text) => setTitre(text)}  style={styles.input}/>
      <TextInput placeholder='contenu' value={contenu} onChangeText={(text) => setContenu(text) } 
                multiline={true} numberOfLines={2}   style={styles.input} />
       { update ? 
            <View style={{ flexDirection : "row" } } >
                <Button onPress={updateArticle} title="valider modification" color="pink" />
                <Button onPress={annuler} title="annuler" color="purple" />
            </View>
            : 
            <Button onPress={ajouter} title="ajouter" />
        }
       
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    titre : {  paddingVertical : 10},
    box : { paddingHorizontal : 10 },
    input : { marginBottom : 10 , borderColor : "black" , borderWidth : 1 , padding : 5 }
})